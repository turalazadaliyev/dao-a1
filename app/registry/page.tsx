import React from 'react'
import Card from '@/components/Card'
import { generateMetadata } from '@/lib/utils/seo'

export const metadata = generateMetadata({
  title: 'Grant Registry - Quadratic Funding DAO',
  description: 'Browse all registered grants and public good projects',
})

export default function RegistryPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold gradient-text mb-4">Grant Registry</h1>
        <p className="text-gray-400 text-lg mb-12">
          Comprehensive registry of all active and historical grants
        </p>

        <Card hover={false}>
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Grant registry coming soon</p>
            <p className="text-sm text-gray-500">View all registered grants and their details</p>
          </div>
        </Card>
      </div>
    </main>
  )
}
