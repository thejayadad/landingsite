import About from '@/components/About'
import Contact from '@/components/Contact'
import GallerySection from '@/components/GallerySection'
import Hero from '@/components/Hero'
import Interview from '@/components/Interview'
import Skills from '@/components/Skills'
import Testimonal from '@/components/Testimonal'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
    <Hero />
    <About />
    <GallerySection />
    <Skills />
    <Testimonal />
    <Interview />
    <Contact />
   </main>
  )
}
