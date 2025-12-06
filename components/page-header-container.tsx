"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface PageHeaderContainerProps {
  children: React.ReactNode
}

export default function PageHeaderContainer({ children }: PageHeaderContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    // Initial dimensions
    updateDimensions()

    // Update dimensions on resize
    window.addEventListener("resize", updateDimensions)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    containerRef.current.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative mt-8 bg-[#fafafa] dark:bg-gray-900 rounded-xl overflow-hidden p-2 mb-8 border border-gray-100 dark:border-gray-800"
    >
      {/* Cursor-following gradient */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 opacity-70 dark:opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0) 70%)",
          width: "40%",
          height: "40%",
          borderRadius: "50%",
          left: `${mousePosition.x - dimensions.width * 0.2}px`,
          top: `${mousePosition.y - dimensions.height * 0.2}px`,
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
