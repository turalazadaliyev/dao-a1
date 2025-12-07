'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import FeatureGrid from '@/components/FeatureGrid'
import ProjectCard from '@/components/ProjectCard'

const InteractiveParticles = dynamic(() => import('@/components/InteractiveParticles'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  const featuredProjects = [
    {
      id: '1',
      title: 'Open Climate Solutions',
      description: 'Developing open-source tools for climate impact measurement.',
      category: 'Climate',
      raised: 125000,
      contributors: 345,
      goal: 250000,
    },
    {
      id: '2',
      title: 'Education for Everyone',
      description: 'Providing free education resources to underserved communities.',
      category: 'Education',
      raised: 89500,
      contributors: 267,
      goal: 150000,
    },
    {
      id: '3',
      title: 'Blockchain for Social Good',
      description: 'Building decentralized infrastructure for humanitarian aid.',
      category: 'Social',
      raised: 156000,
      contributors: 512,
      goal: 200000,
    },
  ]

  return (
    <main className="relative w-full bg-background" style={{ zIndex: 1 }}>
      {/* Interactive 3D Particle Background */}
      <Suspense fallback={null}>
        <InteractiveParticles />
      </Suspense>

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <StatsSection />

      {/* Features */}
      <div className="relative z-10">
        <FeatureGrid />
      </div>

      {/* Featured Projects */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Support innovative public good projects through quadratic voting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/projects"
            className="inline-block px-8 py-3 text-white font-medium hover:text-gray-300 transition-colors border-b border-secondary/50 hover:border-secondary"
          >
            View All Projects 
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Ready to Make an Impact?
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Submit your project or contribute to funding rounds today. Together, we can create meaningful change through democratic resource allocation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <a
              href="/submit"
              className="inline-block px-8 py-3 text-white font-medium bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-accent rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-lg hover:shadow-primary/40"
            >
              Submit Project
            </a>
            <a
              href="/rounds"
              className="inline-block px-8 py-3 text-white font-medium hover:text-gray-300 transition-colors border-b border-secondary/50 hover:border-secondary"
            >
              View Active Rounds 
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
