import React from 'react'
import { heroData } from '@/data'

const Header = () => {
  const {title, subtitle, btnText, btnIcon} = heroData
  return (
    <div className='bg-pink-600'>
      <div className='container mx-auto'>
        Hero
      </div>
    </div>
  )
}

export default Header