'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Twitter, Mail, ExternalLink, Zap, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Platform',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Rounds', href: '/rounds' },
        { label: 'Projects', href: '/projects' },
        { label: 'Submit Proposal', href: '/submit' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Blog', href: '#blog' },
        { label: 'Governance', href: '/governance' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Security', href: '#security' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ]

  const socials = [
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Mail, href: '#discord', label: 'Mail' },
    { icon: ExternalLink, href: '#docs', label: 'Docs' },
  ]

  return (
    <footer className="relative border-t border-white/6 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Main grid (compact) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Brand section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-sm">
                QF
              </div>
              <span className="text-base font-semibold text-white">QF DAO</span>
            </div>
            <p className="text-gray-400 text-sm">Decentralized public good funding.</p>
          </div>

          {/* Links sections */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {sections.slice(0, 2).map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.slice(0, 3).map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-4 pt-8 border-t border-white/6">
          <div>© {currentYear} Quadratic Funding DAO</div>
          <div className="flex items-center gap-4">
            {socials.slice(0, 3).map((s) => {
              const Icon = s.icon
              return (
                <a key={s.label} href={s.href} aria-label={s.label} className="text-gray-400 hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
