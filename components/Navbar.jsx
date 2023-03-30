import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='h-[70px] lg:h-[80px] fixed top-0 bg-byzantine-blue w-full'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <img src="https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/Logo_-_Without_removed_bg-removebg-preview_tb2PaP98M.png?updatedAt=1680105709945" alt="Logo" className='h-[30px]' />
        
        <ul className='flex items-center gap-6 text-lg text-blue-300 font-medium'>
          <li className=' hover:text-blue-100'><Link href="#about">About</Link></li>
          <li className=' hover:text-blue-100'><Link href="#projects">Projects</Link></li>
          <li className=' hover:text-blue-100'><Link href="#blog">Blog</Link></li>
          <button className='border-blue-500 border-solid border-[2px] text-neutral-200 px-3 py-[6px] hover:border-orange-400 hover:text-orange-200'>Get in Touch</button>
        </ul>

        {/* <div className='h-[70%] flex flex-col justify-center gap-[6px]'>
          <div className='w-8 h-[2px] rounded-lg bg-white'></div>
          <div className='w-8 h-[2px] rounded-lg bg-white'></div>
          <div className='w-8 h-[2px] rounded-lg bg-white'></div>
        </div> */}
      </div>
    </nav>
  )
}
