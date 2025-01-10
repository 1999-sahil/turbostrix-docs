import { homeFeatures } from '@/constant/feature'
import Image from 'next/image'
import React from 'react'

function Features() {
  return (
    <div className='px-3 lg:px-5 max-w-[1152px] w-full flex items-center justify-center'>
        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                {homeFeatures.map((feature, index) =>(
                    <article key={index} className='bg-neutral-100 dark:bg-neutral-800/50 rounded-md p-[20px] flex flex-col gap-4'>
                        <div className='text-[#333] dark:text-neutral-300'>
                            <h2><feature.icon className='text-xl' /></h2>
                        </div>
                        <h2 className='text-sm font-poppins font-medium text-[#00c774]'>{feature.title}</h2>
                        <p className='text-xs font-openSans font-medium text-zinc-500 dark:text-zinc-300/65'>{feature.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features