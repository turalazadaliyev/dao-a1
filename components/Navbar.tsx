'use client'

import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B0F17]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#4F46E5] flex items-center justify-center text-white font-bold text-sm transition-all duration-200 group-hover:scale-110 shadow-lg shadow-indigo-500/40">
            QF
          </div>
          <span className="text-white font-bold text-lg">DAO</span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-x-10">
          <Link href="/" className="text-[15px] font-medium tracking-wide text-white/80 hover:text-[#A855F7] transition-all duration-150">
            Home
          </Link>
          <Link href="/projects" className="text-[15px] font-medium tracking-wide text-white/80 hover:text-[#A855F7] transition-all duration-150">
            Projects
          </Link>
          <Link href="/rounds" className="text-[15px] font-medium tracking-wide text-white/80 hover:text-[#A855F7] transition-all duration-150">
            Rounds
          </Link>
          <Link href="/submit" className="text-[15px] font-medium tracking-wide text-white/80 hover:text-[#A855F7] transition-all duration-150">
            Submit Proposal
          </Link>
        </div>

        {/* Right: Connect Button */}
        <div className="flex-shrink-0">
          <button className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-lg transition-all duration-200 hover:shadow-[0_0_14px_rgba(99,102,241,0.6)]">
            Connect
          </button>
        </div>
      </div>
    </nav>
  )
}
