import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import ExperienceCard from '@/components/ExperienceCard'
import NFTCard from '@/components/NFTCard'
import ProjectCard from '@/components/ProjectCard'
import { H1, H3, Text } from '@/components/Text'
import { AirstackERC721TokenType } from '@/lib/airstack/interfaces'
import { experiences } from '@/lib/experiences'
import { projects } from '@/lib/projects'

const HomePage = () => {
  const [littleLemons, setLittleLemons] = useState<AirstackERC721TokenType[]>(
    [],
  )

  useEffect(() => {
    const fetchLittleLemons = async () => {
      try {
        const res = await fetch('/api/nfts', {
          method: 'GET',
        })
        const json = (await res.json()).reverse()
        console.log(json)
        setLittleLemons(json)
      } catch (error) {
        console.error('Error fetching bubble:', error)
      }
    }

    fetchLittleLemons()
  }, [])

  return (
    <div className="h-full">
      <div className="mb-6 text-center">
        <Image
          src="/lemon.gif"
          width={120}
          height={120}
          alt="Lemon"
          className="rounded-full"
        />
      </div>
      {/* Bio */}
      <div className="mb-6">
        <H1 className="mb-6 text-center">
          Your friendly neighborhood lemon 🍋
        </H1>
        <Text>
          I&apos;m a Web3 Backend Ninja, enthusiastic about startups and
          cutting-edge technology. Curiosity drives me to explore beyond my
          comfort zone, embracing risk and failure as opportunities for personal
          growth. My dedication lies in Web3, where I continuously experiment
          with innovative technologies to push boundaries and achieve new
          heights.
          <br />
          <br />
          I&apos;m a community builder, I love to share my knowledge and help
          others grow. That&apos;s why I started a community for web3 builders (
          <a
            href="https://twitter.com/urbeEth"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            urbe.eth
          </a>
          ) in my hometown, Rome, where we hangout and learn together.
        </Text>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <H3 className="mb-3">Projects</H3>
        <Text className="mb-6">
          Some of the cool shit I&apos;ve been building lately
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div className="mb-6">
        <H3 className="mb-3">Experiences</H3>
        <Text className="mb-6">
          Companies I&apos;ve been working with in the past
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.companyName}
              experience={experience}
            />
          ))}
        </div>
      </div>

      {/* Little Lemons NFTs */}
      <div>
        <H3 className="mb-3">Little Lemons</H3>
        <Text className="mb-6">
          These are all the Little Lemons Friends I&apos;ve collected so far
        </Text>
        <div className="grid grid-cols-3 md:grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))]">
          {littleLemons?.length > 0 &&
            littleLemons.map((token) => (
              <NFTCard key={token!.id} nft={token} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
