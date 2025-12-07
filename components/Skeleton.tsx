'use client'

import React from 'react'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
}

export default function Skeleton({ count = 1, className = '', ...props }: SkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`animate-shimmer bg-gradient-to-r from-white/5 to-white/10 rounded-lg ${className}`}
          {...props}
        />
      ))}
    </>
  )
}
