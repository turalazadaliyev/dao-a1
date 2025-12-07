import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProjectCard from '@/components/ProjectCard'
import { generateMetadata } from '@/lib/utils/seo'
import { Search } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Projects - Quadratic Funding DAO',
  description: 'Browse and support public good projects',
})

const allProjects = [
  {
    id: '1',
    title: 'Open Climate Solutions',
    description: 'Developing open-source tools for climate impact measurement',
    category: 'Climate',
    raised: 125000,
    contributors: 345,
    goal: 250000,
  },
  {
    id: '2',
    title: 'Education for Everyone',
    description: 'Free education resources and mentorship programs',
    category: 'Education',
    raised: 89500,
    contributors: 267,
    goal: 150000,
  },
  {
    id: '3',
    title: 'Blockchain for Social Good',
    description: 'Decentralized infrastructure for humanitarian aid',
    category: 'Social',
    raised: 156000,
    contributors: 512,
    goal: 200000,
  },
  {
    id: '4',
    title: 'Medical Research Initiative',
    description: 'Open-access medical research and drug discovery',
    category: 'Health',
    raised: 234000,
    contributors: 678,
    goal: 300000,
  },
  {
    id: '5',
    title: 'Clean Water Project',
    description: 'Providing clean water access to rural communities',
    category: 'Climate',
    raised: 78500,
    contributors: 456,
    goal: 120000,
  },
  {
    id: '6',
    title: 'Tech Skills Training',
    description: 'Programming bootcamp for underrepresented groups',
    category: 'Education',
    raised: 95000,
    contributors: 289,
    goal: 180000,
  },
  {
    id: '7',
    title: 'Mental Health Support Network',
    description: 'Community-driven mental health support platform',
    category: 'Health',
    raised: 67800,
    contributors: 234,
    goal: 100000,
  },
  {
    id: '8',
    title: 'Wildlife Conservation',
    description: 'Protecting endangered species and ecosystems',
    category: 'Climate',
    raised: 145600,
    contributors: 567,
    goal: 200000,
  },
  {
    id: '9',
    title: 'Affordable Housing Initiative',
    description: 'Building affordable housing for low-income families',
    category: 'Social',
    raised: 189000,
    contributors: 434,
    goal: 250000,
  },
]

const categories = [
  'All',
  'Climate',
  'Education',
  'Health',
  'Social',
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} />

        {/* Header */}
        <div className="mt-8 mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">Projects</h1>
          <p className="text-gray-400 text-lg">
            Discover and support innovative public good projects
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="glass rounded-lg p-2 flex items-center gap-3">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-lg font-semibold transition-all glass hover:bg-white/10 hover:border-white/20"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      </div>
    </main>
  )
}
