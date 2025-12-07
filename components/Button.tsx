'use client'

import React from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white font-semibold transition-all duration-200 ease-out hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]',
    secondary: 'bg-gradient-to-r from-[#14B8A6] to-[#06B6D4] text-white font-semibold transition-all duration-200 ease-out hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]',
    outline: 'border border-white/30 text-white font-semibold transition-all duration-200 ease-out hover:scale-[1.04] hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:bg-white/5',
    ghost: 'text-white font-semibold transition-all duration-200 ease-out hover:scale-[1.04] hover:bg-white/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-5 py-2.5 text-sm rounded-xl',
    lg: 'px-8 py-3 text-base rounded-xl',
  }

  return (
    <button
      className={cn(
        'whitespace-nowrap inline-flex disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
