"use client"

import { motion } from "framer-motion"
import { 
  User, 
  Code, 
  Users, 
  Award, 
  ImageIcon, 
  Briefcase, 
  MessageSquare, 
  Monitor 
} from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap = {
  User,
  Code,
  Users,
  Award,
  ImageIcon,
  Briefcase,
  MessageSquare,
  Monitor,
}

type IconName = keyof typeof iconMap

interface EnhancedSectionHeaderProps {
  title: string
  subtitle?: string
  iconName?: IconName
  emoji?: string
  align?: "left" | "center" | "right"
  className?: string
  iconClassName?: string
  animated?: boolean
}

export default function EnhancedSectionHeader({
  title,
  subtitle,
  iconName,
  emoji,
  align = "center",
  className,
  iconClassName,
  animated = true,
}: EnhancedSectionHeaderProps) {
  const Icon = iconName ? iconMap[iconName] : null
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  }

  return (
    <motion.div
      variants={animated ? containerVariants : undefined}
      initial={animated ? "hidden" : undefined}
      whileInView={animated ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("mb-12", alignmentClasses[align], className)}
    >
      <div className="relative mt-14">
        {/* Decorative elements */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/20 blur-3xl opacity-50 rounded-full"></div>

        <div className="flex flex-col items-center">
          {/* Icon or emoji */}
          {(Icon || emoji) && (
            <motion.div
              variants={animated ? iconVariants : undefined}
              animate={animated ? floatAnimation : undefined}
              className={cn("mb-4 relative", iconClassName)}
            >
              {Icon && (
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-500 dark:text-indigo-400 shadow-lg border border-gray-100 dark:border-gray-700">
                  <Icon className="w-8 h-8" />
                </div>
              )}
              {emoji && !Icon && <div className="text-4xl filter drop-shadow-md">{emoji}</div>}

              {/* Decorative circles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange-400 dark:bg-orange-500 animate-pulse"></div>
              <div
                className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-indigo-400 dark:bg-indigo-500 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </motion.div>
          )}

          {/* Title with animated underline */}
          <motion.div variants={animated ? itemVariants : undefined} className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
              {title}
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600 rounded-full"
                initial={animated ? { width: 0 } : undefined}
                whileInView={animated ? { width: "100%" } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h2>
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={animated ? itemVariants : undefined}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mt-4"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
