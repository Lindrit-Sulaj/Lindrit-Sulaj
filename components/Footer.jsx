import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-persian-blue py-4 text-white'>
      <div className="max-w-screen-web mx-auto py-4 md:py-5 px-6 lg:py-8 md:px-10 lg:px-6 xl:px-0">
        <img className='h-[30px] mx-auto' src="https://ik.imagekit.io/0s9lwb2yr/Developer_Portfolio_-_Lindrit_Sulaj/Images/Logo_-_Without_removed_bg-fotor-bg-remover-2023040614184_VtwxdcMD16.png?updatedAt=1680783541653" alt="" />
        <h5 className='text-center mt-5 text-blue-300 text-xl md:text-[22px] max-w-sm md:max-w-md mx-auto'>Pursuing progress and embracing new challenges.</h5>
        <div className='flex justify-center gap-4 mt-6'>
          <a href="https://instagram.com/lindritsulaj" className='w-[50px] h-[50px] rounded-md text-[22px] border-solid border-[2px] border-blue-500 flex justify-center items-center hover:bg-byzantine-blue transition-all'><i className="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com/SulajLindrit" className='w-[50px] h-[50px] rounded-md text-[22px] border-solid border-[2px] border-blue-500 flex justify-center items-center hover:bg-byzantine-blue transition-all'><i className="fa-brands fa-twitter"></i></a>
          <a href="https://github.com/Lindrit-Sulaj" className='w-[50px] h-[50px] rounded-md text-[22px] border-solid border-[2px] border-blue-500 flex justify-center items-center hover:bg-byzantine-blue transition-all'><i className="fa-brands fa-github"></i></a>
        </div>
        <p className="text-center mt-5 text-blue-400">Made with 
            <i className="devicon-nextjs-original ml-2"></i>
          </p>
      </div>
    </footer>
  )
}
