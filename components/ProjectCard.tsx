'use client'

import React from 'react'
import Card from './Card'
import Button from './Button'
import { TrendingUp, Users, Target } from 'lucide-react'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  category: string
  image?: string
  raised: number
  contributors: number
  goal: number
}

export default function ProjectCard({
  id,
  title,
  description,
  category,
  image,
  raised,
  contributors,
  goal,
}: ProjectCardProps) {
  const progress = (raised / goal) * 100

  return (
    <Card hover className="flex flex-col h-full group">
      {/* Image placeholder */}
      <div className="relative mb-6 rounded-2xl overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-primary/30 to-secondary/20 group-hover:from-primary/40 group-hover:to-secondary/30 transition-all duration-500" />
        )}
      </div>

      {/* Category badge */}
      <div className="inline-flex w-fit mb-4">
        <span className="text-xs px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-secondary font-semibold hover:from-primary/30 hover:to-secondary/30 transition-all duration-300">
          {category}
        </span>
      </div>

      {/* Title and description */}
      <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-secondary transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">{description}</p>

      {/* Stats */}
      <div className="space-y-4 mb-6 pt-4 border-t border-white/10">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">${raised.toLocaleString()}</span>
            <span className="text-xs text-gray-400">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Goal: ${goal.toLocaleString()}</p>
        </div>

        {/* Contributors */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Users size={16} />
          {contributors} contributors
        </div>
      </div>

      {/* CTA */}
      <Button variant="outline" size="sm" className="w-full">
        View Project
      </Button>
    </Card>
  )
}
