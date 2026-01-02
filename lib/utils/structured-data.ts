import { siteConfig } from "@/lib/config/site-config"

// Helper to ensure absolute image URL
const ogImageUrl = new URL(siteConfig.ogImage, siteConfig.url).toString()

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.author,
  alternateName: 'Setiadyanwar',
  description: siteConfig.description,
  url: siteConfig.url,
  image: ogImageUrl,
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
  ],
  jobTitle: 'Frontend Developer & UI/UX Designer',
  worksFor: {
    '@type': 'Organization',
    name: 'Kreavoks Digital Agency',
    url: siteConfig.url,
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Institut Pertanian Bogor',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tangerang',
    addressCountry: 'Indonesia',
  },
  email: siteConfig.email,
  knowsAbout: [
    'Frontend Development',
    'UI/UX Design',
    'React.js',
    'Next.js',
    'Vue.js',
    'Laravel',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Web Development',
    'Digital Agency Management'
  ],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  author: {
    '@type': 'Person',
    name: siteConfig.author,
  },
  inLanguage: 'id',
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    '@type': 'Person',
    name: siteConfig.author,
  },
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kreavoks Digital Agency',
  description: 'Digital agency specializing in web development and UI/UX design',
  founder: {
    '@type': 'Person',
    name: 'Setiady Ibrahim Anwar',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tangerang',
    addressCountry: 'Indonesia',
  },
  sameAs: [
    'https://setiadyanwar.github.io',
  ],
}