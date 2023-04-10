import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Header() {
  return (
    <header className='position sticky flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial= {{
                x: -500,
                opacity: 0.5,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row item-start'>
            <SocialIcon url="https://twitter.com/ivan_agwuye" 
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url="https://twitter.com/ivan_agwuye" 
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url="https://twitter.com/ivan_agwuye" 
            fgColor='gray'
            bgColor='transparent'/>
            <SocialIcon url="https://twitter.com/ivan_agwuye" 
            fgColor='gray'
            bgColor='transparent'/>
        </motion.div>

        <motion.div
        initial={{
            x: 500,
            opacity: 0.5,
            scale: 0.5
        }}
        animate= {{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1
        }}>
            <SocialIcon
            className='cursor cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='text uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </motion.div>
    </header>
  )
}