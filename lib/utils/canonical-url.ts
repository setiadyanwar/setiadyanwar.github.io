import { siteConfig } from '../config/site-config'

export function getCanonicalUrl(pathname?: string): string {
  const cleanPath = pathname?.replace(/\/$/, '') || ''
  return `${siteConfig.url}${cleanPath}`
}