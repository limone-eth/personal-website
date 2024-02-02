export interface Experience {
  position: string
  companyName: string
  description: string
  tags: string[]
  url: string
  logo?: string
  startDate?: string
  endDate?: string
}

export const experiences: Experience[] = [
  {
    companyName: 'builders garden',
    position: 'co-founder & serial hacker',
    description:
      'a web3 mvp studio building and launching web3 products in a matter of weeks.',
    tags: ['Web3'],
    url: 'https://builders.garden',
    startDate: 'nov 2023',
    endDate: 'present',
    logo: '/builders-garden-logo.png',
  },
  {
    companyName: 'backdrop',
    position: 'backend engineer',
    description:
      'a web3 startup building a platform to connect web3 builders at early stage and support them in their journey.',
    tags: ['Node.js', 'REST API', 'Express', 'Firestore', 'Web3'],
    url: 'https://backdrop.so',
    startDate: 'apr 2022',
    endDate: 'jul 2023',
    logo: '/backdrop.png',
  },
  {
    companyName: 'easypol',
    position: 'backend developer',
    description:
      'a fintech startup building an app to help people manage their personal finances and easily pay their taxes, fines and other public services.',
    tags: ['Node.js', 'REST API', 'Express', 'Docker', 'MongoDB', 'Kubernetes'],
    url: 'https://easypol.io',
    startDate: 'apr 2021',
    endDate: 'apr 2022',
    logo: '/easypol.png',
  },
  {
    companyName: 'tutored',
    position: 'backend developer',
    description:
      'an edtech startup building a platform to helps students bridging from university to their professional career.',
    tags: ['Node.js', 'REST API', 'Express', 'Docker', 'SQL'],
    url: 'https://joinrs.com',
    startDate: 'jul 2018',
    endDate: 'apr 2021',
    logo: '/tutored.png',
  },
]
