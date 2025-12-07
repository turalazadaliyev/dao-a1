export const SEO = {
  title: 'Quadratic Funding DAO - Decentralized Public Good Funding',
  description: 'Match community donations to public-good proposals via quadratic funding rounds. Support innovation with democratic resource allocation.',
  url: 'https://quadratic-funding-dao.xyz',
  image: 'https://quadratic-funding-dao.xyz/og-image.png',
  keywords: 'quadratic funding, DAO, public goods, funding, decentralized',
  author: 'Quadratic Funding DAO',
  locale: 'en_US',
}

export const generateMetadata = (overrides?: Partial<typeof SEO>) => {
  const meta = { ...SEO, ...overrides }
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    openGraph: {
      type: 'website',
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [{ url: meta.image, width: 1200, height: 630 }],
      locale: meta.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.image],
      creator: '@quadraticfundingdao',
    },
  }
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Quadratic Funding DAO',
  url: SEO.url,
  logo: 'https://quadratic-funding-dao.xyz/logo.png',
  description: SEO.description,
  sameAs: [
    'https://twitter.com/quadraticfundingdao',
    'https://discord.gg/quadraticfunding',
  ],
}
