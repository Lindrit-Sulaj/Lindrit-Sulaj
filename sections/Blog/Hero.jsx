import { SearchBar } from "@/components"

export default function Hero() { 
  return (
    <section className='mt-[70px] bg-byzantine-blue pt-10 pb-20 px-6 md:px-20'>
      <h1 className='text-white text-[27px] text-center md:text-4xl leading-10 lg:text-5xl font-semibold lg:leading-[70px] underline underline-offset-4'>My Blog</h1>
      <p className='text-center mx-auto mb-6 text-lg md:text-xl text-text-blue mt-5 max-w-xl'>Expand your knowledge on SEO, web development, and more with my blog's diverse articles.</p>
      <SearchBar />
    </section>
  )
}
