"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useMobile } from "../hooks/use-mobile"

export default function SkillsShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const isMobile = useMobile()
  const [isLoaded, setIsLoaded] = useState(false)

  // Skills configuration
  const skills = [
    // Left side (Desktop)
    { name: "React", icon: "/tech/react.svg", x: 0.15, y: 0.2, size: 1.2 },
    { name: "Next.js", icon: "/tech/next-js.svg", x: 0.15, y: 0.43, size: 1 },
    { name: "Vue", icon: "/tech/vue.svg", x: 0.15, y: 0.66, size: 0.9 },
    { name: "Laravel", icon: "/tech/laravel.svg", x: 0.15, y: 0.85, size: 0.9 },

    // Right side (Desktop)
    { name: "JavaScript", icon: "/tech/javascript.svg", x: 0.85, y: 0.2, size: 1 },
    { name: "TypeScript", icon: "/tech/typescript.svg", x: 0.85, y: 0.43, size: 1 },
    { name: "Flutter", icon: "/tech/flutter.svg", x: 0.85, y: 0.66, size: 0.8 },
    { name: "Tailwind", icon: "/tech/tailwind.svg", x: 0.85, y: 0.85, size: 0.9 }
  ]

  // Balanced Mobile Layout
  const getResponsivePosition = (skill: (typeof skills)[0]) => {
    if (isMobile) {
      const mobileGrid: Record<string, { x: number; y: number }> = {
        "React": { x: 0.2, y: 0.2 },
        "Next.js": { x: 0.8, y: 0.2 },
        "JavaScript": { x: 0.2, y: 0.44 },
        "TypeScript": { x: 0.8, y: 0.44 },
        "Vue": { x: 0.2, y: 0.68 },
        "Flutter": { x: 0.8, y: 0.68 },
        "Laravel": { x: 0.2, y: 0.88 },
        "Tailwind": { x: 0.8, y: 0.88 },
      }
      return mobileGrid[skill.name] || { x: skill.x, y: skill.y }
    }
    return { x: skill.x, y: skill.y }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = window.devicePixelRatio || 1
      const width = parent.clientWidth
      const height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    const images = skills.map((skill) => {
      const img = new Image()
      img.src = skill.icon
      img.crossOrigin = "anonymous"
      return { ...skill, img }
    })

    Promise.all(images.map((img) => new Promise((resolve) => { img.img.onload = resolve; }))).then(() => {
      setIsLoaded(true)
    })

    let animationFrame: number
    let time = 0
    const lightSpeed = 0.5
    const lightLength = 0.25
    const isDark = theme === "dark"

    const animate = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const width = parent.clientWidth
      const height = parent.clientHeight
      ctx.clearRect(0, 0, width, height)
      const centerX = width / 2
      const centerY = height / 2

      ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
      ctx.font = "bold 70px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Skills", centerX, centerY)

      images.forEach((skill) => {
        const pos = getResponsivePosition(skill)
        const x = pos.x * width
        const y = pos.y * height
        ctx.beginPath()
        ctx.strokeStyle = isDark ? "rgba(99, 102, 241, 0.08)" : "rgba(99, 102, 241, 0.05)"
        ctx.lineWidth = 1
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()

        const progress = (time * lightSpeed) % 1
        const grad = ctx.createLinearGradient(centerX, centerY, x, y)
        const pulseColor = isDark ? "rgba(99, 102, 241, 0.6)" : "rgba(79, 70, 229, 0.4)"
        const clearColor = "rgba(99, 102, 241, 0)"
        grad.addColorStop(Math.max(0, progress - lightLength), clearColor)
        grad.addColorStop(progress, pulseColor)
        grad.addColorStop(Math.min(1, progress + lightLength), clearColor)
        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
      })
      time += 0.015
      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [theme, isMobile])

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Technologies I Use</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The frameworks, tools, and languages I frequently work with to build powerful digital experiences.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px] bg-gray-100 dark:bg-gray-900 rounded-xl mb-8 border border-gray-200 dark:border-gray-800">
          <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none"></canvas>
          {skills.map((skill, index) => {
            const pos = getResponsivePosition(skill)
            return (
              <div key={index} className="absolute z-10 select-none" style={{ left: `${pos.x * 100}%`, top: `${pos.y * 100}%`, transform: "translate(-50%, -50%)" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.08 }}
                  className="bg-white dark:bg-gray-800 shadow-lg p-2 rounded-2xl flex items-center justify-center cursor-default"
                  whileHover={{ scale: 1.15 }}
                >
                  <img src={skill.icon} alt={skill.name} className={`w-10 h-10 md:w-12 md:h-12 ${skill.name === "Next.js" ? "dark:filter dark:invert" : ""}`} style={{ transform: `scale(${skill.size})` }} />
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
