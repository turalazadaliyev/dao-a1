import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Tabs from '@/components/Tabs'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateMetadata } from '@/lib/utils/seo'
import { Calendar, Users, TrendingUp } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Funding Rounds - Quadratic Funding DAO',
  description: 'Browse active, upcoming, and past funding rounds',
})

const rounds = [
  {
    id: '1',
    title: 'Climate Action Round 2025',
    description: 'Supporting climate mitigation and adaptation projects',
    status: 'active',
    startDate: '2025-01-01',
    endDate: '2025-02-28',
    matchingPool: 500000,
    contributors: 2341,
    projects: 54,
  },
  {
    id: '2',
    title: 'Education & Research Initiative',
    description: 'Funding open education and scientific research projects',
    status: 'active',
    startDate: '2025-01-15',
    endDate: '2025-03-15',
    matchingPool: 750000,
    contributors: 3012,
    projects: 67,
  },
  {
    id: '3',
    title: 'Web3 Infrastructure Round',
    description: 'Building decentralized infrastructure for social good',
    status: 'upcoming',
    startDate: '2025-03-01',
    endDate: '2025-04-30',
    matchingPool: 1000000,
    contributors: 0,
    projects: 0,
  },
  {
    id: '4',
    title: 'Global Health Initiative',
    description: 'Advancing healthcare access in underserved regions',
    status: 'upcoming',
    startDate: '2025-04-01',
    endDate: '2025-05-31',
    matchingPool: 600000,
    contributors: 0,
    projects: 0,
  },
  {
    id: '5',
    title: 'Q4 2024 Community Round',
    description: 'Supporting grassroots community projects',
    status: 'past',
    startDate: '2024-10-01',
    endDate: '2024-11-30',
    matchingPool: 400000,
    contributors: 1856,
    projects: 42,
  },
]

const RoundCard = ({ round }: { round: (typeof rounds)[0] }) => {
  const statusColors: Record<string, string> = {
    active: 'bg-accent/20 text-accent border-accent/50',
    upcoming: 'bg-secondary/20 text-secondary border-secondary/50',
    past: 'bg-gray-600/20 text-gray-400 border-gray-600/50',
  }

  return (
    <Card hover>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{round.title}</h3>
          <p className="text-gray-400 text-sm">{round.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[round.status]}`}>
          {round.status.charAt(0).toUpperCase() + round.status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-b border-white/10">
        <div>
          <p className="text-gray-400 text-xs mb-1">Matching Pool</p>
          <p className="font-bold">${(round.matchingPool / 1000000).toFixed(1)}M</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs mb-1">Contributors</p>
          <p className="font-bold">{round.contributors.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs mb-1">Projects</p>
          <p className="font-bold">{round.projects}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          {new Date(round.startDate).toLocaleDateString()} - {new Date(round.endDate).toLocaleDateString()}
        </div>
      </div>

      <Button
        variant={round.status === 'active' ? 'primary' : 'outline'}
        size="sm"
        className="w-full"
      >
        {round.status === 'active' ? 'Participate' : 'Learn More'}
      </Button>
    </Card>
  )
}

export default function RoundsPage() {
  const activeRounds = rounds.filter((r) => r.status === 'active')
  const upcomingRounds = rounds.filter((r) => r.status === 'upcoming')
  const pastRounds = rounds.filter((r) => r.status === 'past')

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Rounds' }]} />

        {/* Header */}
        <div className="mt-8 mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">Funding Rounds</h1>
          <p className="text-gray-400 text-lg">
            Participate in quadratic funding rounds and support public good projects
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          tabs={[
            {
              id: 'active',
              label: `Active (${activeRounds.length})`,
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeRounds.map((round) => (
                    <RoundCard key={round.id} round={round} />
                  ))}
                </div>
              ),
            },
            {
              id: 'upcoming',
              label: `Upcoming (${upcomingRounds.length})`,
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingRounds.map((round) => (
                    <RoundCard key={round.id} round={round} />
                  ))}
                </div>
              ),
            },
            {
              id: 'past',
              label: `Past (${pastRounds.length})`,
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastRounds.map((round) => (
                    <RoundCard key={round.id} round={round} />
                  ))}
                </div>
              ),
            },
          ]}
          defaultTab="active"
        />
      </div>
    </main>
  )
}
