"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { ArrowLeft, ArrowRight, TrendingDown, TrendingUp, ThumbsUp, ThumbsDown, Frown, Smile, Meh, AlertTriangle, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getPortfolioItemById, getPortfolioItems } from "@/lib/supabase/data"
import { motion } from "framer-motion"
import PortfolioBreadcrumb from "@/components/portfolio/portfolio-breadcrumb"
import PortfolioNavigation from "@/components/portfolio/portfolio-navigation"
import MobileNavigationToggle from "@/components/portfolio/mobile-navigation-toggle"
import MobileNavigationSidebar from "@/components/portfolio/mobile-navigation-sidebar"
import ProjectInfoBentoGrid from "@/components/portfolio/project-info-bento-grid"
import AdditionalImagesGallery from "@/components/portfolio/additional-images-gallery"
import PortfolioDetailSkeleton from "@/components/portfolio/portfolio-detail-skeleton"
import { preloadCache } from "@/components/portfolio-card"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "process", label: "Process" },
  { id: "outcomes", label: "Outcomes" },
]

const defaultProblemCards = [
  {
    title: "Terlalu banyak aplikasi",
    description: "Karyawan harus menghafal begitu banyak domain sistem aplikasi.",
  },
  {
    title: "Akses informasi terbatas",
    description: "Karyawan tidak tahu bagaimana data pribadi mereka dikumpulkan/digunakan.",
  },
  {
    title: "Proses administrasi lama",
    description: "Approval dan update HR membutuhkan langkah manual yang berulang.",
  },
  {
    title: "Integrasi data lemah",
    description: "Data dari backend berbeda sering kali tidak sinkron sehingga tim HR kesulitan membuat laporan.",
  },
]

