"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { ArrowLeft, ArrowRight, TrendingDown, TrendingUp, ThumbsUp, ThumbsDown, Frown, Smile, Meh, AlertTriangle, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import PortfolioBreadcrumb from "@/components/portfolio/portfolio-breadcrumb"
import PortfolioNavigation from "@/components/portfolio/portfolio-navigation"
import MobileNavigationToggle from "@/components/portfolio/mobile-navigation-toggle"
import MobileNavigationSidebar from "@/components/portfolio/mobile-navigation-sidebar"
import ProjectInfoBentoGrid from "@/components/portfolio/project-info-bento-grid"
import AdditionalImagesGallery from "@/components/portfolio/additional-images-gallery"

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

interface PortfolioDetailClientProps {
    portfolio: any
    allPortfolioItems: any[]
}

export default function PortfolioDetailClient({ portfolio, allPortfolioItems }: PortfolioDetailClientProps) {
    const [activeSection, setActiveSection] = useState<string>("overview")
    const [activeStep, setActiveStep] = useState<number>(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
    const activeSectionRef = useRef<string>("overview")

    useEffect(() => {
        setMounted(true)
    }, [])

    // Calculate navigation items
    const navigationData = useMemo(() => {
        const idx = allPortfolioItems.findIndex((item: any) => item.id === portfolio.id)
        return {
            currentIndex: idx,
            prevPortfolio: idx > 0 ? allPortfolioItems[idx - 1] : null,
            nextPortfolio: idx < allPortfolioItems.length - 1 && idx >= 0 ? allPortfolioItems[idx + 1] : null,
        }
    }, [portfolio, allPortfolioItems])
    const { currentIndex, prevPortfolio, nextPortfolio } = navigationData

    // Memoize problem/solution cards
    const problemSolutionData = useMemo(() => {
        const probCards = portfolio && portfolio.problemCards && portfolio.problemCards.length > 0
            ? portfolio.problemCards
            : defaultProblemCards
        const solCards = portfolio && portfolio.solutionCards && portfolio.solutionCards.length > 0
            ? portfolio.solutionCards
            : defaultSolutionCards

        return {
            problemCards: probCards,
            solutionCards: solCards,
            displayProblemCards: probCards.length >= 4 ? probCards : [...probCards, ...probCards].slice(0, 4),
            displaySolutionCards: solCards.length >= 4 ? solCards : [...solCards, ...solCards].slice(0, 4),
        }
    }, [portfolio])
    const { problemCards, solutionCards, displayProblemCards, displaySolutionCards } = problemSolutionData

    // Scroll handler
    useEffect(() => {
        activeSectionRef.current = activeSection

        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY + 250
                    const allSections = Object.keys(sectionRefs.current)
                    let currentSection = activeSectionRef.current

                    for (const sectionId of allSections) {
                        const element = sectionRefs.current[sectionId]
                        if (element) {
                            const rect = element.getBoundingClientRect()
                            const elementTop = rect.top + window.scrollY
                            const elementBottom = elementTop + rect.height

                            if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom - 100) {
                                currentSection = sectionId
                                break
                            }
                        }
                    }

                    if (currentSection !== activeSectionRef.current) {
                        activeSectionRef.current = currentSection
                        setActiveSection(currentSection)
                    }

                    ticking = false
                })
                ticking = true
            }
        }

        const timeoutId = setTimeout(() => {
            handleScroll()
        }, 100)

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [activeSection])

    const scrollToSection = (sectionId: string) => {
        const element = sectionRefs.current[sectionId]
        if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            activeSectionRef.current = sectionId
            setActiveSection(sectionId)
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
                                    {portfolio.date && (
                                        <p className="text-sm text-gray-500 dark:text-gray-500">
                                            {portfolio.date}
                                        </p>
                                    )}

                                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 leading-[1.1] tracking-tight">
                                        {portfolio.title}
                                    </h1>

                                    {portfolio.subtitle && (
                                        <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed max-w-3xl">
                                            {portfolio.subtitle}
                                        </p>
                                    )}

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

                                <ProjectInfoBentoGrid portfolio={portfolio} />
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
                                        <div className="order-1 lg:order-1">
                                            <div
                                                className="relative h-full w-full rounded-[32px] bg-gray-100 dark:bg-gray-900 overflow-hidden"
                                                style={{ minHeight: "260px" }}
                                            >
                                                {portfolio.problemImage ? (
                                                    <img
                                                        src={portfolio.problemImage}
                                                        alt="Problem illustration"
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                        loading="lazy"
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

                                        <div className="order-2 lg:order-2 space-y-6">
                                            <div className="space-y-4">
                                                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 dark:bg-red-900/20 px-4 py-1.5">
                                                    <AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400" />
                                                    <span className="text-xs font-semibold tracking-[0.14em] text-red-500 dark:text-red-400 uppercase">
                                                        Problem
                                                    </span>
                                                </div>

                                                <p className="text-base md:text-lg text-gray-800 dark:text-gray-100 leading-relaxed max-w-xl">
                                                    {portfolio.problemDescription || portfolio.challenges}
                                                </p>
                                            </div>

                                            <div className="relative">
                                                <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
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
                                        <div className="order-2 lg:order-1 space-y-6">
                                            <div className="space-y-4">
                                                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 px-4 py-1.5">
                                                    <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                                                    <span className="text-xs font-semibold tracking-[0.14em] text-indigo-500 dark:text-indigo-400 uppercase">
                                                        Solution
                                                    </span>
                                                </div>

                                                <p className="text-base md:text-lg text-gray-800 dark:text-gray-100 leading-relaxed max-w-xl">
                                                    {portfolio.solutionDescription || "The solution involved a comprehensive approach combining technical expertise with user-centered design principles."}
                                                </p>
                                            </div>

                                            <div className="relative">
                                                <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
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
                                        </div>

                                        <div className="order-1 lg:order-2">
                                            <div
                                                className="relative h-full w-full rounded-[32px] bg-gray-100 dark:bg-gray-900 overflow-hidden"
                                                style={{ minHeight: "260px" }}
                                            >
                                                {portfolio.solutionImage ? (
                                                    <img
                                                        src={portfolio.solutionImage}
                                                        alt="Solution illustration"
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                        loading="lazy"
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

                        {/* Navigation Buttons */}
                        <div className="flex justify-between items-center pt-16 border-t border-gray-200 dark:border-gray-800">
                            {prevPortfolio ? (
                                <Link
                                    href={`/portfolio/${prevPortfolio.id}`}
                                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    <span className="text-sm font-medium">Previous</span>
                                </Link>
                            ) : (
                                <div></div>
                            )}

                            {nextPortfolio ? (
                                <Link
                                    href={`/portfolio/${nextPortfolio.id}`}
                                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <span className="text-sm font-medium">Next</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
