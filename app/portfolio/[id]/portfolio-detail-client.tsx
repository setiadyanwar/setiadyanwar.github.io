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
import FullScreenImageGallery from "@/components/portfolio/full-screen-image-gallery"
import ReactMarkdown from "react-markdown"

const defaultProblemCards: any[] = []
const defaultSolutionCards: any[] = []

interface PortfolioDetailClientProps {
    portfolio: any
    allPortfolioItems: any[]
}

export default function PortfolioDetailClient({ portfolio, allPortfolioItems }: PortfolioDetailClientProps) {
    const [activeSection, setActiveSection] = useState<string>("overview")
    const [activeStep, setActiveStep] = useState<number>(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Dynamic sections based on portfolio headings
    const sections = [
        { id: "overview", label: portfolio.overviewHeading || "Overview" },
        { id: "challenges", label: portfolio.challengesHeading || "Challenges" },
        { id: "problem", label: portfolio.problemHeading || "Problem" },
        { id: "solution", label: portfolio.solutionHeading || "Solution" },
        { id: "process", label: portfolio.processHeading || "Process" },
        { id: "outcomes", label: portfolio.outcomesHeading || "Outcomes" },
    ]

    // Image Preview State
    const [previewImages, setPreviewImages] = useState<Array<{ url: string; description?: string }>>([])
    const [previewIndex, setPreviewIndex] = useState(0)
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)

    const openImagePreview = (images: string[], index: number, title: string) => {
        const uniqueKey = Date.now(); // force re-render if needed
        const formattedImages = images.map((img, i) => ({
            url: img,
            description: `${title} - Image ${i + 1}`
        }))
        setPreviewImages(formattedImages)
        setPreviewIndex(index)
        setIsPreviewOpen(true)
    }

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

    const renderSubstepImages = (substep: any, stepTitle: string) => {
        if (substep.layout === 'stack') {
            return (
                <div className="flex flex-col pb-24 relative z-0">
                    {substep.images.map((img: string, imgIdx: number) => (
                        <div
                            key={imgIdx}
                            className="sticky w-full mb-32 md:mb-48 [--stack-top:5rem] md:[--stack-top:6rem] [--stack-step:1.5rem] md:[--stack-step:2.5rem]"
                            style={{
                                top: `calc(var(--stack-top) + ${imgIdx} * var(--stack-step))`,
                                zIndex: imgIdx + 1
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-xl cursor-pointer group"
                                style={{ aspectRatio: "16/9" }}
                                onClick={() => openImagePreview(substep.images, imgIdx, substep.title || stepTitle || 'Process Step')}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`${substep.title || 'Substep'} - Image ${imgIdx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                    <div className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-xs font-medium px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                                        View Fullscreen
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            )
        }

        return (
            <div className={`grid gap-4 ${substep.images.length === 1
                ? 'grid-cols-1 max-w-2xl'
                : substep.images.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}>
                {substep.images.map((img: string, imgIdx: number) => (
                    <div
                        key={imgIdx}
                        className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-sm cursor-pointer group"
                        style={{ aspectRatio: substep.images.length === 1 ? "16/9" : "4/3" }}
                        onClick={() => openImagePreview(substep.images, imgIdx, substep.title || stepTitle || 'Process Step')}
                    >
                        <Image
                            src={img}
                            alt={`${substep.title || 'Substep'} - Image ${imgIdx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                View Image
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

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

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
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

                <div className="flex gap-6 md:gap-12 lg:gap-20">
                    <PortfolioNavigation
                        sections={sections}
                        activeSection={activeSection}
                        onSectionClick={scrollToSection}
                    />

                    {/* Main Content */}
                    <main className="flex-1 w-full max-w-4xl">
                        {/* Overview Section */}
                        <section
                            id="overview"
                            ref={(el) => {
                                if (el) sectionRefs.current.overview = el
                            }}
                            className="pt-4 pb-12 sm:pb-16 md:pb-24 scroll-mt-32"
                        >
                            <div className="space-y-8 sm:space-y-12 md:space-y-16">
                                {/* Hero Header */}
                                <div className="space-y-4">
                                    {portfolio.date && (
                                        <p className="text-sm text-gray-500 dark:text-gray-500">
                                            {portfolio.date}
                                        </p>
                                    )}

                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-gray-100 leading-[1.1] tracking-tight">
                                        {portfolio.title}
                                    </h1>

                                    {portfolio.subtitle && (
                                        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500 leading-relaxed max-w-3xl">
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
                                                src={portfolio.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3C/svg%3E"}
                                                alt={portfolio.title}
                                                fill
                                                className="object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23cccccc'/%3E%3C/svg%3E";
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {portfolio.additionalImages && portfolio.additionalImages.length > 0 && (
                                        <AdditionalImagesGallery images={portfolio.additionalImages} title={portfolio.title} />
                                    )}
                                </div>

                                {/* Project Overview */}
                                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 tracking-wide uppercase">
                                            {portfolio.overviewHeading ? "Overview" : "Project Overview"}
                                        </h4>
                                        {portfolio.overviewHeading && (
                                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                                                {portfolio.overviewHeading}
                                            </h2>
                                        )}
                                        <div className="prose prose-sm sm:prose-base md:prose-lg prose-indigo dark:prose-invert max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
                                            <ReactMarkdown
                                                components={{
                                                    p: ({ node, ...props }) => <p className="mb-6 last:mb-0" {...props} />,
                                                    strong: ({ node, ...props }) => <span className="bg-amber-100 dark:bg-amber-900/30 text-gray-900 dark:text-gray-100 font-medium px-0.5 rounded" {...props} />
                                                }}
                                            >
                                                {portfolio.description}
                                            </ReactMarkdown>
                                        </div>
                                    </div>


                                </div>

                                <ProjectInfoBentoGrid portfolio={portfolio} />
                            </div>
                        </section>

                        {portfolio.challenges && (
                            <section
                                id="challenges"
                                ref={(el) => {
                                    if (el) sectionRefs.current.challenges = el
                                }}
                                className="pt-12 pb-12 scroll-mt-32"
                            >
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 tracking-wide uppercase">
                                        {portfolio.challengesHeading ? "Challenges" : "Challenges"}
                                    </h4>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                                        {portfolio.challengesHeading || "The Challenge"}
                                    </h2>
                                    <div className="prose prose-sm sm:prose-base md:prose-lg prose-indigo dark:prose-invert max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <ReactMarkdown
                                            components={{
                                                p: ({ node, ...props }) => <p className="mb-6 last:mb-0" {...props} />,
                                                strong: ({ node, ...props }) => <span className="bg-amber-100 dark:bg-amber-900/30 text-gray-900 dark:text-gray-100 font-medium px-0.5 rounded" {...props} />
                                            }}
                                        >
                                            {portfolio.challenges}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </section>
                        )}

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
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
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
                                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                                                    {portfolio.problemHeading || "Problem"}
                                                </h4>

                                                <div className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-100 leading-relaxed max-w-xl">
                                                    <ReactMarkdown
                                                        components={{
                                                            p: ({ node, ...props }) => <p className="mb-0" {...props} />,
                                                            strong: ({ node, ...props }) => <span className="bg-amber-100 dark:bg-amber-900/30 text-gray-900 dark:text-gray-100 font-medium px-0.5 rounded" {...props} />
                                                        }}
                                                    >
                                                        {portfolio.problemDescription || portfolio.challenges}
                                                    </ReactMarkdown>
                                                </div>
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
                                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                                                    {portfolio.solutionHeading || "Solution"}
                                                </h4>

                                                <div className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-100 leading-relaxed max-w-xl">
                                                    <ReactMarkdown
                                                        components={{
                                                            p: ({ node, ...props }) => <p className="mb-0" {...props} />,
                                                            strong: ({ node, ...props }) => <span className="bg-amber-100 dark:bg-amber-900/30 text-gray-900 dark:text-gray-100 font-medium px-0.5 rounded" {...props} />
                                                        }}
                                                    >
                                                        {portfolio.solutionDescription}
                                                    </ReactMarkdown>
                                                </div>
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

                        {/* Process Section */}
                        <section
                            id="process"
                            ref={(el) => {
                                if (el) sectionRefs.current.process = el
                            }}
                            className="pt-12 pb-16 scroll-mt-32"
                        >
                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase mb-3">
                                        {portfolio.processHeading ? "Process" : "Process"}
                                    </h4>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8">
                                        {portfolio.processHeading || "The Journey"}
                                    </h2>
                                </div>
                                {portfolio.projectSteps && portfolio.projectSteps.length > 0 ? (
                                    portfolio.projectSteps.map((step: any, idx: number) => (
                                        <div key={idx} className="space-y-6">
                                            {step.title && (
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                                                    {step.title}
                                                </h3>
                                            )}

                                            {step.image && (
                                                <div
                                                    className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-sm"
                                                    style={{ aspectRatio: "16/9" }}
                                                >
                                                    <Image
                                                        src={step.image}
                                                        alt={step.title || "Process image"}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                                        priority={idx === 0}
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            )}

                                            {step.description && (
                                                <div className="prose prose-sm sm:prose-base md:prose-lg prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    <ReactMarkdown
                                                        components={{
                                                            p: ({ node, ...props }) => <p className="mb-6 last:mb-0" {...props} />,
                                                            h3: ({ node, ...props }) => <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4" {...props} />,
                                                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />,
                                                            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />,
                                                            li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                                                            strong: ({ node, ...props }) => <span className="bg-amber-100 dark:bg-amber-900/30 text-gray-900 dark:text-gray-100 font-medium px-0.5 rounded" {...props} />,
                                                            img: ({ node, ...props }) => (
                                                                <div className="my-8 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                                                                    <img {...props} className="w-full h-auto" />
                                                                </div>
                                                            ),
                                                        }}
                                                    >
                                                        {step.description}
                                                    </ReactMarkdown>
                                                </div>
                                            )}

                                            {/* Substeps */}
                                            {step.substeps && step.substeps.length > 0 && (
                                                <div className="mt-8 space-y-6 pl-0 sm:pl-6 border-l-0 sm:border-l-2 border-gray-200 dark:border-gray-800">
                                                    {step.substeps.map((substep: any, subIdx: number) => (
                                                        <div key={subIdx} className="space-y-4">
                                                            {substep.title && (
                                                                <h4 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                                                                    {substep.title}
                                                                </h4>
                                                            )}

                                                            {/* Substep Description */}
                                                            {substep.description && (
                                                                <div className="prose prose-sm sm:prose-base prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
                                                                    <ReactMarkdown
                                                                        components={{
                                                                            p: ({ node, ...props }) => <p className="mb-4 last:mb-0" {...props} />,
                                                                            strong: ({ node, ...props }) => <span className="bg-amber-100 dark:bg-amber-900/30 text-gray-900 dark:text-gray-100 font-medium px-0.5 rounded" {...props} />,
                                                                        }}
                                                                    >
                                                                        {substep.description}
                                                                    </ReactMarkdown>
                                                                </div>
                                                            )}

                                                            {/* Substep Images */}
                                                            {/* Substep Images */}
                                                            {substep.images && substep.images.length > 0 && (
                                                                <div className="mt-4">
                                                                    {renderSubstepImages(substep, step.title)}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Belum ada data proses.</p>
                                )}
                            </div>
                        </section>

                        {/* Outcomes Section */}
                        <section
                            id="outcomes"
                            ref={(el) => {
                                if (el) sectionRefs.current.outcomes = el
                            }}
                            className="pt-6 pb-16 scroll-mt-32"
                        >
                            <div className="space-y-6">
                                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                                    {portfolio.outcomesHeading || "Outcomes"}
                                </h4>

                                <div
                                    className="flex gap-4 overflow-x-auto pb-6 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide"
                                    style={{
                                        maskImage: "linear-gradient(to right, black 85%, transparent 100%)",
                                        WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 100%)"
                                    }}
                                >
                                    {portfolio.outcomes && portfolio.outcomes.length > 0 && (
                                        portfolio.outcomes.map((item: any, idx: number) => (
                                            <div
                                                key={`outcome-${idx}`}
                                                className="min-w-[280px] md:min-w-[320px] rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-5 snap-start flex flex-col shadow-sm"
                                            >
                                                <p className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                    {(item.value || item.value === 0) && (
                                                        <span className="text-indigo-600 dark:text-indigo-400 mr-1.5">
                                                            {item.value}{item.unit || ""}
                                                        </span>
                                                    )}
                                                    {item.title || `Outcome ${idx + 1}`}
                                                </p>
                                                {item.description && (
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))
                                    )}



                                    {(!portfolio.outcomes?.length && !portfolio.impact?.length) && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Belum ada data outcomes.</p>
                                    )}
                                </div>
                            </div>
                        </section>



                        {/* Reuse Responsive Gallery Modal for Sub-step Images */}
                        <FullScreenImageGallery
                            images={previewImages}
                            initialIndex={previewIndex}
                            isOpen={isPreviewOpen}
                            onClose={() => setIsPreviewOpen(false)}
                        />

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
        </div >
    )
}
