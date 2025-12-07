'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as THREE from 'three'
import { inSphere } from 'maath/random'

interface InteractiveParticlesProps {
  count?: number
}

function ParticleFieldContent({ count = 3500 }: InteractiveParticlesProps) {
  const ref = useRef<THREE.Points>(null)
  const { mouse, viewport } = useThree()
  const [positions, setPositions] = useState<Float32Array | null>(null)
  const originalPositionsRef = useRef<Float32Array | null>(null)
  const velocitiesRef = useRef<Float32Array | null>(null)

  useEffect(() => {
    // Initialize particle positions in a sphere
    const sphere = new Float32Array(count * 3)
    inSphere(sphere, { radius: 1.5 })
    
    // Store original positions
    originalPositionsRef.current = new Float32Array(sphere)
    
    // Initialize velocities
    velocitiesRef.current = new Float32Array(count * 3)
    
    setPositions(sphere)
  }, [count])

  useFrame((state) => {
    if (!ref.current || !positions || !originalPositionsRef.current || !velocitiesRef.current) return

    const time = state.clock.getElapsedTime()
    const positionAttribute = ref.current.geometry.getAttribute('position') as THREE.BufferAttribute
    const pos = positionAttribute.array as Float32Array
    const originalPos = originalPositionsRef.current
    const velocities = velocitiesRef.current

    // Gentle rotation
    ref.current.rotation.x = Math.sin(time * 0.1) * 0.3
    ref.current.rotation.y += 0.0002

    // Update each particle
    for (let i = 0; i < pos.length; i += 3) {
      const idx = i / 3

      // Get original position
      let x = originalPos[i]
      let y = originalPos[i + 1]
      let z = originalPos[i + 2]

      // Mouse influence - create repulsion/attraction zone
      const mouseX = mouse.x * 2
      const mouseY = mouse.y * 2
      const distToMouse = Math.sqrt(
        Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2)
      )

      if (distToMouse < 1.2) {
        const angle = Math.atan2(mouseY - y, mouseX - x)
        const distance = 1.2 - distToMouse
        const force = distance * 0.03

        // Repel particles from mouse
        x -= Math.cos(angle) * force
        y -= Math.sin(angle) * force
      }

      // Apply gentle wave effect based on time
      const waveX = Math.sin(time * 0.5 + i * 0.0001) * 0.1
      const waveY = Math.cos(time * 0.3 + i * 0.0001) * 0.1

      // Update position with some damping
      pos[i] = x + waveX
      pos[i + 1] = y + waveY
      pos[i + 2] = z
    }

    positionAttribute.needsUpdate = true
  })

  return (
    <>
      {positions && (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#A78BFA"
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.5}
          />
        </Points>
      )}
    </>
  )
}

export default function InteractiveParticles(props?: InteractiveParticlesProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 1], fov: 75 }}
        dpr={[1, 1.2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ParticleFieldContent count={props?.count} />
        <Preload all />
      </Canvas>
    </div>
  )
}
