'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils/cn'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const active = tabs.find((t) => t.id === activeTab)

  return (
    <div className="w-full">
      <div className="flex gap-1 border-b border-white/10 overflow-x-auto pb-px">
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-6 py-3 font-semibold whitespace-nowrap transition-all duration-300 relative group',
              activeTab === tab.id
                ? 'text-secondary'
                : 'text-gray-400 hover:text-white'
            )}
          >
            <span className="relative z-10">{tab.label}</span>
            
            {/* Bottom border indicator */}
            <div
              className={cn(
                'absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-300',
                activeTab === tab.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
              )}
            />
            
            {/* Hover glow effect */}
            {activeTab === tab.id && (
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg blur -z-10 animate-pulse" />
            )}
          </button>
        ))}
      </div>
      
      {/* Content with fade animation */}
      <div className="mt-6 animate-fade-in">
        {active?.content}
      </div>
    </div>
  )
}
