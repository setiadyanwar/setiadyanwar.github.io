"use client"

import dynamic from "next/dynamic"
import type { SwaggerUIProps } from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const SwaggerUI = dynamic<SwaggerUIProps>(() => import("swagger-ui-react"), { ssr: false })

interface SwaggerViewerProps {
  spec: Record<string, unknown>
  height?: number
}

export default function SwaggerViewer({ spec, height = 900 }: SwaggerViewerProps) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden">
      <SwaggerUI spec={spec} docExpansion="none" defaultModelsExpandDepth={1} style={{ maxHeight: height }} />
    </div>
  )
}

