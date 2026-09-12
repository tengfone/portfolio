const SEO = {
  titleTemplate: '%s | Teng Fone',
  defaultTitle: 'Teng Fone | AI Platform Engineer',
  description:
    'Teng Fone — AI Platform Engineer based in Singapore. I build and lead production AI platforms: MLOps, LLM infrastructure, model serving, and developer platforms.',
  canonical: 'https://tengfone.dev/',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://tengfone.dev/',
    site_name: 'Teng Fone',
    title: 'Teng Fone | AI Platform Engineer',
    description:
      'Teng Fone — AI Platform Engineer based in Singapore. I build and lead production AI platforms: MLOps, LLM infrastructure, model serving, and developer platforms.',
    images: [
      {
        url: 'https://tengfone.dev/profilepic.jpg',
        width: 800,
        height: 600,
        alt: 'Teng Fone — AI Platform Engineer',
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
        'Teng Fone, AI Platform Engineer, MLOps, LLM Infrastructure, Model Serving, Developer Platforms, Kubernetes, GovTech Singapore, Portfolio, Machine Learning',
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
