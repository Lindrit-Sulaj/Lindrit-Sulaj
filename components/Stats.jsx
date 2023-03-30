import React from 'react'

export default function Stats() {
  return (
    <div className='w-full bg-persian-blue py-10 px-10 lg:px-6 xl:px-0'>
      <div className="max-w-screen-web mx-auto flex gap-20">
        <div className=''>
          <h4 className='text-[32px] font-semibold'>12+</h4>
          <p className='text-text-blue text-lg'>Projects</p>
        </div>
        <div className=''>
          <h4 className='text-[32px] font-semibold'>7+</h4>
          <p className='text-text-blue text-lg'>Technologies</p>
        </div>
        <div className=''>
          <h4 className='text-[32px] font-semibold'>6+</h4>
          <p className='text-text-blue text-lg'>Articles</p>
        </div>
        <div className=''>
          <h4 className='text-[32px] font-semibold'>2 years</h4>
          <p className='text-text-blue text-lg'>Experience</p>
        </div>
      </div>
    </div>
  )
}
