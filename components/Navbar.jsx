"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import useMediaQuery from '@/utils/useMediaQuery';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const breakpoint = useMediaQuery();
  const [isOpened, setIsOpened] = useState(false);

  const router = useRouter();

  const handleGetInTouch = () => {
    router.push('#contact')
  }

  return (
    <nav className='h-[70px] lg:h-[80px] absolute top-0 bg-persian-blue md:bg-byzantine-blue w-full'>
      <div className='container mx-auto px-6 flex items-center justify-between h-full'>
        <Link href="/">
          <img src="https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/Logo_-_Without_removed_bg-fotor-bg-remover-2023040614184_VtwxdcMD16.png?updatedAt=1680783541653" alt="Logo" className='h-[30px]' />
        </Link>

        <ul className='hidden md:flex items-center gap-6 text-lg text-blue-300 font-medium'>
          <li className=' hover:text-blue-100'><a href="https://github.com/Lindrit-Sulaj">Github</a></li>
          <li className=' hover:text-blue-100'><Link href="/projects">Projects</Link></li>
          <li className=' hover:text-blue-100'><Link href="/blog">Blog</Link></li>
          <Link href="/contact" className='border-blue-500 border-solid border-[2px] text-neutral-200 px-3 py-[6px] hover:border-orange-400 hover:text-orange-200'>Get in Touch</Link>
        </ul>

        <div onClick={() => setIsOpened(true)} className='h-[70%] md:hidden flex flex-col justify-center gap-[4px] cursor-pointer'>
          <div className='w-7 h-[3px] rounded-lg bg-white'></div>
          <div className='w-7 h-[3px] rounded-lg bg-white'></div>
          <div className='w-7 h-[3px] rounded-lg bg-white'></div>
        </div>
      </div>

      {breakpoint === "sm" && (
        <AnimatePresence>
          {isOpened && (
            <Mobile isOpened={isOpened} setIsOpened={setIsOpened} />
          )}
        </AnimatePresence>
      )}
    </nav>
  )
}

function Mobile({ isOpened, setIsOpened }) {
  return (
    <motion.div
      transition={{
        type: 'just',
        duration: .15,
      }}
      animate={{
        x: 0,
      }}
      initial={{
        x: '-100vw'
      }}
      exit={{
        x: '-100vw'
      }}

      className='fixed top-0 w-[90%] h-screen left-0 bg-persian-blue p-10'>

      <div className='flex justify-between items-center'>
        <img src="https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/Logo_-_Without_removed_bg-removebg-preview_tb2PaP98M.png?updatedAt=1680105709945" alt="Logo" className='h-[30px]' />
        <button onClick={() => setIsOpened(false)}>
          <i className="fa-solid fa-xmark text-3xl text-white"></i>
        </button>
      </div>
      <ul className='mt-16 text-[22px] text-text-blue flex flex-col items-center gap-y-6'>
        <li>
          <a href="https://github.com/Lindrit-Sulaj">Github</a>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <Link href="/contact" className='border-blue-500 border-solid border-[2px] text-neutral-200 px-4 py-[6px] hover:border-orange-400 hover:text-orange-200'>Get in Touch</Link>
      </ul>
    </motion.div>
  )
}