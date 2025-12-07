'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      {/* Backdrop with enhanced blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-all duration-300"
        onClick={onClose}
      />

      {/* Modal with premium styling */}
      <div className="glass relative z-50 w-full max-w-lg mx-4 rounded-3xl p-8 max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl shadow-primary/20 animate-slide-up">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all duration-300 hover:scale-110"
          >
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  )
}
