import React from 'react'
import DataStructures from './dsa'
import Reactjs from './react'
import Algorithms from './algorithm'
function TSContent() {
  return (
    <div className='w-full flex flex-col gap-8'>
        {/** Section Heading */}
        <div className='flex items-center justify-center mb-10'>
            <h2 className='flex flex-col lg:flex-row lg:gap-2 items-center justify-center font-openSans'>
                <span className='text-base lg:text-2xl font-bold text-black dark:text-white'>What&apos;s in TurboStrix? </span>
                <span className='text-sm lg:text-lg font-normal text-zinc-800 dark:text-zinc-300'>Everything you need to become a developer</span>
            </h2>
        </div>

        {/** tech sections */}
        <section className='flex flex-col gap-1'>
            <DataStructures />
            <Reactjs />
            <Algorithms />
        </section>
    </div>
  )
}

export default TSContent