import React from 'react'
import { LuCopyright } from 'react-icons/lu'
import Logo from './logo'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='border-t py-5 bg-neutral-100 dark:bg-neutral-800/50 px-3 lg:px-12'>
        <div className='flex items-center justify-between lg:justify-center lg:gap-24'>
            <h2 className='text-sm font-mukta max-w-[150px] lg:max-w-full text-[#111] dark:text-zinc-400'>
                Learn, Gain and Grow with
                <span className='text-[#00c774]'> Turbostrix</span>
            </h2>
            <div className='flex items-center gap-4 text-sm font-kanit text-[#333] dark:text-zinc-300'>
                <h2 className='underline'>Docs</h2>
                <h2 className='underline'>Blogs</h2>
            </div>
        </div>
        <div className='my-8 flex flex-col lg:flex-row items-start lg:justify-between gap-4'>
            <Logo />
            <div className='flex items-center justify-center text-neutral-700 dark:text-neutral-500 ml-3 gap-3 text-lg lg:text-xl'>
                <FaGithub className='cursor-pointer hover:text-black dark:hover:text-white' />
                <FaLinkedin className='cursor-pointer hover:text-black dark:hover:text-white' />
                <FaTwitter className='cursor-pointer hover:text-black dark:hover:text-white' />
                <FaDiscord className='cursor-pointer hover:text-black dark:hover:text-white' />
            </div>
        </div>
        <div className='border-t dark:border-neutral-700 pt-3 flex items-center justify-between'>
            <h2 className='flex items-center gap-1 text-xs font-medium font-inter text-neutral-600 dark:text-neutral-400'>
            <LuCopyright />
            Turbostrix Inc.
            </h2>
            <h2 className='flex items-center gap-1 text-xs font-medium font-inter text-neutral-600 dark:text-neutral-400'>
                Built by
                <span className='text-black dark:text-white'>Sahil Ahmed</span>
            </h2>
        </div>
    </div>
  )
}

export default Footer