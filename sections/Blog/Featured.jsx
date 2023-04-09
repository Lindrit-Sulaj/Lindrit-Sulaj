import React from 'react'
import { Source_Sans_Pro } from 'next/font/google'

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

export default function Featured() {
  return (
    <section className='max-w-screen-web mx-auto py-10 md:py-20 px-6 md:px-10 lg:px-6 xl:px-0 min-h-screen flex flex-wrap md:flex-nowrap gap-8'>
      <div className='w-full md:w-3/4 '>
        <h2 className={`text-lg font-semibold tracking-wider text-persian-blue uppercase ${sourceSans.className}`}>Recently Published</h2>
        <article className='pt-3 pb-2 mt-4'>
          <h3 className='text-[21px] font-medium'>The End of Front-End Development</h3>
          <p className='max-w-[720px] mt-3 text-[16.5px] leading-7 text-neutral-600'>Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more!Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development.
          </p>
          <button className='mt-4 font-medium text-[17px]'>Read more</button>
        </article>
        <hr className='h-[1px] my-4 bg-neutral-200 border-none' />
        <article className='pt-3 pb-2'>
          <h3 className='text-[21px] font-medium'>The End of Front-End Development</h3>
          <p className='max-w-[720px] mt-3 text-[16.5px] leading-7 text-neutral-600'>Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more!Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development.
          </p>
          <button className='mt-4 font-medium text-[17px]'>Read more</button>
        </article>
        <hr className='h-[1px] my-4 bg-neutral-200 border-none' />
        <article className='pt-3 pb-2'>
          <h3 className='text-[21px] font-medium'>The End of Front-End Development</h3>
          <p className='max-w-[720px] mt-3 text-[16.5px] leading-7 text-neutral-600'>Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more!Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development.
          </p>
          <button className='mt-4 font-medium text-[17px]'>Read more</button>
        </article>
        <hr className='h-[1px] my-4 bg-neutral-200 border-none' />
        <article className='pt-3 pb-2'>
          <h3 className='text-[21px] font-medium'>The End of Front-End Development</h3>
          <p className='max-w-[720px] mt-3 text-[16.5px] leading-7 text-neutral-600'>Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more!Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development.
          </p>
          <button className='mt-4 font-medium text-[17px]'>Read more</button>
        </article>
        <hr className='h-[1px] my-4 bg-neutral-200 border-none' />
        <article className='pt-3 pb-2'>
          <h3 className='text-[21px] font-medium'>The End of Front-End Development</h3>
          <p className='max-w-[720px] mt-3 text-[16.5px] leading-7 text-neutral-600'>Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more!Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development.
          </p>
          <button className='mt-4 font-medium text-[17px]'>Read more</button>
        </article>
      </div>
      <div className='w-full md:w-1/4'>
        <div>
          <h2 className={`text-lg font-semibold tracking-wider text-persian-blue uppercase ${sourceSans.className}`}>Top Categories</h2>
          <div className='flex gap-2 flex-wrap mt-4'>
            <button className='bg-sky-200 transition-all hover:bg-sky-300 px-3 py-1 rounded-lg'>React</button>
            <button className='bg-sky-200 transition-all hover:bg-sky-300 px-3 py-1 rounded-lg'>Next.js</button>
            <button className='bg-sky-200 transition-all hover:bg-sky-300 px-3 py-1 rounded-lg'>Performance</button>
            <button className='bg-sky-200 transition-all hover:bg-sky-300 px-3 py-1 rounded-lg'>Javascript</button>
          </div>
        </div>
        <div className='mt-10 md:hidden lg:block'>
          <h2 className={`text-lg font-semibold tracking-wider text-persian-blue uppercase ${sourceSans.className}`}>Best Articles</h2>
          <div className='flex gap-2 mt-4 items-center text-lg'>
            <i className="fa-solid fa-caret-right text-byzantine-blue mr-2"></i>
            <h4 className='font-medium text-neutral-800 text-lg'>Why your business needs a website</h4>
          </div>
          <div className='flex gap-2 mt-4 items-center text-lg'>
            <i className="fa-solid fa-caret-right text-byzantine-blue mr-2"></i>
            <h4 className='font-medium text-neutral-800 text-lg'>Why your business needs a website</h4>
          </div>
          <div className='flex gap-2 mt-4 items-center text-lg'>
            <i className="fa-solid fa-caret-right text-byzantine-blue mr-2"></i>
            <h4 className='font-medium text-neutral-800 text-lg'>Why your business needs a website</h4>
          </div>
          <div className='flex gap-2 mt-4 items-center text-lg'>
            <i className="fa-solid fa-caret-right text-byzantine-blue mr-2"></i>
            <h4 className='font-medium text-neutral-800 text-lg'>Why your business needs a website</h4>
          </div>
          <div className='flex gap-2 mt-4 items-center text-lg'>
            <i className="fa-solid fa-caret-right text-byzantine-blue mr-2"></i>
            <h4 className='font-medium text-neutral-800 text-lg'>Why your business needs a website</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

const Article = () => {
  return (
    <article className='pt-3 pb-2'>
      <h3 className='text-[21px] font-medium'>The End of Front-End Development</h3>
      <p className='max-w-[720px] mt-3 text-[16.5px] leading-7 text-neutral-600'>Large language models like GPT-4 are becoming increasingly capable, at an alarming rate. Within a couple of years, we won't need developers any more!Or at least, that's the narrative going viral on Twitter. I'm much more optimistic about what these AI advancements mean for the future of software development.
      </p>
      <button className='mt-4 font-medium text-[17px]'>Read more</button>
    </article>
  )
}