'use client'

import React from 'react'
import Card from './Card'
import { BarChart3, Network, Zap, Target, Users, Lock } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Grant Registry',
    description: 'Transparent registry of all grants and projects participating in funding rounds.',
  },
  {
    icon: Network,
    title: 'Round Manager',
    description: 'Create and manage funding rounds with custom parameters and matching pools.',
  },
  {
    icon: Zap,
    title: 'Donation Vault',
    description: 'Secure vault system for community donations and matching pool contributions.',
  },
  {
    icon: Target,
    title: 'Quadratic Allocation',
    description: 'Democratic funding allocation using proven quadratic funding algorithms.',
  },
  {
    icon: Users,
    title: 'Governance Token',
    description: 'ERC-20 governance token for DAO voting and protocol decisions.',
  },
  {
    icon: Lock,
    title: 'Matching Pool',
    description: 'Automated matching pool distribution to amplify community contributions.',
  },
]

export default function FeatureGrid() {
  return (
    <section className="relative py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-10 z-10">
      <div className="text-center mb-20 space-y-4 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          DAO Modules
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Complete suite of tools for managing decentralized public good funding
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <div
              key={i}
              className="group animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Card hover className="group-hover:scale-105 transition-all duration-500 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary-light/10 group-hover:from-secondary/30 group-hover:to-secondary-light/20 transition-all duration-300">
                    <Icon className="text-secondary" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-white text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}
