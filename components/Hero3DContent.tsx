'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PresentationControls, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSlimeBall() {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.8}
      rotation={[0, 0, 0]}
    >
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} scale={1.5}>
          <icosahedronGeometry args={[1, 5]} />
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.5}
            speed={3}
            roughness={0.4}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </PresentationControls>
  )
}

export default function Hero3DContent() {
  return (
    <div className="relative w-full h-96 rounded-3xl overflow-hidden glass">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />

      {/* Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 35 }}
        className="!absolute inset-0"
        style={{ touchAction: 'none' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-5, -5, 5]} intensity={0.6} color="#00e5ff" />
        <AnimatedSlimeBall />
      </Canvas>

      {/* Interactive hint */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-400 pointer-events-none opacity-60">
        Drag to rotate
      </div>
    </div>
  )
}
