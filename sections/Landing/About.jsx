import React from 'react';
import { Steps } from '@/components';

export default function About() {
  return (
    <section id="about">
      <div className='max-w-screen-web mx-auto py-20 md:py-32 px-6 md:px-10 lg:px-6 xl:px-0 flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-x-10 gap-y-14 items-center'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-3xl md:text-4xl lg:text-[44px] font-semibold mt-4'>About Me</h2>
          <p className='text-[17px] mt-6 lg:text-lg text-neutral-600'>Hi there, I'm a web developer & designer based in Kosovo. I discovered my passion for programming and seo three years ago and have been working tirelessly to improve my skills ever since. Lately, I also co-founded a <a className="text-blue-600" href="https://www.inoweb.pro/">web development & seo agency that helps businesses scale online.</a></p>
          <p className='text-[17px] lg:text-lg mt-3 text-neutral-600'>I'm proficient in a number of languages and frameworks. While I may be young, I am dedicated, hardworking, and committed to delivering exceptional web development solutions. So if you're looking for a talented and passionate web developer to bring your ideas to life, I'd love to hear from you!</p>
          <p className='text-[17px] lg:text-lg mt-6 text-neutral-600'>Here are a few technologies I've been working with recently:</p>
          <div className="inline-grid gap-x-4 gap-y-1 grid-cols-2 mt-4 text-persian-blue font-medium">
            <p><i className="fa-solid fa-caret-right text-[12px] text-byzantine-blue mr-2"></i>Javascript</p>
            <p><i className="fa-solid fa-caret-right text-byzantine-blue text-[12px] mr-2"></i>Tailwind</p>
            <p><i className="fa-solid fa-caret-right text-byzantine-blue text-[12px] mr-2"></i>React</p>
            <p><i className="fa-solid fa-caret-right text-byzantine-blue text-[12px] mr-2"></i>Redux</p>
            <p><i className="fa-solid fa-caret-right text-byzantine-blue text-[12px] mr-2"></i>Next</p>
            <p><i className="fa-solid fa-caret-right text-byzantine-blue text-[12px] mr-2"></i>Framer Motion</p>
          </div>
        </div>
        <img className='w-[55%] md:w-1/2 max-w-[300px]' src="https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/Lindrit_Sulaj_Insta_pic_uSV5ys5YB.jpg?updatedAt=1680287577356" alt="Lindrit Sulaj" />
      </div>

      <Steps from="bottom" background={"white"} color="rgb(10 10 10)" />
    </section>
  )
}
