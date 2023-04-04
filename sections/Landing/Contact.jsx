'use client'
import React from 'react'

export default function Contact() {
  return (
    <section className="">
      <div className="max-w-screen-lg mx-auto py-14 md:py-16 px-6 lg:py-20 md:px-10 lg:px-6 xl:px-0">
        <h2 className='text-3xl md:text-4xl lg:text-[44px] font-semibold'>Get in touch</h2>
        <p className='text-lg text-neutral-600 mt-4'>Let's craft a standout website that reflects your brand, engages your visitors, and achieves your business goals.</p>
        <form
          className="mt-8"
          action="https://formbold.com/s/6rKJJ"
          method="POST">
          <div className="flex gap-4">
            <input type="text" className='w-1/2 py-4 px-6 text-[17px] bg-neutral-50 border-solid border-[1px] border-neutral-200 focus:outline-neutral-300' name="name" placeholder='Name' required />
            <input type="email" className='w-1/2 focus:outline-neutral-300 py-4 px-6 text-[17px] bg-neutral-50 border-solid border-[1px] border-neutral-200' name="email" placeholder='Email' required></input>
          </div>
          <input className='w-full mt-4 px-6 py-4 focus:outline-neutral-300 bg-neutral-50 border-solid border-[1px] border-neutral-200' type="text" name="subject" placeholder="Subject" required />
          <textarea className='mt-4 bg-neutral-50 border-solid border-[1px] border-neutral-200 focus:outline-neutral-300 w-full px-6 py-4' name="test" id="test" cols="30" rows="6" placeholder='Message' required></textarea>
          <button className='mt-8 px-6 py-3 bg-byzantine-blue hover:bg-blue-500 text-white text-lg' type="submit">Send message!</button>
        </form>
      </div>
    </section>
  )
}
