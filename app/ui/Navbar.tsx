import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ButtonComponents } from './ButtonComponents'

export const Navbar = () => {
  return (
    <nav className='fixed w-full'>
        <section className='container flex justify-between items-center py-7 relative z-30'>
            <Image src="./logo.svg" width={120} height={38} alt='logo'/>
            <ul className='flex font-bold gap-10 text-lg'>
                <li>Home</li>
                <li>Work</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            <ButtonComponents variant='default'>Get the App</ButtonComponents>
        </section>
    </nav>
  )
}
