import React from 'react';
import { Source_Sans_Pro } from 'next/font/google';
import { Steps } from '@/components';
import Link from 'next/link';

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

const articles = [{ "category": "Web Development", "color": 'rgb(5 74 218)', "title": "10 Tips for Improving Website Accessibility to Increase Satisfaction", "description": "Learn how to make your website more accessible and give disabled people a better user experience.", "date": "August 4", "minutesToRead": 7, }, { "category": "SEO", "color": 'rgb(4 120 87)', "title": "The Top 5 On-Page SEO Techniques for Higher Rankings", "description": "Find out how to optimize your website's on-page elements to improve your search engine rankings.", "date": "September 12", "minutesToRead": 5 }, { "category": "SEO",  "color": 'rgb(4 120 87)', "title": "5 Common SEO Mistakes to Avoid", "description": "Learn how to avoid common mistakes that can hurt your website's search engine rankings.", "date": "November 20", "minutesToRead": 6 }, { "category": "Web Development", "title": "Introduction to Responsive Web Design","color": 'rgb(5 74 218)', "description": "Discover the basics of responsive web design and why it's important for modern websites.", "date": "October 8", "minutesToRead": 10 },]


export default function Blog() {
  return (
    <section className='bg-neutral-950 text-white'>
      <div className="max-w-screen-web mx-auto py-10 md:py-24 px-6 md:px-10 lg:px-6 xl:px-0">
        <h2 className='text-3xl md:text-4xl lg:text-[44px] font-semibold'>Featured articles</h2>
        <p className='mt-2 text-neutral-300 text-lg'>Explore my blog for insights, tips and latest news on web development</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-14 gap-y-14 gap-x-4">
          { articles.map(article => (
            <Article key={article.title} {...article}/>
          ))}
        </div>
        <Link href="/blog" className='mt-12 text-lg bg-byzantine-blue inline-block px-5 py-2 hover:bg-persian-blue'>Go to blog</Link>
      </div>
      <Steps from="top" color="rgb(10 10 10)" background="white" />
    </section>
  )
}

const Article = ({ category, title, description, date, minutesToRead, color }) => {
  return (
    <div style={{ borderColor: color }} className='bg-neutral-950 pl-4 pr-0 md:px-6 border-solid border-l-[3px]'>
      <p className={`${sourceSans.className} font-semibold text-gold tracking-wider uppercase text-sm`}>{category}</p>
      <h6 className='text-xl md:text-2xl font-medium mt-3 mb-3 cursor-pointer'>{title}</h6>
      <p className='text-neutral-300'>{description}</p>
      <div className='flex gap-4 mt-4'>
        <p>{date}</p>
        -
        <p className='text-neutral-300'>
          {minutesToRead} minute read
        </p>
      </div>
    </div>
  )
}