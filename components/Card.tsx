'use client'

import React from 'react'
import { cn } from '@/lib/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export default function Card({ children, hover = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-3xl p-6 lg:p-8 backdrop-blur-xl border border-white/10',
        hover && 'hover:bg-white/[0.08] hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 cursor-pointer hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
