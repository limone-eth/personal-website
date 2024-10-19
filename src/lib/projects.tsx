export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
  githubUrl?: string
  logo?: string
  emoji?: string
  label?: string
}

export const projects: Project[] = [
  {
    title: 'drift',
    description:
      'unlocking the future of commerce with simple, secure, and scalable onchain payment solutions',
    tags: ['Next.js', 'Stablecoin'],
    url: 'https://drift.money',
    logo: '/drift.svg',
  },
  {
    title: 'beearly',
    description:
      'no-code waitlist frames to get early adopters for your products',
    tags: ['Next.js', 'Frames'],
    url: 'https://beearly.club',
    githubUrl: 'https://github.com/builders-garden/waitlist-frame',
    logo: '/beearly.svg',
  },
  {
    title: 'stringz',
    description:
      'mobile-native farcaster client focused on threads and long conversations',
    tags: ['Next.js', 'Frames'],
    url: 'https://stringz.xyz',
    githubUrl: 'https://github.com/builders-garden/pulse-app',
    logo: '/stringz.png',
  },
  {
    title: 'billboards',
    description:
      'no-code billboard frames to monetize your farcaster channel space by selling slots on your billboard',
    tags: ['Next.js', 'Frames'],
    url: 'https://billboards.cool',
    githubUrl: 'https://github.com/limone-eth/farhack-bilboard-frame',
    logo: '/billboards.svg',
    label: 'farhack 2024',
  },
  {
    title: 'plink',
    description:
      'your mobile usdc shortcut making it easy to send money to your friends and family',
    tags: ['Next.js', 'Dynamic', 'Safe', 'GnosisPay'],
    url: 'https://plink.finance',
    githubUrl: 'https://github.com/builders-garden/fluidpay-app',
    logo: '/plink.png',
    label: 'ethglobal london 2024',
  },
  {
    title: 'espresso',
    description:
      'a tablet-first app that helps merchant setting up their shop and start accepting payments in crypto. Within the app merchants can create their shop, add items and sell goods to their customers just by having them scanning a QR Code.',
    tags: ['Next.js', 'Dynamic', 'Safe', 'GnosisPay'],
    url: 'https://espresso.builders.garden',
    githubUrl: 'https://github.com/builders-garden/espresso-app',
    logo: '/espresso.png',
    label: 'ethbucarest 2024',
  },
  {
    title: 'fluidpay',
    description:
      'fluidpay is a mobile-first p2p payments app running on Base and USDC-centric, integrating smart account, stealth addresses and virtual cards to offer a seamless and secure experience with empowered privacy.',
    tags: ['Next.js', 'Dynamic', 'Safe', 'GnosisPay'],
    url: 'https://ethglobal.com/showcase/fluidpay-tpqvz',
    githubUrl: 'https://github.com/builders-garden/fluidpay',
    logo: '/fluidpay.svg',
    label: 'ethglobal london 2024',
  },
  {
    title: 'papabase',
    description:
      'Making public goods donations accessible to everyone through crypto and fiat.',
    tags: ['React Native', 'Thirdweb', 'GHO', 'AAVE'],
    url: 'https://devfolio.co/projects/papabase-7d6b',
    githubUrl: 'https://github.com/builders-garden/papabase',
    logo: '/papabase.svg',
    label: 'ethdenver 2024',
  },
  {
    title: 'ghost',
    description:
      'a mobile-native AA smart wallet designed for p2p payments, featuring automatic saving plans and easy-to-use investment features GHO-based.',
    tags: ['React Native', 'Thirdweb', 'GHO', 'AAVE'],
    url: 'https://ethglobal.com/showcase/ghost-mae3q',
    githubUrl: 'https://github.com/builders-garden/ghost-app',
    logo: '/ghost.png',
    label: 'ethglobal lfgho winner',
  },
  {
    title: 'pulse',
    description:
      'a mobile-first social app that improves your feed based on your social graph and in-app interactions. powered by a dynamic recommendation engine, your content is in perfect sync.',
    tags: ['Next.js', 'Lens', 'Farcaster', 'Privy', 'Airstack'],
    url: 'https://pulse-indol.vercel.app',
    githubUrl: 'https://github.com/PaoloRollo/pulse',
    logo: '/pulse.png',
    label: 'ethglobal istanbul',
  },
  {
    title: 'threelingo',
    description: 'the free, fun and effective way to learn web3',
    tags: ['Next.js', 'Safe', 'Polygon', 'Web3Auth'],
    url: 'https://threelingo.vercel.app',
    githubUrl: 'https://github.com/PaoloRollo/threelingo',
    logo: '/threelingo.png',
    label: 'ethlisbon 2023',
  },
  {
    title: 'findcaster',
    description: 'the best place to find people on farcaster',
    tags: ['Next.js', 'Farcaster', 'Web3 socials'],
    url: 'https://findcaster-kappa.vercel.app',
    githubUrl: 'https://github.com/limone-eth/findcaster',
    emoji: '🔍',
    label: 'buildspace s4',
  },
  {
    title: 'split3',
    description: 'the easiest way to split group expenses with crypto',
    tags: ['Next.js', 'RequestNetwork', 'Safe'],
    url: 'https://split-3.vercel.app',
    githubUrl: 'https://github.com/mattiapomelli/split3-frontend',
    emoji: '🖖',
    label: 'ethwarsaw winner 2023',
  },
  {
    title: 'bubbles',
    description:
      'a voice chat app for onchain communities. create token-gated rooms based on token ownership, poap claims, group affiliations and more.',
    tags: ['Next.js', 'Daily.co', 'Sismo', 'Airstack'],
    url: 'https://thebubbles.xyz',
    githubUrl: 'https://github.com/gskril/ethglobal-paris-hack',
    emoji: '🫧',
    label: 'ethglobal paris winner',
  },
  {
    title: 'bob is safe',
    description:
      'a privacy-first crypto payroll platform. protect your employees privacy while keeping compliant with local regulations.',
    tags: ['Next.js', 'zkBob', 'Safe', 'Uniswap'],
    url: 'https://ethglobal.com/showcase/bob-is-safe-p2ba2',
    githubUrl: 'https://github.com/bob-is-safe/bob-is-safe-frontend',
    logo: '/bob-is-safe.png',
    label: 'ethglobal lisbon 2022',
  },
  {
    title: 'urbe.eth',
    description:
      'community for Web3 builders in rome: coworking, events, hackathons, and more.',
    tags: [],
    url: 'https://twitter.com/urbeEth',
    logo: '/urbe-eth.png',
  },
  {
    title: 'ethrome',
    description:
      'the 1st web3 hackathon in Italy, on governance and privacy topics',
    tags: [],
    url: 'https://ethrome.org',
    logo: '/ethrome.png',
  },
]
