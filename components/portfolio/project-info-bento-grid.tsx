"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

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

  const hasImpact = Array.isArray((portfolio as any).impact) && (portfolio as any).impact.length > 0
  const hasLinks =
    !!(portfolio.demoUrl && portfolio.demoUrl !== "#") || !!(portfolio.repoUrl && portfolio.repoUrl !== "#")

  const businessObjectiveColSpan = !hasImpact && !hasLinks ? "md:col-span-4" : hasImpact && hasLinks ? "md:col-span-2" : "md:col-span-3"

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
      data-cursor-view="true"
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
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {/* Row 1 */}
        {/* Role - Small card */}
        <div className="md:col-span-1 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-5 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 tracking-wide uppercase">
            Role
          </p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100">
            {portfolio.role || "Full Stack Developer"}
          </p>
        </div>

        {/* Timeline - Small card */}
        <div className="md:col-span-1 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-5 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 tracking-wide uppercase">
            Timeline
          </p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100">
            {portfolio.timeline || "2-3 months"}
          </p>
        </div>

        {/* Deliverables - Medium card */}
        <div className="md:col-span-2 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
          <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
            Deliverables
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {portfolio.deliverables ||
              "Complete web application with responsive design, optimized performance, and comprehensive documentation."}
          </p>
        </div>

        {/* Row 2 */}
        {/* Business Objective - Dynamic width card */}
        <div
          className={`group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300 ${businessObjectiveColSpan}`}
        >
          <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
            Business Objective
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {portfolio.businessObjective ||
              "Deliver a scalable and user-friendly solution that meets client requirements and provides excellent user experience."}
          </p>
        </div>

        {/* Impact - Medium card */}
        {hasImpact && (
          <div className="md:col-span-1 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
            <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
              Impact
            </h3>
            <ul className="space-y-2">
              {portfolio.impact.slice(0, 2).map((item: string, idx: number) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links - Action Buttons */}
        {hasLinks && (
          <div className="md:col-span-1 group relative bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300/50 dark:hover:border-indigo-700/50 transition-all duration-300">
            <h3 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide uppercase">
              Links
            </h3>
            <div className="flex flex-row gap-3 items-center justify-center">
              {portfolio.demoUrl && portfolio.demoUrl !== "#" && (
                <a
                  href={portfolio.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-indigo-600 dark:bg-indigo-400 rounded-full group-hover/btn:w-[200px] group-hover/btn:h-[200px] transition-all duration-500 ease-out"></span>
                  <span className="relative flex flex-col items-center gap-1 z-10 transition-colors duration-300 group-hover/btn:text-white dark:group-hover/btn:text-white">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs font-medium">Demo</span>
                  </span>
                </a>
              )}
              {portfolio.repoUrl && portfolio.repoUrl !== "#" && (
                <a
                  href={portfolio.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center justify-center w-14 h-14 bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-indigo-600 dark:bg-indigo-400 rounded-full group-hover/btn:w-[200px] group-hover/btn:h-[200px] transition-all duration-500 ease-out"></span>
                  <span className="relative flex flex-col items-center gap-1 z-10 transition-colors duration-300 group-hover/btn:text-white dark:group-hover/btn:text-white">
                    <Github className="w-4 h-4" />
                    <span className="text-xs font-medium">Repo</span>
                  </span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Responsibilities - Full width card */}
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
      </div>
    </div>
  )
}

