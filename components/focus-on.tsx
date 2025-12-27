"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Palette, Globe, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getPortfolioItems } from "@/lib/supabase/data"
import { SpotlightCard } from "@/components/ui/spotlight-card"

interface PortfolioItem {
  id: string
  title: string
  category: string
  image: string
}

interface ServiceProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  category: string
  portfolioItems: PortfolioItem[]
}

const ServiceCard = ({ title, description, icon, color, category, portfolioItems, spotlightColor }: ServiceProps & { spotlightColor: string }) => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  // Take first 3 items for the animation
  const previewItems = portfolioItems.slice(0, 3)

  const handleCardClick = () => {
    router.push(`/portfolio?filter=${category}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Portfolio Items "Popping Out" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-40">
        <AnimatePresence>
          {isHovered && previewItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ y: 60, opacity: 0, scale: 0.8 }}
              animate={{
                y: idx === 1 ? -110 : -90,
                x: idx === 0 ? -70 : idx === 2 ? 70 : 0,
                scale: idx === 1 ? 1.05 : 0.9,
                rotate: idx === 0 ? -12 : idx === 2 ? 12 : 0,
                opacity: 1,
              }}
              exit={{ y: 60, opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: idx * 0.05
              }}
              className="absolute w-32 h-44 rounded-xl overflow-hidden shadow-2xl border border-white/20 z-[60]"
            >
              <Image
                src={item.image || "/placeholder.jpg"}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Main Card (SpotlightCard) */}
      <SpotlightCard
        variant="inverted"
        spotlightColor={spotlightColor}
        className="p-8 md:p-10 hover:drop-shadow-xl transition-all duration-500 relative z-[70]"
      >
        <div className="relative z-10">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 mb-6 group-hover:scale-110 transition-all duration-300 ${color}`}>
            {icon}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-4 transition-all duration-300">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

export default function FocusOn() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPortfolioItems()
      setPortfolioItems(data as PortfolioItem[])
      setLoading(false)
    }
    fetchData()
  }, [])

  const services = [
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces designed with precision, focusing on user experience and accessibility.",
      icon: <Palette className="w-6 h-6" />,
      color: "text-orange-600 dark:text-orange-400",
      spotlightColor: "249, 115, 22", // orange-500
      category: "ui"
    },
    {
      title: "Frontend Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      icon: <Code className="w-6 h-6" />,
      color: "text-blue-600 dark:text-blue-400",
      spotlightColor: "59, 130, 246", // blue-500
      category: "web"
    },
    {
      title: "Web Development",
      description: "End-to-end digital solutions crafted with creativity and technical excellence.",
      icon: <Globe className="w-6 h-6" />,
      color: "text-gray-600 dark:text-gray-400",
      spotlightColor: "99, 102, 241", // indigo-500
      category: "all"
    }
  ]

  if (loading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-24 md:py-32 overflow-visible">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 md:mb-32"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Specialist Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Professional solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const filtered = portfolioItems.filter(item =>
              service.category === 'all' ? true : item.category === service.category
            )
            return (
              <ServiceCard
                key={index}
                {...service}
                portfolioItems={filtered}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
