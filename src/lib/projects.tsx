import CapazLogo from '@/icons/capaz.svg'
import CodeshareLogo from '@/icons/codeshare.svg'
import CryviaLogo from '@/icons/cryvia.svg'

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
    title: 'Findcaster',
    description: 'The best place to find people on Farcaster',
    tags: ['Next.js', 'Farcaster', 'Web3 socials'],
    url: 'https://findcaster-kappa.vercel.app',
    githubUrl: 'https://github.com/limone-eth/findcaster',
    emoji: '🔍',
    label: 'buildspace s4',
  },
  {
    title: 'Split3',
    description: 'The easiest way to split group expenses with crypto',
    tags: ['Next.js', 'RequestNetwork', 'Safe'],
    url: 'https://split-3.vercel.app',
    githubUrl: 'https://github.com/mattiapomelli/split3-frontend',
    emoji: '🖖',
    label: 'ETHWarsaw Winner',
  },
  {
    title: 'Bubbles',
    description:
      'A voice chat app for onchain communities. Create token-gated rooms based on token ownership, POAP claims, group affiliations and more.',
    tags: ['Next.js', 'Daily.co', 'Sismo', 'Airstack'],
    url: 'https://thebubbles.xyz',
    githubUrl: 'https://github.com/gskril/ethglobal-paris-hack',
    emoji: '🫧',
    label: 'ETHGlobal Paris Winner',
  },
  {
    title: 'Bob is Safe',
    description:
      'A privacy-first crypto payroll platform. Protect your employees privacy while keeping compliant with local regulations.',
    tags: ['Next.js', 'zkBob', 'Safe', 'Uniswap'],
    url: 'https://ethglobal.com/showcase/bob-is-safe-p2ba2',
    githubUrl: 'https://github.com/bob-is-safe/bob-is-safe-frontend',
    logo: '/bob-is-safe.png',
  },
  {
    title: 'urbe.eth',
    description:
      'Community for Web3 builders in Rome: coworking, events, hackathons, and more.',
    tags: [],
    url: 'https://twitter.com/urbeEth',
    logo: '/urbe-eth.png',
  },
  {
    title: 'ETHRome',
    description:
      'The 1st Web3 hackathon in Italy, on Governance and Privacy topics',
    tags: [],
    url: 'https://ethrome.org',
    logo: '/ethrome.png',
  },
]
