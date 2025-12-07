import React from 'react'
import Card from '@/components/Card'
import Tabs from '@/components/Tabs'
import { generateMetadata } from '@/lib/utils/seo'

export const metadata = generateMetadata({
  title: 'Governance - Quadratic Funding DAO',
  description: 'DAO governance and voting system',
})

export default function GovernancePage() {
  const proposals = [
    { id: '1', title: 'Increase matching pool to $1M', status: 'active', votes: 1234 },
    { id: '2', title: 'Add new round categories', status: 'active', votes: 892 },
    { id: '3', title: 'Treasury reallocation Q1', status: 'passed', votes: 2156 },
  ]

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold gradient-text mb-4">DAO Governance</h1>
        <p className="text-gray-400 text-lg mb-12">
          Vote on proposals and shape the future of Quadratic Funding DAO
        </p>

        <Tabs
          tabs={[
            {
              id: 'proposals',
              label: 'Proposals',
              content: (
                <div className="space-y-4">
                  {proposals.map((p) => (
                    <Card key={p.id} hover>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold mb-1">{p.title}</h3>
                          <p className="text-sm text-gray-400">{p.votes} votes</p>
                        </div>
                        <span className={`px-3 py-1 rounded text-xs font-semibold ${
                          p.status === 'active' ? 'bg-secondary/20 text-secondary' : 'bg-accent/20 text-accent'
                        }`}>
                          {p.status}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              ),
            },
            {
              id: 'token',
              label: 'Governance Token',
              content: (
                <Card hover={false}>
                  <p className="text-gray-400 mb-4">
                    The QF token is used for voting on governance proposals and protocol changes.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Total Supply:</strong> 100M QF</p>
                    <p><strong>Voting Power:</strong> 1 token = 1 vote</p>
                    <p><strong>Quorum:</strong> 25% of supply</p>
                  </div>
                </Card>
              ),
            },
          ]}
          defaultTab="proposals"
        />
      </div>
    </main>
  )
}
