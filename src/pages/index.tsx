import React from "react";
import {Post} from 'contentlayer/generated'

import ProjectCard from '@/components/ProjectCard'
import {H1, H3, Text} from '@/components/Text'
import {getLatestPosts} from '@/lib/posts'
import {projects} from '@/lib/projects'
import Image from "next/image";

const HomePage = ({latestPosts}: { latestPosts: Post[] }) => {
    return (
        <div className="h-full">
            <div className="mb-6 text-center">
                <Image src="/lemon.gif" width={120} height={120} alt="Lemon" className="rounded-full"/>
            </div>
            {/* Bio */}
            <div className="mb-6">
                <H1 className="mb-6 text-center">Your friendly neighborhood lemon 🍋</H1>
                <Text>
                    I&apos;m a Web3 Backend Ninja, enthusiastic about startups and cutting-edge technology. Curiosity
                    drives
                    me to explore beyond my comfort zone, embracing risk and failure as opportunities for personal
                    growth. My dedication lies in Web3, where I continuously experiment with innovative technologies to
                    push boundaries and achieve new heights.
                    <br/><br/>
                    I&apos;m a community builder, I love to share my knowledge and help others grow. That&apos;s why I
                    started a community for web3 builders (<a
                    href="https://twitter.com/urbeEth"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary"
                >
                    urbe.eth
                </a>) in my hometown, Rome, where we hangout and learn together.
                </Text>
            </div>

            {/* Projects */}
            <div>
                <H3 className="mb-3">Projects</H3>
                <Text className="mb-6">
                    Some of the cool shit I&apos;ve been building lately
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage

export async function getStaticProps() {
    const latestPosts = getLatestPosts()
    return {
        props: {
            latestPosts,
        },
    }
}
