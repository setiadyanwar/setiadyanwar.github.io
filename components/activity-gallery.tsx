"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

interface Activity {
  id: number
  title: string
  description: string
  image: string
  date: string
}

export default function ActivityGallery() {
  const [activities] = useState<Activity[]>([
    {
      id: 1,
      title: "GDGOC IPB University Core team 2025",
      description: "Spearheaded event planning and community outreach for Google Developer Group on Campus, co-organizing meetups, hackathons, and peer-learning sessions on no-code prototyping and UI/UX best practices, driving a 30% increase in active membership.",
      image: "/activity/gdgoc.jpg?height=300&width=500",
      date: "May 2025",
    },
      {
        id: 2,
        title: "Lead Company Visit Himavo MicroIT",
        description: "I am delighted to have succeeded in becoming the chief organizer of the Company Visit event at Himavo Micro IT which included 75 participants who took part and collaborated with PT Elang Mahkota Teknologi and Indosat Ooredoo Hutchison.",
        image: "/activity/comvis-2.jpeg?height=300&width=500",
        date: "July 2024",
      },
    {
      id: 3,
      title: "User Experience Academy Compfest 2024",
      description: "Participated in a 48-hour design sprint, collaborating with cross-disciplinary teams to craft user-centered solutions for live briefs. Deliverables included wireframes and high-fidelity mockups that secured first place among competing teams.",
      image: "/activity/compfest.jpeg?height=300&width=500",
      date: "September 2024",
    },
    {
      id: 4,
      title: "Mentor UI/UX design at Himavo MicroIT",
      description: "Led an interactive workshop covering modern web development fundamentals, from user research techniques to rapid prototyping in Figma. Guided participants through hands-on exercises on wireframing, visual hierarchy, and design thinking, resulting in functional prototypes by session end.",
      image: "/activity/micro.jpg?height=300&width=500",
      date: "March 2023",
    },
    
    {
      id: 5,
      title: "1st Winner UI/UX Competition Vocational Of Champions.",
      description: "Awarded first place in the UI/UX Competition “Vocational Of Champions.”",
      image: "/activity/voc.jpg?height=300&width=500",
      date: "November 2024",
    },
    {
     id: 6,
      title: "2nd Winner UI/UX Design at Smart IT Competition",
      description: "Awarded second place in the UI/UX track of the Smart IT Competition.",
      image: "/activity/sic.jpeg?height=300&width=500",
      date: "Augustus 2024", 
    },
    {
     id: 7,
      title: "Mentor UI/UX design at SMKN 4 Bogor",
      description: "Led hands-on UI/UX design workshops for vocational high school students at SMKN 4 Bogor, covering user research, wireframing, and interactive prototyping using Figma.",
      image: "/activity/mte.jpeg?height=300&width=500",
      date: "Mei 2024", 
    },
    {
      id: 8,
      title: "Internship Telkomsigma — Frontend Web Developer",
      description:
        "Contributed to frontend development using Nuxt JS and Tailwind CSS, implemented responsive UI components, optimized rendering performance, and collaborated with backend teams to integrate RESTful APIs.",
      image: "/activity/telkomsigma.jpg?height=300&width=500",
      date: "Juni 2025",
    },
  ])

  return (
    <section id="activities" className="py-16">
      <TwoColumnShowcase activities={activities} />
    </section>
  )
}

