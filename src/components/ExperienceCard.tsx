import React from 'react'
import Image from 'next/image'

import { H3, H4, TextSmall } from '@/components/Text'
import ExternalLinkIcon from '@/icons/external-link.svg'
import GithubIcon from '@/icons/github.svg'
import { Experience } from '@/lib/experiences'
import { Project } from '@/lib/projects'

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const {
    companyName,
    logo,
    description,
    tags,
    url,
    startDate,
    endDate,
    position,
  } = experience

  return (
    <div className="border border-base-200 rounded-xl p-6 flex flex-col">
      <header className="flex items-center justify-between">
        <Image
          className="rounded-xl"
          src={logo!}
          height="40px"
          width="40px"
          alt="Project logo"
        />
        <div className="flex items-center gap-3">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </header>
      <main className="flex-grow mt-4">
        <H3 className="mb-3">{companyName}</H3>
        <H4 className="mb-3">{position}</H4>
        <TextSmall>{description}</TextSmall>
      </main>
      <footer>
        <ul className="flex flex-wrap mt-7 gap-1">
          <li
            key={startDate}
            className="bg-secondary text-amber-300 py-1 px-1.5 rounded-md text-sm font-mono"
          >
            {`${startDate} - ${endDate}`}
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default ExperienceCard
