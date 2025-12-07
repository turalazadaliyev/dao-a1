'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function BlobModel() {
  const meshRef = useRef<THREE.Mesh | null>(null)
  const materialRef = useRef<any>(null)

  const baseScale = 0.6
  const targetRotation = useRef({ x: 0, y: 0 })
  const currentRotation = useRef({ x: 0, y: 0 })
  const targetScale = useRef(baseScale)
  const currentScale = useRef(baseScale)
  const stretch = useRef({ x: 1, y: 1, z: 1 })

  const isDragging = useRef(false)
  const isHovered = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const wobble = useRef({ amp: 0, decay: 0.97 })
  const timeRef = useRef(0)

  const handlePointerOver = (e: any) => {
    e.stopPropagation()
    isHovered.current = true
    targetScale.current = baseScale * 1.02
    if (materialRef.current) {
      materialRef.current.distort = 0.18
      materialRef.current.speed = 1.2
    }
  }

  const handlePointerOut = (e: any) => {
    e.stopPropagation()
    isHovered.current = false
    if (!isDragging.current) targetScale.current = baseScale
    if (materialRef.current) {
      materialRef.current.distort = 0.15
      materialRef.current.speed = 0.8
    }
  }

  const handlePointerDown = (e: any) => {
    e.stopPropagation()
    isDragging.current = true
    dragStart.current = { x: e.clientX, y: e.clientY }
    targetScale.current = Math.min(baseScale * 1.05, baseScale * 1.05)
    if (materialRef.current) materialRef.current.distort = 0.32
    wobble.current.amp = 0.05
  }

  const handlePointerMove = (e: any) => {
    e.stopPropagation()
    const nx = (e.clientX / window.innerWidth) * 2 - 1
    const ny = -(e.clientY / window.innerHeight) * 2 + 1
    if (isDragging.current) {
      targetRotation.current.y = nx * 0.5
      targetRotation.current.x = ny * 0.5
      const dx = (e.clientX - dragStart.current.x) / window.innerWidth
      const dy = (e.clientY - dragStart.current.y) / window.innerHeight
      stretch.current.x = 1 + Math.min(Math.abs(dx) * 1.5, 0.15)
      stretch.current.y = 1 - Math.min(Math.abs(dy) * 1.0, 0.1)
    } else if (isHovered.current) {
      targetRotation.current.y = nx * 0.2
      targetRotation.current.x = ny * 0.2
    } else {
      targetRotation.current.y = 0
      targetRotation.current.x = 0
    }
  }

  const handlePointerUp = (e: any) => {
    e.stopPropagation()
    isDragging.current = false
    targetScale.current = isHovered.current ? baseScale * 1.02 : baseScale
    if (materialRef.current) materialRef.current.distort = isHovered.current ? 0.18 : 0.15
    wobble.current.amp = 0.06
  }

  useFrame(({ clock }) => {
    timeRef.current = clock.elapsedTime

    if (!meshRef.current) return

    const rx = targetRotation.current.x
    const ry = targetRotation.current.y
    const lerpFactor = isDragging.current ? 0.1 : 0.03
    currentRotation.current.x += (rx - currentRotation.current.x) * lerpFactor
    currentRotation.current.y += (ry - currentRotation.current.y) * lerpFactor

    if (!isDragging.current && wobble.current.amp > 0.001) {
      const wob = Math.sin(timeRef.current * 16) * wobble.current.amp
      wobble.current.amp *= wobble.current.decay
      meshRef.current.rotation.x = currentRotation.current.x + wob * 0.35
      meshRef.current.rotation.y = currentRotation.current.y + wob * 0.5
    } else {
      meshRef.current.rotation.x = currentRotation.current.x
      meshRef.current.rotation.y = currentRotation.current.y
    }

    meshRef.current.position.z = Math.sin(timeRef.current * 0.4) * 0.02

    currentScale.current += (targetScale.current - currentScale.current) * 0.07
    const sx = currentScale.current * (isDragging.current ? stretch.current.x : 1)
    const sy = currentScale.current * (isDragging.current ? stretch.current.y : 1)
    const sz = currentScale.current
    meshRef.current.scale.set(sx, sy, sz)

    if (materialRef.current) {
      const base = isDragging.current ? 0.32 : isHovered.current ? 0.18 : 0.15
      materialRef.current.distort += (base - materialRef.current.distort) * 0.05
      materialRef.current.speed = isDragging.current ? 1.4 : isHovered.current ? 1.2 : 0.8
    }
  })

  return (
    <Float speed={0.6} rotationIntensity={0.02} floatIntensity={0.15}>
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        castShadow={false}
        receiveShadow={false}
      >
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#5B4EFF"
          emissive="#6D28D9"
          emissiveIntensity={0.45}
          metalness={0.2}
          roughness={0.35}
          distort={0.15}
          speed={0.8}
          toneMapped={false}
        />
      </mesh>
    </Float>
  )
}

export default function Slime3D() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 45 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[8, 6, 5]} intensity={1.0} />
        <directionalLight position={[-5, -2, -3]} intensity={0.3} />
        <pointLight position={[0, 0, 2]} intensity={0.4} color="#6D28D9" />

        <BlobModel />
      </Canvas>
    </div>
  )
}
