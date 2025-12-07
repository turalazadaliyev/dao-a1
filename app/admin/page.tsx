import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Breadcrumbs from '@/components/Breadcrumbs'
import Tabs from '@/components/Tabs'
import { generateMetadata } from '@/lib/utils/seo'
import { BarChart3, Users, Settings, AlertTriangle } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Admin Dashboard - Quadratic Funding DAO',
  description: 'DAO administration and governance tools',
})

export default function AdminPage() {
  const stats = [
    { label: 'Active Rounds', value: '2', icon: BarChart3 },
    { label: 'Total Projects', value: '324', icon: Users },
    { label: 'Governance Proposals', value: '5', icon: Settings },
    { label: 'Pending Reviews', value: '12', icon: AlertTriangle },
  ]

  const recentActivity = [
    {
      id: '1',
      action: 'New Project Submitted',
      project: 'Ocean Cleanup Initiative',
      timestamp: '2 hours ago',
      status: 'pending',
    },
    {
      id: '2',
      action: 'Round Completed',
      project: 'Climate Action Round 2025',
      timestamp: '1 day ago',
      status: 'completed',
    },
    {
      id: '3',
      action: 'Governance Vote Started',
      project: 'Treasury Allocation Q1 2025',
      timestamp: '3 days ago',
      status: 'active',
    },
    {
      id: '4',
      action: 'Project Flagged',
      project: 'Health Initiative Beta',
      timestamp: '5 days ago',
      status: 'warning',
    },
  ]

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Admin' }]} />

        {/* Header */}
        <div className="mt-8 mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-2">Admin Dashboard</h1>
          <p className="text-gray-400 text-lg">
            Manage rounds, review projects, and govern the DAO
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <Card key={i} hover={false}>
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Tabs */}
        <Tabs
          tabs={[
            {
              id: 'overview',
              label: 'Overview',
              content: (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Key Metrics */}
                  <Card hover={false} className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="text-gray-400">Total Funds Distributed</span>
                        <span className="font-bold text-lg">$2,340,000</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="text-gray-400">Average Grant Size</span>
                        <span className="font-bold text-lg">$7,222</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-white/10">
                        <span className="text-gray-400">Total Contributors</span>
                        <span className="font-bold text-lg">45,321</span>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <span className="text-gray-400">Governance Token Holders</span>
                        <span className="font-bold text-lg">12,456</span>
                      </div>
                    </div>
                  </Card>

                  {/* Quick Actions */}
                  <Card hover={false}>
                    <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        Create Round
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Review Projects
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        View Governance
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Manage Settings
                      </Button>
                    </div>
                  </Card>
                </div>
              ),
            },
            {
              id: 'projects',
              label: 'Projects',
              content: (
                <Card hover={false}>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="border-b border-white/10">
                        <tr>
                          <th className="text-left py-3 px-4 font-semibold">Project</th>
                          <th className="text-left py-3 px-4 font-semibold">Status</th>
                          <th className="text-left py-3 px-4 font-semibold">Raised</th>
                          <th className="text-left py-3 px-4 font-semibold">Goal</th>
                          <th className="text-right py-3 px-4 font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Climate Solutions', status: 'active', raised: 125000, goal: 250000 },
                          { name: 'Education Initiative', status: 'active', raised: 89500, goal: 150000 },
                          { name: 'Social Network', status: 'pending', raised: 0, goal: 200000 },
                          { name: 'Healthcare Program', status: 'active', raised: 156000, goal: 200000 },
                        ].map((project, i) => (
                          <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                            <td className="py-3 px-4">{project.name}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                project.status === 'active'
                                  ? 'bg-accent/20 text-accent'
                                  : 'bg-secondary/20 text-secondary'
                              }`}>
                                {project.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">${(project.raised / 1000).toFixed(0)}k</td>
                            <td className="py-3 px-4">${(project.goal / 1000).toFixed(0)}k</td>
                            <td className="py-3 px-4 text-right">
                              <button className="text-secondary hover:text-accent transition-colors text-xs font-semibold">
                                Review
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              ),
            },
            {
              id: 'activity',
              label: 'Activity Feed',
              content: (
                <div className="space-y-3">
                  {recentActivity.map((item) => {
                    const statusColors: Record<string, string> = {
                      pending: 'bg-secondary/20 text-secondary',
                      completed: 'bg-accent/20 text-accent',
                      active: 'bg-primary/20 text-primary',
                      warning: 'bg-red-500/20 text-red-400',
                    }

                    return (
                      <Card key={item.id} hover>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold mb-1">{item.action}</h4>
                            <p className="text-gray-400 text-sm mb-2">{item.project}</p>
                            <p className="text-xs text-gray-500">{item.timestamp}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[item.status]}`}>
                            {item.status}
                          </span>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              ),
            },
          ]}
          defaultTab="overview"
        />
      </div>
    </main>
  )
}
