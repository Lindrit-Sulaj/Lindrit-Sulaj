import React from 'react'

export default function Hero() {
  return (
    <section className='mt-[70px] bg-byzantine-blue pt-10 pb-20 flex justify-center flex-col items-center px-6 md:px-20'>
      <h1 className='text-white text-[27px] text-center md:text-4xl leading-10 lg:text-5xl font-semibold lg:leading-[70px] underline underline-offset-4'>My Blog</h1>
      <p className='text-center text-lg md:text-xl text-text-blue mt-5 max-w-xl'>Expand your knowledge on SEO, web development, and more with my blog's diverse articles.</p>
      <div className=' mt-6 w-[85%] max-w-xl mx-auto flex justify-center md:gap-4 gap-2'>
        <input type="text" placeholder='Search for articles:' className='bg-transparent py-2 border-solid border-[2px] border-blue-400 px-4 md:px-6 grow placeholder:text-text-blue outline-none text-white text-lg focus:bg-white focus:text-black focus:placeholder:text-neutral-400' />
        <button className='bg-gold hover:bg-gold-hover px-4 md:px-6 text-lg text-white'>
          Search
        </button>
      </div>
    </section>
  )
}
