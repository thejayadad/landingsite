'use client'
import React from 'react'
import { heroData } from '@/data'

const Hero = () => {
  const {title, subtitle, btnText, btnIcon} = heroData
  return (
    <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[748px] bg-no-repeat relative mt-[120px] bg:mt-[150px]'>
    <div className='container mx-auto min-h-[40vh] lg:h-full flex items-center xl:justify-end'>
      <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div>
          <button>{btnText}
          <div>
            {btnIcon}
          </div>
          </button>
        </div>
      </div>
      <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'>

      </div>
    </div>
  </section>
  )
}

export default Hero