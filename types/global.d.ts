declare module "swagger-ui-react" {
  import type { ComponentType, CSSProperties } from "react"

  export interface SwaggerUIProps {
    spec?: Record<string, unknown>
    url?: string
    docExpansion?: string
    defaultModelsExpandDepth?: number
    style?: CSSProperties
    [key: string]: unknown
  }

  const SwaggerUI: ComponentType<SwaggerUIProps>
  export default SwaggerUI
}

declare module "js-yaml" {
  export function load(
    str: string,
    options?: {
      json?: boolean
      schema?: unknown
      onWarning?: (warning: Error) => void
    },
  ): unknown
}

