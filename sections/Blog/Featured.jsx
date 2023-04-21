import React from 'react'
import { Source_Sans_Pro } from 'next/font/google'
import { getAllArticles, getCategories } from '@/sanity/utils';
import Link from 'next/link';

const sourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

export default async function Featured() {
  const allArticles = await getAllArticles();
  const categories = await getCategories();

  return (
    <section className='max-w-screen-web mx-auto py-10 md:py-20 px-6 md:px-10 lg:px-6 xl:px-0 min-h-screen flex flex-wrap-reverse md:flex-nowrap gap-8 gap-y-12'>
      <div className='w-full md:w-3/4 '>
        <h2 className={`text-lg font-semibold tracking-wider text-persian-blue uppercase ${sourceSans.className}`}>Recently Published</h2>
        <div className='mt-[4px] md:mt-4'>
          {
            allArticles.map(article => (
              <Article key={article.slug} {...article} />
            ))
          }
        </div>
      </div>
      <div className='w-full md:w-1/4'>
        <h2 className={`text-lg font-semibold tracking-wider text-persian-blue uppercase ${sourceSans.className}`}>Top Categories</h2>
        <div className='flex gap-2 flex-wrap mt-4'>
          {categories.map(category => (
            <Link className='border-solid border-[2px] border-neutral-300 px-3 py-[6px] hover:border-gold hover:text-gold-hover hover:font-medium' href={`/category/${category.slug}`}>{category.title}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const Article = ({ title, description, slug }) => {
  return (
    <article className='py-4 my-5 border-solid border-b-[1px] border-b-neutral-300'>
      <h3 className='text-[19px] md:text-[21px] font-medium'>{title}</h3>
      <p className='max-w-[720px] mt-3 text-[16.5px] leading-7 text-neutral-600'>{description}
      </p>
      <Link href={`/blog/${slug}`} className='block mt-4 font-medium text-[17px] hover:text-gold'>Read more</Link>
    </article>
  )
}