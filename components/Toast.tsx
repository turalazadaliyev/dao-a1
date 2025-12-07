'use client'

import React, { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, X, Zap } from 'lucide-react'

interface ToastProps {
  id: string
  type: 'success' | 'error' | 'pending'
  message: string
  onClose: (id: string) => void
}

export function Toast({ id, type, message, onClose }: ToastProps) {
  useEffect(() => {
    if (type !== 'pending') {
      const timer = setTimeout(() => onClose(id), 4000)
      return () => clearTimeout(timer)
    }
  }, [type, id, onClose])

  const colors = {
    success: 'border-accent/50 bg-accent/10 hover:border-accent/80',
    error: 'border-red-500/50 bg-red-500/10 hover:border-red-500/80',
    pending: 'border-secondary/50 bg-secondary/10 hover:border-secondary/80',
  }

  const icons = {
    success: <CheckCircle className="text-accent flex-shrink-0" size={20} />,
    error: <AlertCircle className="text-red-500 flex-shrink-0" size={20} />,
    pending: <div className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin flex-shrink-0" />,
  }

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center gap-3 glass rounded-xl p-4 max-w-sm border ${colors[type]} animate-slide-down z-50 shadow-lg shadow-primary/20 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30`}
    >
      {icons[type]}
      <span className="text-sm flex-1 text-gray-100">{message}</span>
      <button
        onClick={() => onClose(id)}
        className="text-gray-400 hover:text-white hover:bg-white/10 rounded-lg p-1 transition-all duration-300 hover:scale-110 flex-shrink-0"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export function ToastContainer({
  toasts,
  onClose,
}: {
  toasts: ToastProps[]
  onClose: (id: string) => void
}) {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  )
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const addToast = (message: string, type: 'success' | 'error' | 'pending' = 'pending') => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, type, message, onClose: () => {} }])
    return id
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  const updateToast = (id: string, type: 'success' | 'error', message?: string) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, type, message: message || t.message } : t))
    )
  }

  return {
    toasts: toasts.map((t) => ({ ...t, onClose: removeToast })),
    addToast,
    removeToast,
    updateToast,
  }
}
