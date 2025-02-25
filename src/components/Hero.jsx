/**
 * Hero Component
 * 
 * Renders the hero section with a title, description, 
 * navigation links, and a background image.
 * 
 * Props: None
 * Returns: JSX element for the hero section.
 * 
 * Key Features:
 * - Responsive layout with Tailwind CSS.
 * - Includes navigation links and a call-to-action button.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */

'use client'

import { michroma } from './Fonts'
import Menu from './Menu'
import Link from 'next/link'
import Image from "next/image";



export default function Hero() {

  return (
    <div className={`${michroma.className} bg-white`}>
      <header className='bg-black relative inset-x-0 top-0 z-50'>
        <nav aria-label='Global' className='flex items-center justify-between p-6'>
          <Menu />
          <div className='m-auto pr-12'>
            <Link href='#home'>
              <span className={`${michroma.className} text-5xl`}>TERRA</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className='bg-black -mt-[1px]'>
        <div className='relative h-[80vh]'>
          <Image
            src="/milkyway.jpg"
            alt="Milky Way"
            fill
            priority
            className="object-cover object-center"
          />
          <div className='absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-black/70 via-transparent to-black/70'></div>
          <div className='absolute bottom-10 w-full z-10'>
            <div className='flex items-center justify-center gap-x-6'>
              <Link href='#about' className='border rounded-md hover:bg-bg-secondary px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Get started
              </Link>
              <Link href='#contact' className='text-sm/6 font-semibold'>
                Get in Touch
                <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


