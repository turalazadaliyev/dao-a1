'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create particle system
    const particleCount = 300
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10

      velocities[i] = (Math.random() - 0.5) * 0.02
      velocities[i + 1] = (Math.random() - 0.5) * 0.02
      velocities[i + 2] = (Math.random() - 0.5) * 0.02
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // Create central orb
    const orbGeometry = new THREE.IcosahedronGeometry(1.5, 16)
    const orbMaterial = new THREE.MeshPhongMaterial({
      color: 0x00e5ff,
      emissive: 0x00ffa3,
      wireframe: true,
    })
    const orb = new THREE.Mesh(orbGeometry, orbMaterial)
    scene.add(orb)

    // Lighting
    const light = new THREE.PointLight(0xa855f7, 1, 100)
    light.position.set(5, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Update particles
      const positionAttribute = geometry.getAttribute('position')
      const positions = positionAttribute.array as Float32Array

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]

        // Wrap around
        if (positions[i] > 5) positions[i] = -5
        if (positions[i + 1] > 5) positions[i + 1] = -5
        if (positions[i + 2] > 5) positions[i + 2] = -5
      }

      positionAttribute.needsUpdate = true

      orb.rotation.x += 0.001
      orb.rotation.y += 0.002
      points.rotation.z += 0.0005

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      orbMaterial.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-96 rounded-2xl overflow-hidden glass border border-primary/20" />
  )
}
