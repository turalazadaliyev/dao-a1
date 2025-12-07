'use client'

import React, { useState, useEffect } from 'react'

interface StatItemProps {
  label: string
  value: string
  finalValue: number
}

function StatItem({ label, value, finalValue }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let start = 0
    const end = finalValue
    const duration = 1000
    const step = Math.ceil(end / (duration / 16))
    
    const interval = setInterval(() => {
      start += step
      if (start >= end) {
        start = end
        clearInterval(interval)
      }
      setDisplayValue(start)
    }, 16)

    return () => clearInterval(interval)
  }, [finalValue])

  const getFormattedValue = () => {
    if (label === 'Total Funded') {
      const millions = (displayValue / 1000000).toFixed(1)
      return '\$' + millions + 'M'
    } else if (label === 'Contributors') {
      const thousands = (displayValue / 1000).toFixed(1)
      return thousands + 'K'
    } else {
      return displayValue.toString()
    }
  }

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] mb-2">
        {getFormattedValue()}
      </div>
      <p className="text-gray-300 text-sm md:text-base font-medium">{label}</p>
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    { label: 'Total Funded', value: '\.4M', finalValue: 2400000 },
    { label: 'Active Projects', value: '324', finalValue: 324 },
    { label: 'Contributors', value: '12.5K', finalValue: 12500 },
    { label: 'Rounds Completed', value: '8', finalValue: 8 },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="animate-fade-in" style={{ animationDelay: i * 0.1 + 's' }}>
            <StatItem label={stat.label} value={stat.value} finalValue={stat.finalValue} />
          </div>
        ))}
      </div>
    </section>
  )
}
