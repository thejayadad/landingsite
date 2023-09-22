'use client'
import React from 'react'
import { heroData } from '@/data'

const Hero = () => {
  const {title, subtitle, btnText, btnIcon} = heroData
  return (
    <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[748px] bg-no-repeat relative mt-[120px] bg:mt-[150px]'>
    <div className='container mx-auto'>
      <div className='text-white'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  </section>
  )
}

export default Hero