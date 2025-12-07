'use client'

import React from 'react'
import { Wallet } from 'lucide-react'

export default function WalletConnectButton() {
  const [connected, setConnected] = React.useState(false)
  const [address, setAddress] = React.useState('')

  const handleConnect = () => {
    // Dummy implementation
    const dummyAddress = '0x' + Math.random().toString(16).substr(2, 40)
    setAddress(dummyAddress)
    setConnected(true)
  }

  const handleDisconnect = () => {
    setConnected(false)
    setAddress('')
  }

  if (connected) {
    return (
      <button
        onClick={handleDisconnect}
        className="px-5 py-2 rounded-xl text-sm font-semibold text-white hover:text-white transition transform duration-200 hover:scale-105 hover:bg-white/10 flex items-center gap-2 border border-white/20 shadow-sm"
        style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
          border: '1px solid rgba(99, 102, 241, 0.2)'
        }}
      >
        <Wallet size={16} />
        {address.slice(0, 6)}...{address.slice(-4)}
      </button>
    )
  }

  return (
    <button
      onClick={handleConnect}
      className="px-5 py-2 rounded-xl text-sm font-semibold text-white flex items-center gap-2 transition transform duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]"
      style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
        border: '1px solid rgba(99, 102, 241, 0.25)'
      }}
    >
      <Wallet size={18} />
      Connect
    </button>
  )
}
