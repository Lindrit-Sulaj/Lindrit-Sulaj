import React from 'react'

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
      'devicon-css3-plain colored',
      'devicon-sass-original colored',
      'devicon-tailwindcss-plain colored'
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
    name: 'Animated Interactions',
    description: 'Adding interactive and visually appealing animations to websites and applications to enhance user engagement',
    icons: [
      'devicon-css3-plain colored',
      'devicon-tailwindcss-plain colored'
    ],
    image: 'https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/My_project__2__2unbArcD3.png?updatedAt=1680451463400'
  }
];


export default function Skills() {
  return (
    <section className='bg-neutral-950 text-white'>
      <div className='max-w-screen-web mx-auto py-10 md:py-16 px-6 md:px-10 lg:px-6 xl:px-0'>
        <h2 className='text-3xl md:text-4xl lg:text-[44px] font-semibold'>My skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 mt-12">
          { skills.map(skill => (
            <div key={skill.name}>
              <h4 className='font-semibold text-[22px]'>{skill.name}</h4>
              <p className='mt-2 text-neutral-300 text-lg max-w-lg'>{skill.description}</p>
              <div className={`flex items-center gap-2 mt-4 text-[22px] text-neutral-400 ${skill.image && "mt-2"}`}>
                {/* <span className='text-base'>Technologies:</span> */}
                { skill?.icons?.map(icon => (
                  <i className={`${icon} hover:text-blue-400 transition-all cursor-pointer`}></i>
                ))}
                {skill.image && <img className='w-[30px] h-[35px]' src={skill.image}/>}
              </div>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}
