"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useMobile } from "../hooks/use-mobile"

export default function SkillsShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isMobile = useMobile()
  const [isLoaded, setIsLoaded] = useState(false)

  // Skills to display - arranged for 4 on each side vertically
  const skills = [
    // Left side skills
    { name: "React", icon: "/tech/react.svg", x: 0.15, y: 0.18, size: 1.2 },
    { name: "Next.js", icon: "/tech/next-js.svg", x: 0.15, y: 0.4, size: 1 },
    { name: "Vue", icon: "/tech/vue.svg", x: 0.15, y: 0.65, size: 0.9 },
    { name: "Laravel", icon: "/tech/laravel.svg", x: 0.15, y: 1, size: 0.9 },

    // Right side skills
    { name: "JavaScript", icon: "/tech/javascript.svg", x: 0.85, y: 0.18, size: 1 },
      { name: "TypeScript", icon: "/tech/typescript.svg", x: 0.85, y: 0.4, size: 1 },
      { name: "Flutter", icon: "/tech/flutter.svg", x: 0.85, y: 0.65, size: 0.8 },
      { name: "Tailwind", icon: "/tech/tailwind.svg", x: 0.85, y: 1, size: 0.9 }
  ]

  // Adjust positions for mobile
  const getResponsivePosition = (skill: (typeof skills)[0]) => {
    if (isMobile) {
      const mobilePositions: Record<string, { x: number; y: number }> = {
        React: { x: 0.2, y: 0.3 },
        "Next.js": { x: 0.7, y: 0.3 },
        JavaScript: { x: 0.2, y: 0.7 },
        TypeScript: { x: 0.7, y: 0.7 },
        Vue: { x: 0.1, y: 0.5 },
        Laravel: { x: 0.28, y: 0.94 },
        Flutter: { x: 0.54, y: 0.94 },
        Tailwind: { x: 0.8, y: 0.5 },
      }
  
      return mobilePositions[skill.name] || { x: skill.x, y: skill.y }
    }
  
    return { x: skill.x, y: skill.y }
  }

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    // Initial setup
    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Load images
    const images = skills.map((skill) => {
      const img = new Image()
      img.src = skill.icon
      img.crossOrigin = "anonymous"
      return { ...skill, img }
    })

    // Wait for images to load
    Promise.all(
      images.map(
        (img) =>
          new Promise((resolve) => {
            img.img.onload = resolve
          }),
      ),
    ).then(() => {
      setIsLoaded(true)
    })

    // Animation variables
    let animationFrame: number
    let time = 0
    const lightSpeed = 0.5
    const lightLength = 0.2
    const isDark = theme === "dark"

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw center text
      ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
      ctx.font = "bold 80px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Skills", canvas.width / 2, canvas.height / 2 - 5)

      const centerX = canvas.width / 2 - 20
      const centerY = canvas.height / 2

      // Draw connections with animated light effect
      images.forEach((skill) => {
        const pos = getResponsivePosition(skill)
        const x = pos.x * canvas.width
        const y = pos.y * canvas.height

        // Draw base line
        ctx.beginPath()
        ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
        ctx.lineWidth = 1
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()

        // Calculate light position
        const dx = x - centerX
        const dy = y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Normalize direction
        const nx = dx / distance
        const ny = dy / distance

        // Calculate light position based on time
        const lightPos = (time * lightSpeed) % 1

        // Draw light effect
        const gradient = ctx.createLinearGradient(centerX, centerY, x, y)

        // Create gradient for light effect
        const lightColor = isDark ? "rgba(94, 107, 246, 0.8)" : "rgba(94, 107, 246, 0.6)"
        const transparentColor = "rgba(94, 107, 246, 0)"

        gradient.addColorStop(Math.max(0, lightPos - lightLength), transparentColor)
        gradient.addColorStop(lightPos, lightColor)
        gradient.addColorStop(Math.min(1, lightPos + lightLength), transparentColor)

        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
      })

      time += 0.01
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [theme, isMobile])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-indigo dark:bg-indigo-light mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-800">
          <canvas ref={canvasRef} className="absolute inset-0"></canvas>

          {/* Skill icons */}
          {skills.map((skill, index) => {
            const pos = isMobile ? getResponsivePosition(skill) : { x: skill.x, y: skill.y }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute"
                style={{
                  left: `${pos.x * 95}%`,
                  top: `${pos.y * 85}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 shadow-lg p-2 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 md:w-12 md:h-12"
                    style={{ transform: `scale(${skill.size})` }}
                  />
                </motion.div>
                {/* <div className="text-center mt-2 text-gray-800 dark:text-gray-200 text-xs md:text-sm font-medium">
                  {skill.name}
                </div> */}
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild className="bg-indigo-500 hover:bg-indigo-dark">
            <Link href="/about#skills" className=" text-white inline-flex items-center">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
