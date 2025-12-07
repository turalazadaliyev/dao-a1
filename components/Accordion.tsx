'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/30 transition-all duration-300 animate-fade-in group"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between p-5 hover:bg-white/[0.05] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-secondary/5"
          >
            <span className="font-semibold text-left group-hover:text-secondary transition-colors duration-300">
              {item.title}
            </span>
            <ChevronDown
              size={20}
              className={cn(
                'transition-all duration-300 text-secondary flex-shrink-0',
                openId === item.id && 'rotate-180'
              )}
            />
          </button>
          
          {/* Expandable content */}
          {openId === item.id && (
            <div className="px-5 pb-5 text-gray-300 border-t border-white/10 pt-5 animate-slide-down">
              <div className="leading-relaxed space-y-2">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
