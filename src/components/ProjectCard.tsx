import React from 'react'
import Image from 'next/image'

import { H3, H4, TextSmall } from '@/components/Text'
import ExternalLinkIcon from '@/icons/external-link.svg'
import GithubIcon from '@/icons/github.svg'
import { Project } from '@/lib/projects'

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, tags, url, githubUrl, label } = project
  const { logo, emoji } = project

  return (
    <div className="border border-base-200 rounded-xl p-6 flex flex-col">
      <header className="flex items-center justify-between ">
        {emoji ? (
          <H3>{emoji}</H3>
        ) : (
          <Image
            className="rounded-xl"
            src={logo!}
            height="40px"
            width="40px"
            alt="Project logo"
          />
        )}
        <div className="flex items-center gap-3">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </header>
      <main className="flex-grow mt-4">
        <H4 className="mb-3">{title}</H4>
        <TextSmall>{description}</TextSmall>
      </main>
      {label && (
        <footer>
          <ul className="flex flex-wrap mt-7 gap-1">
            <li className="bg-secondary text-primary py-1 px-1.5 rounded-md text-sm font-mono">
              {label}
            </li>
          </ul>
        </footer>
      )}
      {/* <footer>
        <ul className="flex flex-wrap mt-7 gap-1">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-secondary text-primary py-1 px-1.5 rounded-md text-sm font-mono"
            >
              {tag}
            </li>
          ))}
        </ul>
      </footer> */}
    </div>
  )
}

export default ProjectCard
