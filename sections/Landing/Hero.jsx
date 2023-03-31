import React from 'react';
import { Stats, Steps } from '@/components';
import { archivo } from '@/app/layout';

export default function Hero() {
  return (
    <section>
      <div className="hero bg-byzantine-blue text-white py-20 md:py-32 px-6 md:px-10 lg:px-6 xl:px-0 mt-[70px]">
        <div className="mx-auto max-w-screen-web">
          <h1 className='text-3xl md:text-4xl leading-10 lg:text-6xl font-semibold lg:leading-[70px]'>Designing Web Solutions that Bring Your Ideas to Life</h1>
          <p className='text-lg md:text-xl text-text-blue mt-6 max-w-3xl'>I'm a front-end web developer based in Kosovo, with a passion for creating visually stunning websites using the latest and greatest web technologies. </p>
          <button className='text-lg md:text-xl px-6 py-3 bg-gold mt-8 border-none hover:bg-gold-hover'>See Projects</button>
        </div>
      </div>
      <Stats />
      <Steps from="top" background="white" color="#003FC1" />
    </section>
  )
}