function TwoColumnShowcase({ activities }: { activities: Activity[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [highlightIndex, setHighlightIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Create infinite scroll by duplicating activities
  const infiniteActivities = [...activities, ...activities, ...activities]
  const startIndex = activities.length

  // Cycle highlight on the left and sync details on the right
  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIndex((prev) => {
        const next = (prev + 1) % activities.length
        setCurrentIndex(next)
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [activities.length])

  // Listen for specific activity selection from search
  useEffect(() => {
    const handleShowSpecificActivity = (event: CustomEvent) => {
      const { activityId } = event.detail
      if (activityId) {
        // Find the activity by ID and set it as current
        const activityIndex = activities.findIndex(activity => activity.id === activityId)
        if (activityIndex !== -1) {
          setCurrentIndex(activityIndex)
          setHighlightIndex(activityIndex)
        }
      }
    }

    window.addEventListener('showSpecificActivity', handleShowSpecificActivity as EventListener)
    return () => {
      window.removeEventListener('showSpecificActivity', handleShowSpecificActivity as EventListener)
    }
  }, [activities])

  // Track viewport to disable mask on mobile
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      // MediaQueryListEvent for modern, MediaQueryList for initial
      const matches = 'matches' in e ? e.matches : (e as MediaQueryList).matches
      setIsMobile(matches)
    }
    onChange(mq)
    mq.addEventListener?.('change', onChange as (ev: Event) => void)
    return () => mq.removeEventListener?.('change', onChange as (ev: Event) => void)
  }, [])

  // Auto-scroll to center the active item with infinite scroll
  useEffect(() => {
    if (scrollRef.current && !isScrolling) {
      const container = scrollRef.current
      const actualIndex = startIndex + currentIndex
      const target = container.children[actualIndex] as HTMLElement | undefined
      const containerWidth = container.clientWidth
      if (target) {
        const targetCenter = target.offsetLeft + target.offsetWidth / 2
        const nextScroll = Math.max(0, targetCenter - containerWidth / 2)
        container.scrollTo({ left: nextScroll, behavior: 'smooth' })
      }
    }
  }, [currentIndex, startIndex, isScrolling])

  // Reset scroll position when reaching boundaries
  const handleScroll = () => {
    if (!scrollRef.current) return
    
    const container = scrollRef.current
    const itemWidth = 320 + 16
    const scrollLeft = container.scrollLeft
    const containerWidth = container.clientWidth
    const totalWidth = container.scrollWidth
    
    // If scrolled to the beginning, jump to middle section
    if (scrollLeft < itemWidth) {
      container.scrollLeft = startIndex * itemWidth
    }
    // If scrolled to the end, jump to middle section
    else if (scrollLeft > (totalWidth - containerWidth - itemWidth)) {
      container.scrollLeft = startIndex * itemWidth
    }
  }

  const current = activities[currentIndex]

  // Choose a compact subset for the collage if too many
  const collageItems = activities.slice(0, Math.min(6, activities.length))

  // Derive mood from current title keywords
  const titleLower = current.title.toLowerCase()
  const isCompetition = /winner|competition|champion|juara/.test(titleLower)
  const isInternship = /internship|intern|magang/.test(titleLower)

  const gradientClass = isCompetition
    ? "from-amber-400/25 via-yellow-300/15 to-white/0 dark:to-transparent"
    : isInternship
      ? "from-rose-500/25 via-rose-300/15 to-white/0 dark:to-transparent"
      : "from-sky-400/25 via-sky-300/15 to-white/0 dark:to-transparent" // Default sky blue for all others

  // Edge fades: plain white to transparent
  const fadeLeftClass = "bg-gradient-to-r from-white to-transparent"
  const fadeRightClass = "bg-gradient-to-l from-white to-transparent"

  // Mask styles disabled on mobile
  const maskStyles = ((): React.CSSProperties => {
    const common = { WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat' } as React.CSSProperties
    if (isMobile) {
      return {
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)',
        ...common,
      }
    }
    return {
      WebkitMaskImage:
        'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      maskImage:
        'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      ...common,
    }
  })()

  return (
    <div className="relative">
      {/* Full-bleed dynamic background spanning the viewport width */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 right-0 w-full -z-10 bg-gradient-to-b ${gradientClass}`} />
      
      <div className="container mx-auto px-4 py-16">
        {/* Section header inside gradient area */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">Activities</h2>
          <p className="mt-2 text-sm text-gray-700/80 dark:text-gray-300/80">Gallery on the left, details rotate on the right</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
      {/* Left: YouTube-style horizontal carousel with fade edges */}
        <div className="relative">
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 py-3 px-2 md:px-4" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', ...maskStyles }}
          onScroll={handleScroll}
        >
          {infiniteActivities.map((item, idx) => {
            const actualIndex = idx % activities.length
            const isActive = actualIndex === currentIndex && idx >= startIndex && idx < startIndex + activities.length
            
            return (
              <div
                key={`${item.id}-${idx}`}
                className={`flex-shrink-0 w-72 md:w-80 cursor-pointer transition-transform duration-300 my-1 ${
                  isActive
                    ? 'md:scale-[1.03]'
                    : 'hover:md:scale-[1.02]'
                }`}
                onClick={() => {
                  setCurrentIndex(actualIndex)
                  setHighlightIndex(actualIndex)
                }}
              >
              <div className="relative rounded-xl md:rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-all duration-300 ${
                    isActive ? 'h-48 md:h-52 grayscale-0' : 'h-44 md:h-48 grayscale hover:grayscale-0'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-semibold line-clamp-2 mb-1">{item.title}</h3>
                  <p className="text-xs opacity-90">{item.date}</p>
                </div>
                {isActive && (
                  <div className="absolute inset-0 ring-2 ring-indigo-500 rounded-lg" />
                )}
                        </div>
                        </div>
            );
          })}
                    </div>

        {/* Scroll indicators */}
        <div className="flex justify-center mt-2 space-x-1">
          {Array.from({ length: Math.ceil(activities.length / 3) }).map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 3) === idx ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        </div>
 
        {/* Right: Text-only details synced with highlight */}
        <div className="relative">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-transparent backdrop-blur-sm p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {current.date}
              </span>
            </div>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              {current.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose">
              {current.description}
            </p>
 
            <div className="mt-6 h-px bg-gradient-to-r from-gray-200/80 to-transparent dark:from-gray-800" />
            {/* Pagination removed for minimal design */}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
