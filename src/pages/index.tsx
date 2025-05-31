import Image from 'next/image'

import ExperienceCard from '@/components/ExperienceCard'
import Container from '@/components/Layout/Container'
import ProjectCard from '@/components/ProjectCard'
import { H1, H3, Text } from '@/components/Text'
import { experiences } from '@/lib/experiences'
import { projects } from '@/lib/projects'

const HomePage = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <Image
            src="/lemon.gif"
            width={120}
            height={120}
            alt="Lemon"
            className="rounded-full"
          />
        </div>
        <Container>
          <div className="flex gap-10 justify-center">
            <a
              href="https://github.com/limone-eth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://warpcast.com/limone.eth"
              target="_blank"
              rel="noopener noreferrer"
            >
              farcaster
            </a>
            <a
              href="https://x.com/limone_eth"
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </a>
            <a
              href="https://paragraph.xyz/@limone.eth"
              target="_blank"
              rel="noopener noreferrer"
            >
              paragraph
            </a>
          </div>
        </Container>
      </div>
      {/* Bio */}
      <div className="mb-6">
        <H1 className="mb-6 text-center">
          your friendly neighborhood lemon 🍋
        </H1>
        <Text>
          <p>
            i&apos;m a serial hacker and community builder, constantly exploring
            the realms of web3 and frontier tech. driven by curiosity, i embrace
            risk and failure as opportunities for growth. my passion for
            decentralized social platforms keeps me active on{' '}
            <a
              href="https://farcaster.xyz/limone.eth"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold"
            >
              farcaster
            </a>
            , where i share insights, ship mini-apps, and experiment with new
            mechanics for social coordination.
          </p>
          <br />
          <p>
            in my hometown of rome, i founded{' '}
            <a
              href="https://urbe.build"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold"
            >
              urbe.eth
            </a>{' '}
            — a vibrant community for web3 builders. we launched{' '}
            <a
              href="https://urbe.build/urbe-hub"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold"
            >
              the first web3 hub in italy
            </a>
            : a space where devs, designers, and dreamers meet, co-work, and build together. from hackathons to bootcamps, it&apos;s where ideas turn into prototypes and strangers into collaborators.
          </p>
          <br />
          <p>
            i also co-founded{' '}
            <a
              href="https://builders.garden"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold"
            >
              builders garden
            </a>
            , a web3 product studio and experimental playground. we help
            protocols and startups test new SDKs, ship MVPs, and spark adoption
            through real products, not pitch decks.
          </p>
          <br />
          <p>
            over the years, i&apos;ve attended (and won) major eth hackathons
            across the globe, building everything from social games and crypto
            wallets to stablecoin payment tools and onchain ads. i believe in
            learning by building — fast, scrappy, and always a bit weird.
          </p>
          <br />
          <p>
            currently, i&apos;m focused on building social mini-apps and games
            on{' '}
            <a
              href="https://farcaster.xyz/limone.eth"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold"
            >
              farcaster
            </a>{' '}
            — crafting playful, viral experiences that bring people onchain
            without them even realizing it.
          </p>
        </Text>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <H3 className="mb-3">projects</H3>
        <Text className="mb-6">
          some of the cool shit I&apos;ve been building lately
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div className="mb-6">
        <H3 className="mb-3">experiences</H3>
        <Text className="mb-6">
          companies I&apos;ve been working with in the past
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
    </div>
  )
}

export default HomePage
