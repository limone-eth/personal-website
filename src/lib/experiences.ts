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
    companyName: 'Backdrop',
    position: 'Backend Engineer',
    description:
      'A Web3 startup building a platform to connect web3 builders at early stage and support them in their journey.',
    tags: ['Node.js', 'REST API', 'Express', 'Firestore', 'Web3'],
    url: 'https://backdrop.so',
    startDate: 'Apr 2022',
    endDate: 'Jul 2023',
    logo: '/backdrop.png',
  },
  {
    companyName: 'Easypol',
    position: 'Backend Developer',
    description:
      'A Fintech startup building an app to help people manage their personal finances and easily pay their taxes, fines and other public services.',
    tags: ['Node.js', 'REST API', 'Express', 'Docker', 'MongoDB', 'Kubernetes'],
    url: 'https://easypol.io',
    startDate: 'Apr 2021',
    endDate: 'Apr 2022',
    logo: '/easypol.png',
  },
  {
    companyName: 'Tutored',
    position: 'Backend Developer',
    description:
      'An EdTech startup building a platform to helps students bridging from university to their professional career.',
    tags: ['Node.js', 'REST API', 'Express', 'Docker', 'SQL'],
    url: 'https://joinrs.com',
    startDate: 'Jul 2018',
    endDate: 'Apr 2021',
    logo: '/tutored.png',
  },
]
