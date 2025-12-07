'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as THREE from 'three'
import { inSphere } from 'maath/random'

interface ParticleFieldProps {
  count?: number
  speed?: number
}

function ParticleField({ count = 3000, speed = 0.4 }: ParticleFieldProps) {
  const ref = useRef<THREE.Points>(null)
  const { mouse } = useThree()
  const [positions, setPositions] = useState<Float32Array | null>(null)
  const positionsRef = useRef<Float32Array | null>(null)

  useEffect(() => {
    const sphere = new Float32Array(count * 3)
    inSphere(sphere, { radius: 1.2 })
    positionsRef.current = sphere
    setPositions(sphere)
  }, [count])

  useFrame((state) => {
    if (!ref.current || !positionsRef.current) return

    // Gentle rotation
    ref.current.rotation.x -= speed * 0.00003
    ref.current.rotation.y -= speed * 0.00005

    // Mouse interaction - smooth particle distortion
    const positionAttribute = ref.current.geometry.getAttribute('position') as THREE.BufferAttribute
    const positions = positionAttribute.array as Float32Array
    const originalPositions = positionsRef.current

    for (let i = 0; i < positions.length; i += 3) {
      // Start from original position
      positions[i] = originalPositions[i]
      positions[i + 1] = originalPositions[i + 1]
      positions[i + 2] = originalPositions[i + 2]

      const x = positions[i]
      const y = positions[i + 1]

      // Mouse influence
      const distToMouse = Math.sqrt(
        Math.pow(mouse.x * 2 - x, 2) + Math.pow(mouse.y * 2 - y, 2)
      )

      if (distToMouse < 0.6) {
        const angle = Math.atan2(mouse.y * 2 - y, mouse.x * 2 - x)
        const distance = 0.6 - distToMouse
        positions[i] += Math.cos(angle) * distance * 0.015
        positions[i + 1] += Math.sin(angle) * distance * 0.015
      }
    }

    positionAttribute.needsUpdate = true
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {positions && (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#14B8A6"
            size={0.0025}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.6}
          />
        </Points>
      )}
    </group>
  )
}

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 w-full h-screen -z-10">
      <Canvas
        camera={{ position: [0, 0, 1.5], fov: 75 }}
        dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
        performance={{ min: 0.5 }}
      >
        <ParticleField count={3000} speed={0.4} />
        <Preload all />
      </Canvas>
    </div>
  )
}
