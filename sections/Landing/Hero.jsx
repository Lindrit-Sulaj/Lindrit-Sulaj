import React from 'react';

export default function Hero() {
  return (
    <section className="hero pt-[70px] lg:pt-[80px] flex items-center justify-center px-10">
      <div className='max-w-[1000px] mx-auto w-full'>
        <h1 className='text-7xl font-extrabold'>Hi, I'm <span className='text-blue-500'>Lindrit</span></h1>
        <p className='text-[26px] mt-6 font-medium max-w-xl'>I develop web applications, user interfaces and mobile applications.</p>
        <button className='px-6 py-3 text-xl border-solid border-[1px] border-blue-600 rounded-lg font-medium text-blue-500 mt-8 hover:bg-[rgba(250,250,250,.05)] transition-all'>Get in touch</button>
      </div>
    </section>
  )
}
