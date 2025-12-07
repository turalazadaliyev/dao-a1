'use client'

import React from 'react'
import { cn } from '@/lib/utils/cn'

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

interface BentoGridItemProps {
  children: React.ReactNode
  className?: string
  colSpan?: 1 | 2
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4', className)}>
      {children}
    </div>
  )
}

export function BentoGridItem({ children, className, colSpan = 1 }: BentoGridItemProps) {
  return (
    <div className={cn(
      'glass rounded-2xl p-6',
      colSpan === 2 && 'md:col-span-2',
      className
    )}>
      {children}
    </div>
  )
}
