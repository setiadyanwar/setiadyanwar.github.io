import { siteConfig } from './site-config'

export function getCanonicalUrl(pathname?: string): string {
  const cleanPath = pathname?.replace(/\/$/, '') || ''
  return `${siteConfig.url}${cleanPath}`
}