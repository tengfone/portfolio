export const blogData = [
  {
    slug: 'agentic-mlops-review-flow-april-2026',
    title:
      'What Building an Agentic MLOps Review Flow in an Isolated Environment Taught Me',
    date: '2026-04-05',
    summary:
      'After building a ReAct-style model promotion review system for HDB resale price prediction, the hardest part was not adding the agent — it was making it trustworthy in an isolated enterprise environment where bad decisions have real business cost.',
    tags: ['MLOps', 'AI', 'LangGraph', 'agentic', 'machine-learning'],
  },
  {
    slug: 'ai-coding-assistants-value-workflow-march-2026',
    title: 'AI Coding Assistants: Value, Workflow, and Tradeoffs (March 2026)',
    date: '2026-03-04',
    summary:
      'A workflow-first take on AI coding tools: what feels like good value, what I would pick depending on your constraints, and why PLAN/EXECUTE beats one-model-does-everything.',
    tags: ['AI', 'tooling', 'productivity', 'coding'],
  },
  {
    slug: 'hello-world',
    title: 'Hello World — Why I am trying to start blogging',
    date: '2026-03-01',
    summary:
      'I have been building things for years but almost never writing them down. This is me fixing that.',
    tags: ['blogging'],
  },
]

export const userData = {
  name: 'Teng Fone',
  linkedin: 'https://www.linkedin.com/in/tengfonephang/',
  medium: 'https://medium.com/@tengfone',
  github: 'https://github.com/tengfone',
  buymeacoffee: 'https://www.buymeacoffee.com/tengfone',
  formBold: 'https://formbold.com/s/3ZdJ6',
  projects: [
    {
      title: 'ForgeTools',
      desc: 'Offline developer utilities in one desktop app, migrated from Electron to Tauri: the download went from 104 MB to about 5 MB and the window opens in about 0.6 s. 60+ tools to format, decode, convert and generate, and nothing you paste leaves your machine.',
      link: 'https://github.com/tengfone/forgetools/releases/latest',
      image: 'https://raw.githubusercontent.com/tengfone/forgetools/main/assets/demo.gif',
      tech: ['Tauri', 'Rust', 'TypeScript', 'Vite'],
      featured: true,
    },
    {
      title: 'Retrava',
      desc: 'Forgot to track your run? Draw your route, set your pace, and export a TCX file. Compatible with Strava, Garmin, and all major fitness platforms.',
      link: 'https://retrava.vercel.app/',
      image: 'https://retrava.vercel.app/animation.gif',
      tech: ['NextJS', 'Tailwind'],
      featured: true,
    },
    {
      title: 'CI Delta',
      desc: 'Reviews CI/CD changes in pull requests the way terraform plan reviews infrastructure. Flags risky edits such as removed approval gates, widened permissions and new secrets in GitHub Actions and GitLab CI. Published on npm and the GitHub Marketplace.',
      link: 'https://github.com/tengfone/ci-delta',
      image: '/projects/ci-delta.jpg',
      tech: ['TypeScript', 'Node.js', 'GitHub Actions', 'GitLab CI'],
    },
    {
      title: 'PickMyBrowser',
      desc: 'Pick which browser opens every link. Set it as your default browser and each link opens a small picker: press a number, done. Cross-platform, ~4 MB, and lives in the tray.',
      link: 'https://github.com/tengfone/pickmybrowser',
      image: 'https://raw.githubusercontent.com/tengfone/pickmybrowser/main/assets/demo.gif',
      tech: ['Tauri', 'Rust', 'TypeScript'],
    },
    {
      title: 'PrivatePixel',
      desc: 'A local-first browser image utility suite for resizing, compressing, converting, cropping, editing metadata, and removing backgrounds without uploads or remote inference.',
      link: 'https://tengfone.github.io/privatepixel/',
      image:
        'https://raw.githubusercontent.com/tengfone/privatepixel/main/public/assets/privatepixel.gif',
      tech: ['Vite', 'React', 'TypeScript', 'Web Workers', 'WASM'],
    },
    {
      title: 'IPMapAWS',
      desc: "Search, filter and export AWS's published IP ranges, or look up which AWS prefix contains an IP or CIDR. Server-rendered pages plus a free public REST API with OpenAPI docs.",
      link: 'https://ipmapaws.vercel.app/',
      image: '/projects/ipmapaws.jpg',
      tech: ['NextJS', 'TypeScript', 'Tailwind', 'Vercel'],
    },
    {
      title: 'SHA-256 Hash Bench',
      desc: 'Hash text and files with SHA-1/256/384/512, verify a digest pasted from sha256sum, and compute HMACs, all in the browser with Web Crypto. Nothing is uploaded.',
      link: 'https://sha-256-puce.vercel.app/',
      image: '/projects/sha256.jpg',
      tech: ['React', 'Vite', 'Web Crypto', 'Tailwind'],
    },
    {
      title: 'Dead Pixel Tester',
      desc: 'Full-screen colour plates for spotting dead or stuck pixels, including a grid drawn at exact device-pixel size, with keyboard, swipe and full-screen controls.',
      link: 'https://deadpixel-tester.vercel.app/',
      image: '/projects/deadpixel.jpg',
      tech: ['React', 'Vite', 'Canvas'],
    },
    {
      title: 'URL Shortener',
      desc: 'Started as a GovTech take-home: a React front end and Express API backed by MySQL on AWS EC2. Later rebuilt serverless on Vercel with Firebase Firestore so the live demo costs nothing to run.',
      link: 'https://tf-urlshortener.vercel.app/',
      image:
        'https://raw.githubusercontent.com/tengfone/urlshortener/main/screenshots/demo.gif',
      tech: ['React', 'Firebase', 'Vercel', 'MySQL', 'Express'],
    },
    {
      title: 'DeadText',
      desc: 'A Telegram text-based zombie survival game. It presents a unique scenario generated by a LLM (mistralai/mistral-nemo). Players make decisions to survive a zombie apocalypse, facing random events and challenges.',
      link: 'https://github.com/tengfone/deadtext',
      image:
        'https://raw.githubusercontent.com/tengfone/deadtext/main/assets/demo.gif',
      tech: ['Telegram', 'LLM', 'Prompting'],
      archived: true,
    },
    {
      title: 'Chat-Kaki',
      desc: 'An educational conversational bot with retrieval over Pinecone and Stripe-gated access. The live demo was retired because of hosting costs.',
      link: 'https://github.com/tengfone/chat-kaki',
      image:
        'https://raw.githubusercontent.com/tengfone/chat-kaki/main/demo_chatkaki.gif',
      tech: ['NextJS', 'Pinecone', 'Langchain', 'Stripe'],
      archived: true,
    },
    {
      title: 'Yestion',
      desc: 'A Notion copy built to try out the latest UI frameworks.',
      link: 'https://github.com/tengfone/yestion',
      image:
        'https://raw.githubusercontent.com/tengfone/yestion/main/demo_yestion.gif',
      tech: ['NextJS', 'Tailwind'],
      archived: true,
    },
    {
      title: 'OpenRiver',
      desc: 'Ethereum smart contracts specifically designed for buying and selling unique digital assets.',
      link: 'https://github.com/tengfone/open-river',
      image: '/projects/openriver.jpg',
      tech: ['React', 'Solidity', 'Ethereum'],
      archived: true,
    },
    {
      title: 'Deep Learning: HandWash',
      desc: 'Due to COVID-19, this handwashing project utilizes deep learning to detect and advise users on how to wash their hands.',
      link: 'https://github.com/tengfone/handwashStreamLit',
      image:
        'https://raw.githubusercontent.com/tengfone/handwashStreamLit/main/streamlit.png',
      tech: ['AlexNet', 'Streamlit', 'PyTorch'],
      archived: true,
    },
    {
      title: 'Big Data Book Review',
      desc: 'A fullstack web application that allows users to review books and their ratings.',
      link: 'https://github.com/tengfone/AmaNerdBookReview',
      image:
        'https://raw.githubusercontent.com/tengfone/AmaNerdBookReview/master/screenshots/splashpage.PNG',
      tech: ['AWS', 'React', 'Hadoop', 'Spark'],
      archived: true,
    },
    {
      title: 'Green Scanner',
      desc: 'A gamified mobile app that tracks the carbon footprint of everyday purchases and turns the emissions you save into reward points.',
      link: 'https://github.com/tengfone/green_scanner_flutter',
      image:
        'https://raw.githubusercontent.com/tengfone/green_scanner_flutter/master/screenshots/home.jpg',
      tech: ['Flutter', 'Hackathon'],
      archived: true,
      award: 'Grand Champion, Hack Junction X Asia 2020',
    },
  ],
  playground: [
    {
      title: 'FlipSide',
      desc: 'The table-side scoreboard for Flip 7. One phone hosts, everyone scans in, and scores update live with a real deck or a virtual one.',
      link: 'https://flip7-score-hub.lovable.app/',
      image: '/playground/flipside.png',
    },
    {
      title: 'Redactor',
      desc: 'Blur, pixelate or black out faces in photos and video with an on-device model. Turn off your Wi-Fi and it still works.',
      link: 'https://redactorlocal.lovable.app/',
      repo: 'https://github.com/tengfone/redactorlocal',
      image: '/playground/redactor.png',
    },
    {
      title: 'Profile Halo',
      desc: 'Make #OpenToWork-style profile picture frames for LinkedIn, Instagram and more. Your photo never leaves the browser.',
      link: 'https://snap-glam.lovable.app/',
      repo: 'https://github.com/tengfone/snap-glam',
      image: '/playground/profile-halo.png',
    },
    {
      title: 'GovAgent Panic',
      desc: 'A canvas arcade defense game: survive five workdays in a chaotic government AI platform office while incidents and audits pile up.',
      link: 'https://tengfone.github.io/GovAgentPanic/',
      repo: 'https://github.com/tengfone/GovAgentPanic',
      image:
        'https://raw.githubusercontent.com/tengfone/GovAgentPanic/main/assets/govagent.gif',
    },
    {
      title: 'MemeOps',
      desc: 'A static JSON API for infra humor, AI agent satire and postmortem-grade truth, with versioned endpoints and a docs site.',
      link: 'https://tengfone.github.io/memeops/',
      repo: 'https://github.com/tengfone/memeops',
      image:
        'https://raw.githubusercontent.com/tengfone/memeops/main/memeops.gif',
    },
  ],
  experience: [
    {
      // `title` is the official GovTech job title, deliberately kept separate from the
      // AI Platform Engineer identity on the homepage. Promotion to Senior Data Engineer
      // is effective Oct 2026; when it lands, split this into a two-role header
      // (Senior Data Engineer 2026 to Present / Data Engineer 2021 to 2026).
      title: 'Data Engineer — AI Platform Engineering',
      company: 'GovTech Singapore',
      year: 'Sep 2021 to Present',
      desc: 'I work with customer teams and product stakeholders to turn AI use cases into shared production capabilities. Across these platforms, I build authentication, RBAC, audit logging and secrets management, and help resolve production incidents in enterprise and restricted environments.',
      subSections: [
        {
          title: 'MLOps & AI API Platform',
          role: 'Technical Owner',
          desc: 'Led engineering of a multi-tenant platform across AWS and Azure, shaping architecture and roadmap decisions with product stakeholders.',
          bullets: [
            'Enabled governed model development and deployment for 450+ users across 90+ teams.',
            'Partnered with customer teams to cut POC delivery time by 75%, with reusable RAG reference implementations and OpenAI-compatible APIs.',
            'Scaled shared AI API infrastructure to millions of requests/month, routing across commercial providers and self-hosted models using vLLM.',
          ],
        },
        {
          title: 'Whole-of-Government AI Platform',
          role: 'Core Full-Stack Engineer',
          desc: 'Own React applications, Go microservices and APIs, authentication, usage analytics and observability on Kubernetes.',
          bullets: [
            'Productionized the platform to reliably serve more than 3,000 requests/minute across governed AI capabilities.',
          ],
        },
        {
          title: 'Self-Hosted GenAI Platform',
          role: 'Engineering Delivery Lead',
          desc: 'Led the successful migration into a highly restricted environment, coordinating engineering delivery, stakeholders and operational readiness.',
          bullets: [
            'Now coordinate newer-model onboarding, inference scaling, routing and model lifecycle management, aligning priorities across product and technical leads.',
          ],
        },
      ],
      earlier: [
        {
          title: 'Usage Analytics & Cost Governance',
          desc: 'Built Python/PySpark pipelines processing millions of logs/day to support usage reporting, quotas, budgeting and cost recovery.',
        },
        {
          title: 'Secure Clinical Data Platforms',
          desc: 'Built and operated secure platforms for large-scale clinical datasets using Python/PySpark, AWS, Terraform and CI/CD, enabling national-level health economics analysis while reducing cloud costs by approximately 30%.',
        },
        {
          title: 'Engineering Enablement',
          desc: 'Mentor interns and junior engineers, introduced structured peer review, and co-founded AI Wednesday to share practical AI/MLOps approaches.',
          link: { label: 'AI Wednesday', href: 'https://lorong.ai/' },
        },
      ],
    },
    {
      title: 'Volunteer — Python Instructor',
      company: 'Code In The Community',
      year: '2022',
      desc: 'Volunteer Python Instructor at CITC, teaching beginner Python, simple electronics and coding projects to underprivileged children.',
    },
    {
      title: "Bachelor's Degree",
      company: 'Singapore University of Technology and Design (SUTD)',
      year: '2021',
      desc: 'BSc Computer Science Design, Minor in Artificial Intelligence and Humanities. SUTD Undergraduate Merit Scholarship.',
    },
    {
      title: 'Co Founder',
      company: 'Swifty',
      year: '2021',
      desc: [
        'Built and shipped a full-stack e-commerce platform using React and AWS and GCP',
        'Owned delivery from MVP to deployment and iteration',
      ],
    },
    {
      title: 'NLP Research Intern',
      company: 'DeCLaRe Lab @ SUTD',
      year: '2020',
      desc: [
        'Worked on complex question answering using Transformer models',
        'Benchmarked baselines such as BERT and ELMo',
      ],
    },
    {
      title: 'Data Analyst Intern',
      company: 'Univac',
      year: '2019',
      desc: [
        `Built Python ETL pipelines \n Streamed shop floor metrics via Kafka and NodeJS to surface near real-time insights`,
      ],
    },
    {
      title: 'Diploma In Mechanical Engineering',
      company: 'Singapore Polytechnic',
      year: '2015',
      desc: 'Graduated with a Diploma With Merit',
    },
  ],
}
