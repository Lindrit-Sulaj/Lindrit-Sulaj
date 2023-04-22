import React from 'react'
import { ProjectCard, Steps } from '@/components'
import Link from 'next/link'

export default function Projects() {
  return (
    <section id="projects" className='bg-byzantine-blue text-white'>
      <div className="max-w-screen-web mx-auto py-10 md:py-20 px-6 md:px-10 lg:px-6 xl:px-0">
        <div className='flex justify-between items-center gap-6 flex-wrap'>
          <div>
            <h2 className='text-3xl md:text-4xl lg:text-[44px] font-semibold'>Projects</h2>
            <p className='mt-2 text-blue-200 text-lg'>Here are some things I've built</p>
          </div>
          <Link href="/projects" className='px-4 text-lg font-medium hidden md:block'>View all <i className="fa-solid fa-arrow-right-long ml-3"></i></Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          <ProjectCard
            name="Digio"
            live="https://digio-ls.vercel.app"
            source="https://github.com/Lindrit-Sulaj/Digio"
            description="Digio is a leading web development and digital marketing company that helps businesses grow their online presence."
            techStack={["Next", "React", "Tailwind", "Framer Motion"]} />
          <ProjectCard
            name="Youtube Clone"
            live="https://youtube-ls.vercel.app"
            source="https://github.com/Lindrit-Sulaj/Youtube"
            description="A youtube clone application where you can view different videos, video suggestions, channels and more."
            techStack={["React", "Redux", "Scss"]} />
          <ProjectCard
            name="News"
            live="https://news-ls.vercel.app"
            source="https://github.com/Lindrit-Sulaj/News"
            description="A website where you can see the latest and most popular news from multiple sources for different categories."
            techStack={["Next", "React", "Tailwind"]} />
          <ProjectCard
            name="Notes"
            live="https://notes-markdown-ls.netlify.app"
            source="https://github.com/Lindrit-Sulaj/Notes-App"
            description="A note-taking app where you can take, edit and delete notes."
            techStack={["Next", "React", "Tailwind", "Framer Motion"]} />
          <ProjectCard
            name="Architecture"
            live="https://architecture-ls.netlify.app"
            description="A website about an architecture company that specializes in interior and exterior design"
            techStack={["React", "Redux", "Scss"]} />
          <ProjectCard
            name="Traveler"
            live="https://traveler-ls.netlify.app"
            description="A landing page for a traveling agency, where you can get more information about the company."
            techStack={["Next", "React", "Tailwind"]} />
        </div>
        <Link href="/projects" className='px-4 text-lg font-medium block mt-6 md:hidden'>View all <i className="fa-solid fa-arrow-right-long ml-3"></i></Link>
      </div>
      <Steps from="top" background={"rgb(10 10 10)"} color="rgb(5 74 218)" />
    </section>
  )
}
