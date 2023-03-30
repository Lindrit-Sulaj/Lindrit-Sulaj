import React from 'react'

export default function Navbar() {
  return (
    <nav className='h-[70px] lg:h-[80px] fixed top-0 bg-byzantine-blue w-full'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <img src="https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/Logo_-_Without_removed_bg-removebg-preview_tb2PaP98M.png?updatedAt=1680105709945" alt="Logo" className='h-[30px]' />
        <div className='h-[70%] flex flex-col justify-center gap-[6px]'>
          <div className='w-8 h-[2px] rounded-lg bg-white'></div>
          <div className='w-8 h-[2px] rounded-lg bg-white'></div>
          <div className='w-8 h-[2px] rounded-lg bg-white'></div>
        </div>
      </div>
    </nav>
  )
}