const defaultSolutionCards = [
  {
    title: "Dashboard terpadu",
    description: "Menggabungkan modul HR kritikal ke satu tampilan responsif.",
  },
  {
    title: "Automasi formulir",
    description: "Menyederhanakan flow cuti & reimbursement dengan validasi real-time.",
  },
  {
    title: "Optimasi performa Nuxt",
    description: "Caching komponen berat dan lazy loading untuk akses cepat.",
  },
  {
    title: "Integrasi API seragam",
    description: "Menyatukan layanan backend melalui layer service agar data konsisten.",
  },
]

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  // All hooks must be called in the same order every render
  // DO NOT add conditional hooks or hooks after conditional returns
  
  // State hooks
  const [activeSection, setActiveSection] = useState<string>("overview")
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [portfolio, setPortfolio] = useState<any>(null)
  const [allPortfolioItems, setAllPortfolioItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  
  // Ref hooks
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const activeSectionRef = useRef<string>("overview")

  // Set mounted state after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        // Check cache first (from preloading)
        let item = preloadCache.get(params.id)
        let items: any[] = []
        
        if (item) {
          // Use cached data immediately
          const transformed = {
            ...item,
            additionalImages: item.additional_images || [],
            demoUrl: item.demo_url,
            repoUrl: item.repo_url,
            problemImage: item.problem_image || null,
            solutionImage: item.solution_image || null,
            problemDescription: item.problem_description,
            problemCards: item.problem_cards || [],
            solutionDescription: item.solution_description,
            solutionCards: item.solution_cards || [],
            impact: item.impact || [],
            outcomes: item.outcomes || [],
            nextSteps: item.next_steps,
            projectSteps: item.project_steps || [],
          }
          setPortfolio(transformed)
          setLoading(false)
        }
        
        // Fetch all items and current item (if not cached)
        const [fetchedItem, fetchedItems] = await Promise.all([
          item ? Promise.resolve(item) : getPortfolioItemById(params.id),
          getPortfolioItems(),
        ])
        
        items = fetchedItems
        
        // If we didn't have cached data, process fetched data
        if (!item && fetchedItem) {
          // Cache the fetched data
          preloadCache.set(params.id, fetchedItem)
          
          // Transform Supabase data to match component expectations
          const transformed = {
            ...fetchedItem,
            additionalImages: fetchedItem.additional_images || [],
            demoUrl: fetchedItem.demo_url,
            repoUrl: fetchedItem.repo_url,
            problemImage: fetchedItem.problem_image || null,
            solutionImage: fetchedItem.solution_image || null,
            problemDescription: fetchedItem.problem_description,
            problemCards: fetchedItem.problem_cards || [],
            solutionDescription: fetchedItem.solution_description,
            solutionCards: fetchedItem.solution_cards || [],
            impact: fetchedItem.impact || [],
            outcomes: fetchedItem.outcomes || [],
            nextSteps: fetchedItem.next_steps,
            projectSteps: fetchedItem.project_steps || [],
          }
          
          setPortfolio(transformed)
        }
        
        setAllPortfolioItems(items)
      } catch (error) {
        // Silently handle errors - fallback to local data if available
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [params.id])

  // Calculate navigation items - must be before conditional returns
  const navigationData = useMemo(() => {
    if (!portfolio) {
      return { currentIndex: -1, prevPortfolio: null, nextPortfolio: null }
    }
    const idx = allPortfolioItems.findIndex((item: any) => item.id === portfolio.id)
    return {
      currentIndex: idx,
      prevPortfolio: idx > 0 ? allPortfolioItems[idx - 1] : null,
      nextPortfolio: idx < allPortfolioItems.length - 1 && idx >= 0 ? allPortfolioItems[idx + 1] : null,
    }
  }, [portfolio, allPortfolioItems])
  const { currentIndex, prevPortfolio, nextPortfolio } = navigationData

  // Memoize problem/solution cards - always return same structure
  const problemSolutionData = useMemo(() => {
    const probCards = portfolio && (portfolio as any).problemCards && (portfolio as any).problemCards.length > 0
      ? (portfolio as any).problemCards
      : defaultProblemCards
    const solCards = portfolio && (portfolio as any).solutionCards && (portfolio as any).solutionCards.length > 0
      ? (portfolio as any).solutionCards
      : defaultSolutionCards

    return {
      problemCards: probCards,
      solutionCards: solCards,
      displayProblemCards: probCards.length >= 4 ? probCards : [...probCards, ...probCards].slice(0, 4),
      displaySolutionCards: solCards.length >= 4 ? solCards : [...solCards, ...solCards].slice(0, 4),
    }
  }, [portfolio])
  const { problemCards, solutionCards, displayProblemCards, displaySolutionCards } = problemSolutionData

  // Scroll handler useEffect - must be before conditional returns
  // Always call this hook, but only set up scroll listener if portfolio exists
  useEffect(() => {
    // Initialize active section ref (always do this)
    activeSectionRef.current = activeSection

    // Only set up scroll handler if portfolio exists
    if (!portfolio) {
      return // No cleanup needed if portfolio doesn't exist
    }

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 250 // Offset for header and spacing
          const allSections = Object.keys(sectionRefs.current)
          let currentSection = activeSectionRef.current

          // Find which section is currently in view
          for (const sectionId of allSections) {
            const element = sectionRefs.current[sectionId]
            if (element) {
              const rect = element.getBoundingClientRect()
              const elementTop = rect.top + window.scrollY
              const elementBottom = elementTop + rect.height

              // Check if scroll position is within this section
              if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom - 100) {
                currentSection = sectionId
                break
              }
            }
          }

          // Update active section if changed
          if (currentSection !== activeSectionRef.current) {
            activeSectionRef.current = currentSection
            setActiveSection(currentSection)
          }

          ticking = false
        })
        ticking = true
      }
    }

    // Wait a bit for refs to be set, then check
    const timeoutId = setTimeout(() => {
      handleScroll()
    }, 100)

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [portfolio, activeSection])

  // Conditional returns AFTER all hooks
  if (loading) {
    return <PortfolioDetailSkeleton />
  }

  if (!portfolio) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Portfolio item not found</h1>
      </div>
    )
  }


  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      // Update active section immediately
      activeSectionRef.current = sectionId
      setActiveSection(sectionId)

      // Close mobile menu if open
      setIsMobileMenuOpen(false)

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }


  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <PortfolioBreadcrumb title={portfolio.title} />

      <div className="container mx-auto px-6 pb-32">
        <MobileNavigationToggle
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <MobileNavigationSidebar
          sections={sections}
          activeSection={activeSection}
          isOpen={isMobileMenuOpen}
          onSectionClick={scrollToSection}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        <div className="flex gap-12 lg:gap-20">
          <PortfolioNavigation
            sections={sections}
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {/* Overview Section */}
            <section
              id="overview"
              ref={(el) => {
                if (el) sectionRefs.current.overview = el
              }}
              className="pt-4 pb-24 scroll-mt-32"
            >
              <div className="space-y-16">
                {/* Hero Header */}
                <div className="space-y-4">
                  {/* Date */}
                  {(portfolio as any).date && (
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {(portfolio as any).date}
                    </p>
                  )}
                  
                  <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 leading-[1.1] tracking-tight">
                    {portfolio.title}
                  </h1>
                  
                  {/* Subtitle */}
                  {(portfolio as any).subtitle && (
                    <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed max-w-3xl">
                      {(portfolio as any).subtitle}
                    </p>
                  )}
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {portfolio.technologies.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
          </div>
        </div>

                {/* Main Image */}
                <div className="relative w-full" data-cursor-view="true">
                  <div className="relative w-full rounded-2xl overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <Image
                        src={portfolio.image?.split("?")[0] || "/placeholder.svg"}
                        alt={portfolio.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Additional Images Gallery - Below left of main image */}
                  {portfolio.additionalImages && portfolio.additionalImages.length > 0 && (
                    <AdditionalImagesGallery images={portfolio.additionalImages} title={portfolio.title} />
                  )}
                </div>

                {/* Project Overview */}
                <div className="space-y-10">
                  <div>
                    <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
                      Project Overview
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                      {portfolio.description}
                    </p>
                  </div>
                </div>

                {/* User Journey Analysis */}
                {mounted && (portfolio as any).userJourney && (
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl space-y-8">
                    <div>
                      <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2 tracking-wide uppercase">
                        {(portfolio as any).userJourney.title || "User Journey Analysis"}
                      </h2>
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {(portfolio as any).userJourney.subtitle}
                      </p>
                    </div>

                    {/* Journey Graph */}
                    <div className="relative">
                      <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-500 pr-2">
                          <span>+1</span>
                          <span>0</span>
                          <span>-1</span>
                          <span>-2</span>
                        </div>

                        {/* Graph area */}
                        <div className="ml-12 relative" style={{ height: "300px" }}>
                          {/* Grid lines */}
                          <div className="absolute inset-0 flex flex-col justify-between">
                            {[0, 1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="h-px bg-gray-200 dark:bg-gray-800"
                                style={{ marginTop: i === 0 ? "0" : "auto", marginBottom: i === 0 ? "auto" : "0" }}
                              />
                            ))}
                          </div>

                          {/* Zero line */}
                          <div className="absolute left-0 right-0 h-px bg-gray-400 dark:bg-gray-600" style={{ top: "50%" }} />

                          {/* Stages and line */}
                          <div className="relative h-full">
                            {mounted && (
                              <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                                {/* Line path */}
                                {((portfolio as any).userJourney.stages || []).length > 0 && (
                                  <polyline
                                    points={((portfolio as any).userJourney.stages || [])
                                      .map(
                                        (stage: any, idx: number) =>
                                          `${(idx / Math.max(1, ((portfolio as any).userJourney.stages.length - 1))) * 80 + 10}%,${
                                            50 - (stage.sentiment * 12.5)
                                          }%`
                                      )
                                      .join(" ")}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-indigo-500 dark:text-indigo-400"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                )}
                              </svg>
                            )}

                            {/* Stage points */}
                            {mounted && (
                              <div className="absolute inset-0 flex justify-between items-center">
                                {((portfolio as any).userJourney.stages || []).map((stage: any, idx: number) => {
                                  const position = (idx / Math.max(1, ((portfolio as any).userJourney.stages.length - 1))) * 80 + 10
                                  const topPosition = 50 - stage.sentiment * 12.5
                                  const IconComponent =
                                    stage.sentiment > 0.5
                                      ? Smile
                                      : stage.sentiment < -0.5
                                        ? Frown
                                        : Meh

                                  return (
                                    <div
                                      key={idx}
                                      className="absolute flex flex-col items-center"
                                      style={{
                                        left: `${position}%`,
                                        top: `${topPosition}%`,
                                        transform: "translate(-50%, -50%)",
                                      }}
                                    >
                                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-500 dark:border-indigo-400 flex items-center justify-center mb-2">
                                        <IconComponent
                                          className={`w-5 h-5 ${
                                            stage.sentiment > 0.5
                                              ? "text-green-500"
                                              : stage.sentiment < -0.5
                                                ? "text-red-500"
                                                : "text-yellow-500"
                                          }`}
                                        />
                                      </div>
                                      <div className="text-center min-w-[120px]">
                                        <p className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-1">
                                          {stage.name}
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">{stage.feedback}</p>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Opportunity */}
                    {(portfolio as any).userJourney.opportunity && (
                      <div>
                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                          <span className="font-semibold">Opportunity:</span> {(portfolio as any).userJourney.opportunity}
                        </p>
                      </div>
                    )}

                    {/* Solution */}
                    {(portfolio as any).userJourney.solution && (
                      <div className="bg-indigo-50/50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/20">
                        <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 tracking-wide uppercase">
                          Solution
                        </h3>
                        <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                          <span className="font-medium">Before:</span> {(portfolio as any).userJourney.solution.before} →{" "}
                          <span className="font-medium">After:</span> {(portfolio as any).userJourney.solution.after}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {(portfolio as any).userJourney.solution.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <ProjectInfoBentoGrid portfolio={portfolio as any} />
              </div>
            </section>

            {/* Problem Section */}
            <section
              id="problem"
              ref={(el) => {
                if (el) sectionRefs.current.problem = el
              }}
              className="pt-16 pb-12 scroll-mt-32"
            >
              <div className="rounded-3xl bg-[#fafafa] dark:bg-gray-950/60 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Image - Mobile: top, Desktop: left */}
                    <div className="order-1 lg:order-1">
                      <div
                        className="relative h-full w-full rounded-[32px] bg-gray-100 dark:bg-gray-900 overflow-hidden"
                        style={{ minHeight: "260px" }}
                      >
                        {(portfolio as any).problemImage ? (
                          <img
                            src={(portfolio as any).problemImage}
                            alt="Problem illustration"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            crossOrigin="anonymous"
                            referrerPolicy="no-referrer-when-downgrade"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              // Hide broken image and show placeholder
                              target.style.display = 'none'
                              // Show placeholder if not already shown
                              const placeholder = target.parentElement?.querySelector('.image-placeholder')
                              if (!placeholder) {
                                const placeholderDiv = document.createElement('div')
                                placeholderDiv.className = 'image-placeholder absolute inset-0 flex items-center justify-center'
                                placeholderDiv.innerHTML = `
                                  <div class="text-center p-8">
                                    <svg class="w-16 h-16 text-red-300 dark:text-red-800 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                                    </svg>
                                    <p class="text-sm text-gray-500 dark:text-gray-500">Problem Illustration</p>
                                  </div>
                                `
                                target.parentElement?.appendChild(placeholderDiv)
                              }
                            }}
                            onLoad={(e) => {
                              // Hide placeholder if image loads successfully
                              const placeholder = (e.currentTarget.parentElement as HTMLElement)?.querySelector('.image-placeholder')
                              if (placeholder) {
                                (placeholder as HTMLElement).style.display = 'none'
                              }
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                              <TrendingDown className="w-16 h-16 text-red-300 dark:text-red-800 mx-auto mb-4" />
                              <p className="text-sm text-gray-500 dark:text-gray-500">Problem Illustration</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content - Mobile: bottom, Desktop: right */}
                    <div className="order-2 lg:order-2 space-y-6">
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 dark:bg-red-900/20 px-4 py-1.5">
                          <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400" />
                          <span className="text-xs font-semibold tracking-[0.14em] text-red-500 dark:text-red-400 uppercase">
                            Problem
                          </span>
                        </div>

                        {/* Main Description */}
                        <p className="text-base md:text-lg text-gray-800 dark:text-gray-100 leading-relaxed max-w-xl">
                          {(portfolio as any).problemDescription || portfolio.challenges}
                        </p>
                      </div>

                      {/* Detail Cards */}
                      <div className="relative">
                        <div
                          className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                          style={{
                            WebkitMaskImage:
                              "linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)",
                            maskImage:
                              "linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)",
                          }}
                        >
                          {displayProblemCards.map((card: any, index: number) => (
                            <div
                              key={index}
                              className="rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-800 px-5 py-4 flex flex-col justify-between min-h-[120px] min-w-[210px] snap-start"
                            >
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                                {card.title}
                              </h3>
                              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                {card.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {(portfolio as any).problemSource && (
                        <p className="pt-2 text-[11px] text-gray-400">
                          source: {(portfolio as any).problemSource}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="h-px bg-gray-200 dark:bg-gray-800 my-8"></div>

            {/* Solution Section */}
            <section
              id="solution"
              ref={(el) => {
                if (el) sectionRefs.current.solution = el
              }}
              className="pt-12 pb-16 scroll-mt-32"
            >
              <div className="rounded-3xl bg-[#fafafa] dark:bg-gray-950/60 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Content - Mobile: top, Desktop: left */}
                    <div className="order-2 lg:order-1 space-y-6">
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 px-4 py-1.5">
                          <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                          <span className="text-xs font-semibold tracking-[0.14em] text-indigo-500 dark:text-indigo-400 uppercase">
                            Solution
                          </span>
                        </div>

                        {/* Main Description */}
                        <p className="text-base md:text-lg text-gray-800 dark:text-gray-100 leading-relaxed max-w-xl">
                          {(portfolio as any).solutionDescription ||
                            (portfolio.challenges && portfolio.challenges.length > 200
                              ? portfolio.challenges.split(".").slice(1).join(".").trim() || portfolio.challenges
                              : "The solution involved a comprehensive approach combining technical expertise with user-centered design principles to address the challenges effectively.")}
                        </p>
                      </div>

                      {/* Detail Cards */}
                      <div className="relative">
                        <div
                          className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                          style={{
                            WebkitMaskImage:
                              "linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)",
                            maskImage:
                              "linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)",
                          }}
                        >
                          {displaySolutionCards.map((card: any, index: number) => (
                            <div
                              key={index}
                              className="rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-800 px-5 py-4 flex flex-col justify-between min-h-[120px] min-w-[210px] snap-start"
                            >
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                                {card.title}
                              </h3>
                              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                {card.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {(portfolio as any).solutionSource && (
                        <p className="pt-2 text-[11px] text-gray-400">
                          source: {(portfolio as any).solutionSource}
                        </p>
                      )}
                    </div>

                    {/* Image - Mobile: bottom, Desktop: right */}
                    <div className="order-1 lg:order-2">
                      <div
                        className="relative h-full w-full rounded-[32px] bg-gray-100 dark:bg-gray-900 overflow-hidden"
                        style={{ minHeight: "260px" }}
                      >
                        {(portfolio as any).solutionImage ? (
                          <img
                            src={(portfolio as any).solutionImage}
                            alt="Solution illustration"
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            crossOrigin="anonymous"
                            referrerPolicy="no-referrer-when-downgrade"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              // Hide broken image and show placeholder
                              target.style.display = 'none'
                              // Show placeholder if not already shown
                              const placeholder = target.parentElement?.querySelector('.image-placeholder')
                              if (!placeholder) {
                                const placeholderDiv = document.createElement('div')
                                placeholderDiv.className = 'image-placeholder absolute inset-0 flex items-center justify-center'
                                placeholderDiv.innerHTML = `
                                  <div class="text-center p-8">
                                    <svg class="w-16 h-16 text-indigo-300 dark:text-indigo-800 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p class="text-sm text-gray-500 dark:text-gray-500">Solution Illustration</p>
                                  </div>
                                `
                                target.parentElement?.appendChild(placeholderDiv)
                              }
                            }}
                            onLoad={(e) => {
                              // Hide placeholder if image loads successfully
                              const placeholder = (e.currentTarget.parentElement as HTMLElement)?.querySelector('.image-placeholder')
                              if (placeholder) {
                                (placeholder as HTMLElement).style.display = 'none'
                              }
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                              <TrendingUp className="w-16 h-16 text-indigo-300 dark:text-indigo-800 mx-auto mb-4" />
                              <p className="text-sm text-gray-500 dark:text-gray-500">Solution Illustration</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="h-px bg-gray-200 dark:bg-gray-800 my-8"></div>

            {/* Process Section */}
            {portfolio.projectSteps && portfolio.projectSteps.length > 0 && (
              <section
                id="process"
                ref={(el) => {
                if (el) sectionRefs.current.process = el
              }}
                className="pt-12 pb-16 scroll-mt-32"
              >
                <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-8 tracking-wide uppercase">
                  Process
                </h2>
                <div className="space-y-12">
                  {portfolio.projectSteps.map((step: any, index: number) => (
                  <motion.div
                      key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() => setActiveStep(index)}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, margin: "-100px" }}
                      className="space-y-4"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 flex-shrink-0 w-8">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      {step.image && step.image.trim() !== "" && (
                        <div className="ml-14 relative w-full">
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <Image
                            src={step.image.startsWith("http") ? step.image : step.image.split("?")[0]}
                            alt={step.title}
                            fill
                            className="object-cover rounded-lg"
                            unoptimized={step.image.startsWith("http")}
                          />
                        </div>
                      </div>
                      )}
                  </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Divider */}
            <div className="h-px bg-gray-200 dark:bg-gray-800 my-8"></div>

            {/* Outcomes Section */}
            <section
              id="outcomes"
              ref={(el) => {
                if (el) sectionRefs.current.outcomes = el
              }}
              className="pt-12 pb-16 scroll-mt-32"
            >
              <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-8 tracking-wide uppercase">
                Outcomes
              </h2>

              {/* Outcomes Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {(portfolio as any).outcomes && (portfolio as any).outcomes.length > 0 ? (
                  ((portfolio as any).outcomes as any[]).slice(0, 3).map((outcome: any, idx: number) => (
                    <div
                      key={idx}
                      className={`space-y-2.5 p-4 rounded-lg border ${
                        outcome.type === "positive"
                          ? "bg-indigo-50/50 dark:bg-indigo-900/10 text-indigo-500 dark:text-indigo-400 border-indigo-100/50 dark:border-indigo-800/30"
                          : outcome.type === "negative"
                            ? "bg-red-50/50 dark:bg-red-900/10 text-red-400 dark:text-red-400 border-red-100/50 dark:border-red-800/30"
                            : "bg-gray-50/50 dark:bg-gray-800/50 text-gray-900 dark:text-gray-100 border-gray-100 dark:border-gray-700/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {outcome.type === "positive" ? (
                          <ThumbsUp className="w-5 h-5" />
                        ) : outcome.type === "negative" ? (
                          <ThumbsDown className="w-5 h-5" />
                        ) : null}
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold">
                            {outcome.type === "positive" ? "+" : outcome.type === "negative" ? "-" : ""}
                            {outcome.value}
                            {outcome.unit || "%"}
                          </span>
            </div>
          </div>
                      <h3 className="text-sm font-semibold">{outcome.title}</h3>
                      {outcome.description && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{outcome.description}</p>
                      )}
                    </div>
                  ))
                ) : (
                  <>
                    {/* Default Positive Outcome */}
                    <div className="space-y-2.5 p-4 bg-indigo-50/50 dark:bg-indigo-900/10 text-indigo-500 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-800/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5" />
                        <span className="text-3xl font-bold">+40%</span>
                      </div>
                      <h3 className="text-sm font-semibold">Growth in user engagement</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        by implementing user-centered design principles and optimizing the user experience flow.
                      </p>
                    </div>

                    {/* Default Negative Outcome (Reduction) */}
                    <div className="space-y-2.5 p-4 bg-indigo-50/50 dark:bg-indigo-900/10 text-indigo-500 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-800/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-5 h-5" />
                        <span className="text-3xl font-bold">-50%</span>
                      </div>
                      <h3 className="text-sm font-semibold">Reduced subscription drop-off</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        by aligning subscription flow with customer habits, reducing decision making friction.
                      </p>
                    </div>

                    {/* Default Challenge Card */}
                    <div className="space-y-2.5 p-4 bg-red-50/50 dark:bg-red-900/10 text-red-400 dark:text-red-400 border border-red-100/50 dark:border-red-800/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <ThumbsDown className="w-5 h-5" />
                        <span className="text-sm font-semibold">Challenge</span>
                      </div>
                      <h3 className="text-sm font-semibold">Price is still a key barrier</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Reveals the challenge of introducing a premium product to a price-sensitive market.
                      </p>
        </div>
                  </>
                )}
              </div>

              {/* Next Steps */}
              <div className="mt-12">
                <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide uppercase">
                  Next Steps
                </h3>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    This project is currently guiding ongoing improvements and shaping future development
                  </h4>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {(portfolio as any).nextSteps ||
                      "The insights and recommendations from this project are being implemented to drive continuous improvement and inform future strategic decisions."}
                  </p>
                </div>
              </div>
            </section>

      {/* Prev / Next navigation */}
            <div className="mt-32 pt-16 border-t border-gray-200 dark:border-gray-900 grid grid-cols-1 md:grid-cols-2 gap-8">
        {prevPortfolio && (
          <Link
            href={`/portfolio/${prevPortfolio.id}`}
                  className="group flex items-center py-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
                  <ArrowLeft className="mr-4 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <div>
                    <p className="text-sm mb-1">Previous Project</p>
                    <p className="font-medium">{prevPortfolio.title}</p>
            </div>
          </Link>
        )}
        {nextPortfolio && (
          <Link
            href={`/portfolio/${nextPortfolio.id}`}
                  className="group flex items-center justify-end py-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <div className="text-right">
                    <p className="text-sm mb-1">Next Project</p>
                    <p className="font-medium">{nextPortfolio.title}</p>
            </div>
                  <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
