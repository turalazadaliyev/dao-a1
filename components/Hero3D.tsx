'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Hero3DContent = dynamic(
  () => import('./Hero3DContent'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center animate-pulse">
        <div className="text-gray-400">Loading 3D animation...</div>
      </div>
    ),
  }
)

export default function Hero3D() {
  return (
    <Suspense fallback={
      <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl animate-pulse" />
    }>
      <Hero3DContent />
    </Suspense>
  )
}
