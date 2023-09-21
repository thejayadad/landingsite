'use client'
import React from 'react'
import { heroData } from '@/data'

const Hero = () => {
  const {title, subtitle, btnText, btnIcon} = heroData
  return (
    <div className='bg-hero bg-cover bg-center min-h-[40vh]'>
    <div className='container mx-auto'>
      Hero
    </div>
  </div>
  )
}

export default Hero