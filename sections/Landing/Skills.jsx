import React from 'react';
import { Steps } from '@/components';

const skills = [
  {
    name: 'User Experience Design',
    description: 'Designing websites and applications that are easy to use and provide a great user experience',
    icons: [
      'devicon-javascript-plain colored',
      'devicon-react-original colored',
      'devicon-html5-plain colored',
      'devicon-css3-plain colored',
    ]
  },
  {
    name: 'Responsive Web Design',
    description: 'Creating websites that look great on any device, from desktop computers to mobile phones',
    icons: [
      'devicon-html5-plain colored',
      'devicon-css3-plain colored',
      'devicon-tailwindcss-plain colored'
    ]
  },
  {
    name: 'Redux State Management',
    description: 'Implementing robust state management solutions using Redux in Next.js applications',
    icons: [
      'devicon-redux-original colored',
      'devicon-react-original colored'
    ]
  },
  {
    name: 'Server-side Rendering with Next.js',
    description: 'Building websites with Next.js that are optimized for performance and SEO',
    icons: [
      'devicon-nextjs-original',
      'devicon-react-original colored'
    ]
  },
  {
    name: 'Content Management with Sanity',
    description: 'Developing efficient content management systems using Sanity as a headless CMS with Next.js',
    icons: [
      'devicon-nextjs-original',
      'fa-solid fa-database text-orange-400'
    ],
  },
  {
    name: 'Figma Prototyping',
    description: "Utilizing Figma's prototyping capabilities to create interactive wireframes and prototypes.",
    icons: [
      'devicon-figma-plain colored'
    ]
  }
];


export default function Skills() {
  return (
    <section className='bg-neutral-950 text-white'>
      <div className='max-w-screen-web mx-auto py-10 md:py-16 px-6 lg:py-20 md:px-10 lg:px-6 xl:px-0'>
        <h2 className='text-3xl md:text-4xl lg:text-[44px] font-semibold'>My skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 mt-12">
          { skills.map(skill => (
            <div key={skill.name}>
              <h4 className='font-semibold text-[22px]'>{skill.name}</h4>
              <p className='mt-2 text-neutral-300 text-[17px] lg:text-lg max-w-lg'>{skill.description}</p>
              <div className={`flex items-center gap-2 mt-4 text-[22px] text-neutral-400 ${skill.image && "mt-2"}`}>
                {/* <span className='text-base'>Technologies:</span> */}
                { skill?.icons?.map(icon => (
                  <i className={`${icon} cursor-pointer`}></i>
                ))}
              </div>
            </div>
          )) }
        </div>
      </div>
      <Steps from="top" background={"rgb(5 74 218)"} color="rgb(10 10 10)" />
    </section>
  )
}
