'use client'

import React, { Suspense } from 'react'
import Button from './Button'
import Slime3D from './Slime3D'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Build Public Goods that Scale
            </h1>
            <p className="text-gray-300 max-w-xl">
              Innovative quadratic funding tools for DAOs to fund impactful projects with fairness and transparency.
            </p>
            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                variant="primary"
                onClick={() => (window.location.href = '/projects')}
              >
                Explore Projects
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => (window.location.href = '/rounds')}
              >
                View Rounds
              </Button>
            </div>
          </div>
          <div className="mt-6 md:mt-0 flex justify-end">
            <div className="h-[260px] md:h-[340px] w-[320px] md:w-[420px] relative z-20">
              <Suspense fallback={null}>
                <Slime3D />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
