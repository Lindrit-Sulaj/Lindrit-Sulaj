import React from 'react';
import { Source_Sans_Pro } from 'next/font/google';

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

export default function ProjectCard({
  name,
  source,
  live,
  description,
  techStack
}) {
  return (
    <div className='border-solid border-[1px] border-blue-600 bg-persian-blue flex flex-col p-6'>
      <div className='flex justify-between items-center'>
        <i className="fa-regular fa-folder text-3xl"></i>
        <div className='flex gap-5 text-lg'>
          <a href={source}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={live}>
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
        </div>
      </div> 

      <h5 className='text-2xl mt-6 font-medium'>{name}</h5>
      <p className='text-lg mt-4 mb-5 text-blue-300'>{description}</p>

      <div className='flex gap-3 mt-auto overflow-hidden'>
        { techStack.map(tech => (
          <p className={`whitespace-nowrap ${sourceSans.className}`}>{tech}</p>
        ))}
      </div>
    </div>
  )
}
