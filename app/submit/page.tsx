import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateMetadata } from '@/lib/utils/seo'
import { AlertCircle } from 'lucide-react'

export const metadata = generateMetadata({
  title: 'Submit Proposal - Quadratic Funding DAO',
  description: 'Submit your project proposal for funding consideration',
})

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Submit Proposal' }]} />

        {/* Header */}
        <div className="mt-8 mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-4">Submit Your Proposal</h1>
          <p className="text-gray-400 text-lg">
            Share your public good project and seek funding from the community
          </p>
        </div>

        {/* Info Box */}
        <Card hover={false} className="mb-8 flex gap-4 items-start border-accent/30 bg-accent/5">
          <AlertCircle className="text-accent flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-semibold mb-2">Eligibility Requirements</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Project must benefit public good or community</li>
              <li>• Open-source or transparent operations required</li>
              <li>• No for-profit ventures</li>
              <li>• Clear impact metrics and reporting</li>
            </ul>
          </div>
        </Card>

        {/* Form */}
        <form className="space-y-6">
          {/* Project Basics */}
          <Card hover={false}>
            <h2 className="text-2xl font-bold mb-6">Project Basics</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Project Name *</label>
                <input
                  type="text"
                  placeholder="Enter your project name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Category *</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select a category</option>
                  <option value="climate">Climate & Environment</option>
                  <option value="education">Education & Learning</option>
                  <option value="health">Health & Wellness</option>
                  <option value="social">Social Good</option>
                  <option value="research">Research & Science</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Short Description *</label>
                <textarea
                  placeholder="Briefly describe your project (max 200 characters)"
                  maxLength={200}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Detailed Description *</label>
                <textarea
                  placeholder="Provide detailed information about your project, objectives, and expected impact"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  rows={6}
                  required
                />
              </div>
            </div>
          </Card>

          {/* Funding Details */}
          <Card hover={false}>
            <h2 className="text-2xl font-bold mb-6">Funding Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Funding Goal (USD) *</label>
                <input
                  type="number"
                  placeholder="Enter your funding goal"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">How will funds be used? *</label>
                <textarea
                  placeholder="Explain how you will allocate the funding"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Key Metrics & Outcomes *</label>
                <textarea
                  placeholder="Describe how you'll measure success and impact"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  rows={4}
                  required
                />
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card hover={false}>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Website/GitHub *</label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>
          </Card>

          {/* Agreement */}
          <Card hover={false}>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 rounded mt-0.5 accent-primary"
                required
              />
              <span className="text-sm text-gray-400">
                I confirm this project meets the eligibility requirements and commit to transparent reporting
              </span>
            </label>
          </Card>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button variant="primary" size="lg" className="flex-1">
              Submit Proposal
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Save as Draft
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
