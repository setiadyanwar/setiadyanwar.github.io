"use client"

import { useEffect, useRef, useState } from "react"

interface PortfolioItem {
  title: string
  role?: string
  demoUrl?: string
  repoUrl?: string
  [key: string]: any
}

interface ProjectInfoBentoGridProps {
  portfolio: PortfolioItem
}

export default function ProjectInfoBentoGrid({ portfolio }: ProjectInfoBentoGridProps) {
  const bentoRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Bento grid hover effect - optimized
  useEffect(() => {
    const container = bentoRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    container.addEventListener("mousemove", handleMouseMove, { passive: true })
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={bentoRef}
      className="relative bg-gray-50 dark:bg-gray-900/50 p-6 md:p-8 rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50"
    >
      {/* Cursor-following gradient */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle 400px at center, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: isHovering ? 1 : 0,
          willChange: "transform, opacity",
        }}
      />

      {/* Bento Grid Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
        {/* Role - Small card */}
        <div className="md:col-span-2 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-5 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 tracking-wide uppercase">
            Role
          </p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100">
            {portfolio.role || "Full Stack Developer"}
          </p>
        </div>

        {/* Timeline - Small card */}
        <div className="md:col-span-2 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-5 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 tracking-wide uppercase">
            Timeline
          </p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100">
            {portfolio.timeline || "2-3 months"}
          </p>
        </div>

        {/* Client - Small card */}
        <div className="md:col-span-2 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-5 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 tracking-wide uppercase">
            Client
          </p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100">
            {portfolio.client || portfolio.title.split(" - ")[0] || "Personal Project"}
          </p>
        </div>

        {/* Deliverables - Medium card */}
        <div className="md:col-span-3 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
            Deliverables
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {portfolio.deliverables ||
              "Complete web application with responsive design, optimized performance, and comprehensive documentation."}
          </p>
        </div>

        {/* Business Objective - Medium card */}
        <div className="md:col-span-3 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
            Business Objective
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {portfolio.businessObjective ||
              "Deliver a scalable and user-friendly solution that meets client requirements and provides excellent user experience."}
          </p>
        </div>

        {/* Responsibilities - Large card */}
        <div className="md:col-span-4 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide uppercase">
            Responsibilities
          </h3>
          <div className="space-y-2">
            {portfolio.responsibilities ? (
              Array.isArray(portfolio.responsibilities) ? (
                portfolio.responsibilities.map((resp: string, idx: number) => (
                  <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                    • {resp}
                  </p>
                ))
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">{portfolio.responsibilities}</p>
              )
            ) : (
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • {portfolio.role || "Full stack development from concept to deployment"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • UI/UX design and implementation
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Backend API development and database design
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  • Testing, optimization, and deployment
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons - Small card - Only show if there are buttons */}
        {(portfolio.demoUrl || portfolio.repoUrl) && (
          <div className="md:col-span-2 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300 flex flex-col gap-3 justify-center">
            {portfolio.demoUrl && (
              <a
                href={portfolio.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-medium rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-200"
              >
                View Live Demo
              </a>
            )}
            {portfolio.repoUrl && (
              <a
                href={portfolio.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 text-sm font-medium rounded-full hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View Repository
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

