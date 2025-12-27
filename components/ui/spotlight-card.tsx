"use client"

import React, { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string
  children: React.ReactNode
  variant?: "default" | "inverted"
}

export function SpotlightCard({
  className,
  children,
  spotlightColor = "99, 102, 241", // Default indigo
  variant = "default",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!divRef.current || variant !== "inverted") return

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    observer.observe(divRef.current)
    return () => observer.disconnect()
  }, [variant])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  // Generate Path for Inverted Variant (Top Right step-down notch)
  const notchWidth = 130
  const notchHeight = 70
  const radius = 24 // Card Border Radius
  const smallRadius = 16 // Notch Corner Radius
  const { width, height } = dimensions

  // Only render path if we have dimensions
  const hasDimensions = width > 0 && height > 0

  /* 
   Path explanation:
   Start at Top-Left (Radius, 0)
   Line to Start of Notch (W - NotchWidth - SmallRadius, 0)
   Arc Down (SmallRadius) to (W - NotchWidth, SmallRadius)
   Line Down to (W - NotchWidth, NotchHeight - SmallRadius)
   Arc Right (SmallRadius) to (W - NotchWidth + SmallRadius, NotchHeight)
   Line Right to (W - Radius, NotchHeight) -> Actually go to (W, NotchHeight + Radius)? NO, we go to right edge.
   The right edge is at X=W.
   So from (W - NotchWidth + SmallRadius, NotchHeight) we go to (W - Radius, NotchHeight)
   Then Arc down to (W, NotchHeight + Radius)
  */

  const path = hasDimensions ? `
    M ${radius} 0
    L ${width - notchWidth - smallRadius} 0
    A ${smallRadius} ${smallRadius} 0 0 1 ${width - notchWidth} ${smallRadius}
    L ${width - notchWidth} ${notchHeight - smallRadius}
    A ${smallRadius} ${smallRadius} 0 0 0 ${width - notchWidth + smallRadius} ${notchHeight}
    L ${width - radius} ${notchHeight}
    A ${radius} ${radius} 0 0 1 ${width} ${notchHeight + radius}
    L ${width} ${height - radius}
    A ${radius} ${radius} 0 0 1 ${width - radius} ${height}
    L ${radius} ${height}
    A ${radius} ${radius} 0 0 1 0 ${height - radius}
    L 0 ${radius}
    A ${radius} ${radius} 0 0 1 ${radius} 0
    Z
  ` : ""

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative group",
        variant === "default" && cn("rounded-2xl border border-gray-200/50 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm overflow-hidden", className)
      )}
      style={undefined}
      {...props}
    >
      {/* Content wrapper with clip-path for inverted variant */}
      <div
        className={cn(
          "relative h-full transition-all duration-300",
          variant === "inverted" && cn("bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm", className)
        )}
        style={variant === "inverted" ? {
          clipPath: `path('${path.replace(/\s+/g, ' ').trim()}')`
        } : undefined}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${spotlightColor}, 0.15), transparent 40%)`,
          }}
        />
        {children}
      </div>

      {/* SVG Border Overlay for Inverted Variant */}
      {variant === "inverted" && hasDimensions && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none text-gray-200/50 dark:text-gray-800/50"
        >
          <path
            d={path}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      )}
    </div>
  )
}
