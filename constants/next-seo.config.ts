const SEO = {
  titleTemplate: '%s | Teng Fone',
  defaultTitle: 'Teng Fone | AI & Data Engineer',
  description:
    'Teng Fone — AI Platform and Data Engineer based in Singapore. Building MLOps systems, LLM infrastructure, and full-stack products.',
  canonical: 'https://tengfone.dev/',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://tengfone.dev/',
    site_name: 'Teng Fone',
    title: 'Teng Fone | AI & Data Engineer',
    description:
      'Teng Fone — AI Platform and Data Engineer based in Singapore. Building MLOps systems, LLM infrastructure, and full-stack products.',
    images: [
      {
        url: 'https://tengfone.dev/profilepic.jpg',
        width: 800,
        height: 600,
        alt: 'Teng Fone — AI & Data Engineer',
      },
    ],
  },
  twitter: {
    handle: '@tengfone',
    site: '@tengfone',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Teng Fone',
    },
    {
      name: 'keywords',
      content:
        'Teng Fone, AI Engineer, Data Engineer, MLOps, LLM, GovTech Singapore, Portfolio, Full Stack, Machine Learning',
    },
    {
      name: 'theme-color',
      content: '#10b981',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'canonical',
      href: 'https://tengfone.dev/',
    },
  ],
};

export default SEO;
