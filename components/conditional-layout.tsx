"use client"

import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface ConditionalLayoutProps {
  animatedCursor?: ReactNode
  header?: ReactNode
  footer?: ReactNode
  main?: ReactNode
}

export default function ConditionalLayout({
  animatedCursor,
  header,
  footer,
  main,
}: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith("/admin")

  // For admin routes, only render the main content (no header, footer)
  // But keep animated cursor for better UX
  if (isAdminRoute) {
    return (
      <div className="min-h-screen flex flex-col">
        {animatedCursor}
        {main}
      </div>
    )
  }

  // For normal routes, render with header and footer
  return (
    <div className="min-h-screen flex flex-col">
      {animatedCursor}
      {header}
      {main}
      {footer}
    </div>
  )
}

