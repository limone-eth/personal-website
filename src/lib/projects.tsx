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
