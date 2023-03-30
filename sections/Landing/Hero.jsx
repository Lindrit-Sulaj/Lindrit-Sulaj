import React from 'react';
import { Stats } from '@/components';

export default function Hero() {
  return (
    <section>
      <div className="hero bg-byzantine-blue py-32 px-10 lg:px-6 xl:px-0 mt-[70px]">
        <div className="mx-auto max-w-screen-web">
          <h1 className='text-6xl font-semibold leading-[70px]'>Designing Web Solutions that Bring Your Ideas to Life</h1>
          <p className='text-xl text-text-blue mt-6 max-w-3xl'>I'm a front-end web developer based in Kosovo, with a passion for creating visually stunning websites using the latest and greatest web technologies. </p>
          <button className='text-xl px-6 py-3 bg-orange-500 mt-8 border-none'>See Projects</button>
        </div>
      </div>
      <Stats />
    </section>
  )
}
