"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X, Home, User, Briefcase, FolderOpen, Search, Code, Palette, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Set mounted state after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Icon renderer function
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-4 w-4" }
    switch (iconName) {
      case "Home": return <Home {...iconProps} />
      case "FolderOpen": return <FolderOpen {...iconProps} />
      case "Briefcase": return <Briefcase {...iconProps} />
      case "User": return <User {...iconProps} />
      case "Code": return <Code {...iconProps} />
      case "Palette": return <Palette {...iconProps} />
      case "Globe": return <Globe {...iconProps} />
      default: return <Search {...iconProps} />
    }
  }

  // Comprehensive search data
  const searchData = [
    // Navigation
    { 
      name: "Home", 
      href: "/", 
      icon: "Home", 
      keywords: ["home", "beranda", "main", "landing", "utama"],
      category: "Navigation",
      description: "Main landing page"
    },
    { 
      name: "Portfolio", 
      href: "/portfolio", 
      icon: "FolderOpen", 
      keywords: ["portfolio", "projects", "work", "proyek", "karya", "showcase", "gallery"],
      category: "Navigation",
      description: "View my projects and work"
    },
    {
      name: "ESS API Contract",
      href: "/ess-api",
      icon: "Code",
      keywords: ["api", "ess", "sigma", "documentation", "laravel", "contract", "endpoint", "specification"],
      category: "Documentation",
      description: "Full ESS-Sigma Laravel API contract"
    },
    { 
      name: "Experience", 
      href: "/experience", 
      icon: "Briefcase", 
      keywords: ["experience", "work", "career", "pengalaman", "kerja", "job", "employment"],
      category: "Navigation",
      description: "My work experience and career"
    },
    { 
      name: "About", 
      href: "/about", 
      icon: "User", 
      keywords: ["about", "me", "profile", "tentang", "saya", "personal", "bio"],
      category: "Navigation",
      description: "Learn more about me"
    },
    
    // Skills & Technologies
    {
      name: "Frontend Development",
      href: "/#skills",
      icon: "Code",
      keywords: ["frontend", "react", "nextjs", "vue", "javascript", "typescript", "html", "css", "tailwind", "development"],
      category: "Skills",
      description: "Modern web development with React, Next.js, Vue.js"
    },
    {
      name: "UI/UX Design",
      href: "/#skills",
      icon: "Palette",
      keywords: ["ui", "ux", "design", "figma", "prototype", "wireframe", "user experience", "interface"],
      category: "Skills",
      description: "User interface and experience design"
    },
    {
      name: "Web Development",
      href: "/#skills",
      icon: "Globe",
      keywords: ["web", "development", "laravel", "php", "mysql", "api", "fullstack", "backend"],
      category: "Skills",
      description: "Full-stack web development solutions"
    },

    // Activities & Achievements
    {
      name: "GDGOC IPB University",
      href: "/#activities",
      icon: "Briefcase",
      keywords: ["gdgoc", "google", "developer", "group", "ipb", "university", "community", "leadership"],
      category: "Activities",
      description: "Core team member at Google Developer Group on Campus",
      activityId: 1
    },
    {
      name: "Company Visit Himavo",
      href: "/#activities",
      icon: "Briefcase",
      keywords: ["company", "visit", "himavo", "microit", "event", "organizer", "lead", "75 participants"],
      category: "Activities",
      description: "Lead organizer of company visit event",
      activityId: 2
    },
    {
      name: "Compfest 2024 Winner",
      href: "/#activities",
      icon: "Briefcase",
      keywords: ["compfest", "winner", "first place", "ux", "design", "competition", "academy"],
      category: "Activities",
      description: "1st place in User Experience Academy Compfest 2024",
      activityId: 3
    },
    {
      name: "UI/UX Competition Winner",
      href: "/#activities",
      icon: "Briefcase",
      keywords: ["ui", "ux", "competition", "winner", "champion", "vocational", "first place"],
      category: "Activities",
      description: "1st Winner UI/UX Competition Vocational Of Champions",
      activityId: 5
    },
    {
      name: "Smart IT Competition",
      href: "/#activities",
      icon: "Briefcase",
      keywords: ["smart it", "competition", "second place", "ui", "ux", "design", "runner up"],
      category: "Activities",
      description: "2nd Winner UI/UX Design at Smart IT Competition",
      activityId: 6
    },
    {
      name: "Telkomsigma Internship",
      href: "/#activities",
      icon: "Briefcase",
      keywords: ["telkomsigma", "internship", "frontend", "developer", "nuxt", "tailwind", "api"],
      category: "Activities",
      description: "Frontend Web Developer internship at Telkomsigma",
      activityId: 8
    },

    // Technologies & Tools
    {
      name: "React.js",
      href: "/#skills",
      icon: "Code",
      keywords: ["react", "reactjs", "javascript", "jsx", "hooks", "components", "frontend", "library"],
      category: "Technologies",
      description: "Modern JavaScript library for building user interfaces"
    },
    {
      name: "Next.js",
      href: "/#skills",
      icon: "Code",
      keywords: ["nextjs", "next", "react", "ssr", "ssg", "vercel", "framework", "fullstack"],
      category: "Technologies",
      description: "React framework for production-ready applications"
    },
    {
      name: "Vue.js",
      href: "/#skills",
      icon: "Code",
      keywords: ["vue", "vuejs", "javascript", "progressive", "framework", "frontend", "spa"],
      category: "Technologies",
      description: "Progressive JavaScript framework for building UIs"
    },
    {
      name: "TypeScript",
      href: "/#skills",
      icon: "Code",
      keywords: ["typescript", "ts", "javascript", "types", "static", "compiler", "superset"],
      category: "Technologies",
      description: "Typed superset of JavaScript for better development"
    },
    {
      name: "Tailwind CSS",
      href: "/#skills",
      icon: "Palette",
      keywords: ["tailwind", "css", "utility", "styling", "design", "responsive", "framework"],
      category: "Technologies",
      description: "Utility-first CSS framework for rapid UI development"
    },
    {
      name: "Laravel",
      href: "/#skills",
      icon: "Globe",
      keywords: ["laravel", "php", "backend", "framework", "mvc", "api", "database", "eloquent"],
      category: "Technologies",
      description: "PHP web application framework with elegant syntax"
    },
    {
      name: "Figma",
      href: "/#skills",
      icon: "Palette",
      keywords: ["figma", "design", "ui", "ux", "prototype", "wireframe", "collaboration", "tool"],
      category: "Technologies",
      description: "Collaborative interface design tool"
    },
    {
      name: "Git & GitHub",
      href: "/#skills",
      icon: "Code",
      keywords: ["git", "github", "version", "control", "repository", "collaboration", "devops"],
      category: "Technologies",
      description: "Version control and code collaboration platform"
    },
    {
      name: "MySQL",
      href: "/#skills",
      icon: "Globe",
      keywords: ["mysql", "database", "sql", "relational", "data", "backend", "storage"],
      category: "Technologies",
      description: "Relational database management system"
    },
    {
      name: "RESTful APIs",
      href: "/#skills",
      icon: "Globe",
      keywords: ["api", "rest", "restful", "http", "json", "backend", "integration", "endpoints"],
      category: "Technologies",
      description: "Architectural style for designing web services"
    },

    // Design & UI/UX
    {
      name: "User Interface Design",
      href: "/#skills",
      icon: "Palette",
      keywords: ["ui", "interface", "design", "visual", "layout", "components", "elements"],
      category: "Design",
      description: "Creating intuitive and visually appealing interfaces"
    },
    {
      name: "User Experience Design",
      href: "/#skills",
      icon: "Palette",
      keywords: ["ux", "experience", "usability", "research", "testing", "wireframe", "prototype"],
      category: "Design",
      description: "Designing user-centered digital experiences"
    },
    {
      name: "Responsive Design",
      href: "/#skills",
      icon: "Palette",
      keywords: ["responsive", "mobile", "desktop", "tablet", "breakpoints", "flexible", "adaptive"],
      category: "Design",
      description: "Creating designs that work across all devices"
    },
    {
      name: "Wireframing",
      href: "/#skills",
      icon: "Palette",
      keywords: ["wireframe", "sketch", "layout", "structure", "blueprint", "planning"],
      category: "Design",
      description: "Creating structural blueprints for digital products"
    },
    {
      name: "Prototyping",
      href: "/#skills",
      icon: "Palette",
      keywords: ["prototype", "interactive", "mockup", "testing", "validation", "framer"],
      category: "Design",
      description: "Building interactive prototypes for user testing"
    },

    // Development Practices
    {
      name: "Agile Development",
      href: "/#experience",
      icon: "Briefcase",
      keywords: ["agile", "scrum", "sprint", "methodology", "development", "process", "team"],
      category: "Practices",
      description: "Iterative development methodology for software projects"
    },
    {
      name: "Test-Driven Development",
      href: "/#skills",
      icon: "Code",
      keywords: ["tdd", "testing", "unit", "integration", "quality", "reliability", "automation"],
      category: "Practices",
      description: "Development approach emphasizing test-first programming"
    },
    {
      name: "Code Review",
      href: "/#skills",
      icon: "Code",
      keywords: ["review", "code", "quality", "collaboration", "feedback", "best practices"],
      category: "Practices",
      description: "Systematic examination of code for quality and standards"
    },
    {
      name: "Performance Optimization",
      href: "/#skills",
      icon: "Code",
      keywords: ["performance", "optimization", "speed", "loading", "efficiency", "metrics"],
      category: "Practices",
      description: "Improving application speed and efficiency"
    },

    // Certifications & Education
    {
      name: "BNSP Certification",
      href: "/#about",
      icon: "Briefcase",
      keywords: ["bnsp", "certification", "certified", "web developer", "indonesia", "professional"],
      category: "Certifications",
      description: "Certified Web Developer by BNSP Indonesia"
    },
    {
      name: "IPB University",
      href: "/#about",
      icon: "User",
      keywords: ["ipb", "university", "bogor", "education", "student", "academic", "learning"],
      category: "Education",
      description: "Studying at IPB University"
    },
    
    // Contact & Services
    {
      name: "Contact Information",
      href: "/#contact",
      icon: "User",
      keywords: ["contact", "email", "phone", "hire", "collaborate", "work together", "get in touch"],
      category: "Contact",
      description: "Get in touch for collaboration"
    },
    {
      name: "Specialist Services",
      href: "/#services",
      icon: "Code",
      keywords: ["services", "hire", "freelance", "consulting", "development", "design", "specialist"],
      category: "Services",
      description: "Professional development and design services"
    }
  ]

  // Filter suggestions based on search query - show all when empty, filter when typing
  const filteredSuggestions = searchQuery 
    ? searchData.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchData

  // Reset selected index when search query changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [searchQuery])

  // Scroll to section function with specific content highlighting
  const scrollToSection = (href: string, activityId?: number) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2) // Remove '/#' to get section id
      // Small delay to ensure modal is closed before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
          
          // If it's activities section and we have specific activity, trigger custom event
          if (sectionId === 'activities' && activityId) {
            // Dispatch custom event to activity gallery to show specific content
            window.dispatchEvent(new CustomEvent('showSpecificActivity', { 
              detail: { activityId: activityId } 
            }))
          }
        }
      }, 100)
    } else {
      // For full page navigation
      window.location.href = href
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isSearchOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        )
        break
      case 'Enter':
        e.preventDefault()
        if (filteredSuggestions[selectedIndex]) {
          const item = filteredSuggestions[selectedIndex]
          scrollToSection(item.href, (item as any).activityId)
          setIsSearchOpen(false)
        }
        break
      case 'Escape':
        setIsSearchOpen(false)
        break
    }
  }

  useEffect(() => {
    // Check initial scroll position
    setIsScrolled(window.scrollY > 10)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isSearchOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
  ]

  const getNavIcon = (href: string) => {
    switch (href) {
      case "/": return <Home className="h-4 w-4" />
      case "/portfolio": return <FolderOpen className="h-4 w-4" />
      case "/experience": return <Briefcase className="h-4 w-4" />
      case "/about": return <User className="h-4 w-4" />
      default: return <Home className="h-4 w-4" />
    }
  }

  return (
    <>
      {/* Desktop Header - Top */}
      <div className={cn(
        "hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out", 
        isScrolled 
          ? "py-4 px-4" 
          : "py-6 px-0"
      )}>
        <div className={cn("transition-all duration-500 ease-in-out", isScrolled ? "container mx-auto" : "w-full")}>
          <motion.header
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "transition-all duration-500 ease-in-out relative overflow-hidden",
              isScrolled 
                ? "rounded-3xl bg-white/70 dark:bg-black/70 backdrop-blur-3xl backdrop-saturate-150 shadow-2xl shadow-gray-200/20 dark:shadow-black/20 border border-white/20 dark:border-white/10" 
                : "rounded-none bg-white/5 dark:bg-black/5 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 dark:border-white/5"
            )}
            suppressHydrationWarning
          >
            <div className={cn(
              "transition-all duration-500 ease-in-out", 
              isScrolled 
                ? "px-8 py-4" 
                : "container mx-auto px-4 py-4"
            )}>
              {/* Desktop Navigation */}
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-all hover:scale-105">
                  Setiadyanwar<span className="text-orange-500">.</span>
                </Link>

                <div className="flex items-center space-x-8">
                  {/* Main Navigation */}
                  <nav className="flex items-center space-x-8">
                    {mainNavLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "transition-all relative py-2 px-1 text-sm font-medium",
                          pathname === link.href
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                        )}
                      >
                        {link.name}
                        {pathname === link.href && (
                          <motion.span
                            layoutId="underline"
                            className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                          />
                        )}
                      </Link>
                    ))}
                  </nav>

                  {/* Search and Theme Toggle */}
                  <div className="flex items-center space-x-4">
                    {/* Search Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(true)}
                      aria-label="Search"
                      className="h-10 w-10 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl backdrop-saturate-150 border border-gray-300/60 dark:border-gray-600/60 hover:bg-white dark:hover:bg-black transition-all shadow-lg shadow-gray-200/30 dark:shadow-black/30 text-gray-700 dark:text-gray-200"
                    >
                      <Search className="h-5 w-5" />
                    </Button>

                    {/* Theme Toggle */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      aria-label="Toggle theme"
                      className="h-10 w-10 rounded-2xl bg-white/90 dark:bg-black/90 backdrop-blur-xl backdrop-saturate-150 border border-gray-300/60 dark:border-gray-600/60 hover:bg-white dark:hover:bg-black transition-all shadow-lg shadow-gray-200/30 dark:shadow-black/30 text-gray-700 dark:text-gray-200"
                    >
                      {mounted && theme === "dark" ? (
                        <Sun className="h-5 w-5 text-amber-500" />
                      ) : mounted ? (
                        <Moon className="h-5 w-5 text-indigo-600" />
                      ) : (
                        <Moon className="h-5 w-5 text-indigo-600" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>
        </div>
      </div>

      {/* Mobile Header - Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <motion.header
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-3xl backdrop-saturate-150 border-t border-white/20 dark:border-white/10 shadow-2xl shadow-gray-200/20 dark:shadow-black/20"
          suppressHydrationWarning
        >
          <div className="px-4 py-3 safe-area-pb">
            {/* Mobile Bottom Navigation */}
            <div className="flex items-center justify-around">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all min-w-0",
                    pathname === link.href
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center transition-all",
                    pathname === link.href
                      ? "bg-indigo-600 text-white dark:bg-indigo-400 dark:text-gray-900"
                      : "bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400"
                  )}>
                    {getNavIcon(link.href)}
                  </div>
                  <span className="text-xs font-medium truncate">{link.name}</span>
                </Link>
              ))}
              
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all min-w-0"
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400">
                  <Search className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Search</span>
              </button>

              {/* Settings/More Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all min-w-0"
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-200/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-400">
                  <Menu className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">More</span>
              </button>
            </div>
            
            {/* Expandable Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200/20 dark:border-gray-700/20 mt-3 pt-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Settings</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                    className="h-8 w-8 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-300/50 dark:border-gray-600/50 hover:bg-white dark:hover:bg-black transition-all shadow-md"
                  >
                    {mounted && theme === "dark" ? (
                      <Sun className="h-4 w-4 text-amber-500" />
                    ) : mounted ? (
                      <Moon className="h-4 w-4 text-indigo-600" />
                    ) : (
                      <Moon className="h-4 w-4 text-indigo-600" />
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.header>
      </div>

      {/* Global Search Modal */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4"
          onClick={() => setIsSearchOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          
          {/* Search Modal - Minimalist */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/40 dark:border-gray-700/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input - Compact */}
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-10 pr-10 py-3 text-base bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Empty State - Show when no search query */}
            {!searchQuery && (
              <div className="border-t border-gray-200/40 dark:border-gray-700/40 p-6 text-center">
                <Search className="h-8 w-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Search anything on this website
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Try: "react", "typescript", "figma", "laravel", "agile", "bnsp", "performance"
                </p>
              </div>
            )}

            {/* Search Suggestions - Simple and Clean */}
            {searchQuery && filteredSuggestions.length > 0 && (
              <div className="border-t border-gray-200/40 dark:border-gray-700/40 max-h-96 overflow-y-auto">
                <div className="p-2">
                  {filteredSuggestions.map((item, index) => (
                    <button
                      key={`${item.href}-${index}`}
                      onClick={() => {
                        scrollToSection(item.href, (item as any).activityId)
                        setIsSearchOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-150 group text-left ${
                        index === selectedIndex 
                          ? 'bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40' 
                          : 'hover:bg-gray-100/60 dark:hover:bg-gray-800/40'
                      }`}
                    >
                      <div className={`${
                        index === selectedIndex 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                      }`}>
                        {getIcon(item.icon as string)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-medium ${
                          index === selectedIndex 
                            ? 'text-blue-900 dark:text-blue-100' 
                            : 'text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300'
                        }`}>
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {item.description}
                        </div>
                        {searchQuery && item.keywords.find(keyword => 
                          keyword.toLowerCase().includes(searchQuery.toLowerCase())
                        ) && (
                          <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            Matched: {item.keywords.find(keyword => 
                              keyword.toLowerCase().includes(searchQuery.toLowerCase())
                            )}
                          </div>
                        )}
                      </div>
                      {index === selectedIndex && (
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          Enter
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {searchQuery && filteredSuggestions.length === 0 && (
              <div className="border-t border-gray-200/40 dark:border-gray-700/40 p-6 text-center">
                <Search className="h-8 w-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Try searching for skills, activities, or navigation
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
