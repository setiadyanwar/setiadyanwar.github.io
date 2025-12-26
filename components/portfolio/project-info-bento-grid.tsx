"use client"

import { ExternalLink, Github } from "lucide-react"

interface PortfolioItem {
  title: string
  role?: string
  date?: string
  timeline?: string
  technologies?: string[]
  demoUrl?: string
  repoUrl?: string
  impact?: string[] | any[]
  responsibilities?: string[] | string
  deliverables?: string
  businessObjective?: string
  [key: string]: any
}

interface ProjectInfoBentoGridProps {
  portfolio: PortfolioItem
}

export default function ProjectInfoBentoGrid({ portfolio }: ProjectInfoBentoGridProps) {
  // Format technologies for display
  const techStack = portfolio.technologies
    ? portfolio.technologies.slice(0, 4).join(", ")
    : ""

  const hasLinks = (portfolio.demoUrl && portfolio.demoUrl !== "#") || (portfolio.repoUrl && portfolio.repoUrl !== "#")
  const hasImpact = Array.isArray(portfolio.impact) && portfolio.impact.length > 0
  const hasResponsibilities = !!portfolio.responsibilities

  return (
    <div className="w-full bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 space-y-8">

      {/* Top Row: The "Simple" Metrics (Like Reference) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
        {/* Role */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Role</h3>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {portfolio.role || "Full Stack Developer"}
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Timeline</h3>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {portfolio.timeline || portfolio.date || "N/A"}
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tools</h3>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-snug">
            {techStack || "N/A"}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Links</h3>
          <div className="flex items-center gap-3">
            {portfolio.demoUrl && portfolio.demoUrl !== "#" && (
              <a
                href={portfolio.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {portfolio.repoUrl && portfolio.repoUrl !== "#" && (
              <a
                href={portfolio.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                title="Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {!hasLinks && <span className="text-sm text-gray-400">-</span>}
          </div>
        </div>
      </div>

      {/* Divider */}
      {(hasImpact || hasResponsibilities) && (
        <div className="h-px bg-gray-100 dark:bg-gray-800 w-full" />
      )}

      {/* Bottom Row: Context & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Responsibilities */}
        {hasResponsibilities && (
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Responsibilities</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {Array.isArray(portfolio.responsibilities) ? (
                <ul className="list-disc list-inside space-y-1">
                  {portfolio.responsibilities.slice(0, 4).map((resp: string, idx: number) => (
                    <li key={idx} className="">{resp}</li>
                  ))}
                </ul>
              ) : (
                <p>{portfolio.responsibilities}</p>
              )}
            </div>
          </div>
        )}

        {/* Impact or Deliverables */}
        {(hasImpact || portfolio.deliverables) && (
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {hasImpact ? "Impact & Results" : "Deliverables"}
            </h3>
            {hasImpact ? (
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                {portfolio.impact!.map((item: any, idx: number) => {
                  if (typeof item === 'string') {
                    return <li key={idx}>{item}</li>
                  } else if (item && typeof item === 'object') {
                    // Combine value, unit, and title for display
                    const valueDisplay = item.value ? `${item.value}${item.unit || ''}` : ''
                    const fullText = valueDisplay ? `${valueDisplay} ${item.title}` : item.title
                    return <li key={idx}>{fullText}</li>
                  }
                  return null
                })}
              </ul>
            ) : (
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {portfolio.deliverables}
              </p>
            )}
          </div>
        )}
      </div>

    </div>
  )
}
