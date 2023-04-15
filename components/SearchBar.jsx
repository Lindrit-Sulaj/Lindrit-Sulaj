"use client"
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = useSearchParams().get('query')

  const [query, setQuery] = useState(search ? search : '');

  const handleSearch = () => {
    router.push(`/search?query=${query}`);
  }


  return (
    <div className='flex justify-center md:gap-4 gap-2  w-[80%] md:w-full max-w-xl mx-auto'>
      <input type="text" placeholder='Search for articles:' className='bg-transparent py-2 border-solid border-[2px] border-blue-400 px-4 md:px-6 grow placeholder:text-text-blue outline-none text-white text-lg focus:bg-white focus:text-black focus:placeholder:text-neutral-400' value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch} className='bg-gold hover:bg-gold-hover px-4 md:px-6 text-lg text-white'>
        Search
      </button>
    </div>
  )
}
