export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Setiady Ibrahim Anwar',
  alternateName: 'Setiadyanwar',
  description: 'BNSP-Certified Frontend Developer & UI/UX Designer with 2+ years experience. Founder of Kreavoks Digital Agency.',
  url: 'https://setiadyanwar.github.io',
  image: 'https://setiadyanwar.github.io/og-cover-2026.png',
  sameAs: [
    'https://github.com/setiadyanwar',
    'https://linkedin.com/in/setiadyanwar',
    'https://instagram.com/setiadyanwarr',
  ],
  jobTitle: 'Frontend Developer & UI/UX Designer',
  worksFor: {
    '@type': 'Organization',
    name: 'Kreavoks Digital Agency',
    url: 'https://setiadyanwar.github.io',
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
  email: 'setiadyanwar@gmail.com',
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
  name: 'Setiady Ibrahim Anwar Portfolio',
  description: 'Professional portfolio of Setiady Ibrahim Anwar - Frontend Developer & UI/UX Designer',
  url: 'https://setiadyanwar.github.io',
  author: {
    '@type': 'Person',
    name: 'Setiady Ibrahim Anwar',
  },
  inLanguage: 'id',
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    '@type': 'Person',
    name: 'Setiady Ibrahim Anwar',
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