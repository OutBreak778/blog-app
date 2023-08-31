import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-semibold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-6xl'>Nikhil Daily Blog</h1>
        <h2 className='mt-5 md:mt-0 max-w-md text-2xl'>
        <span className='underline decoration-4 decoration-[rgba(255,215,0)]'>Welcome to Devosphere</span> 
        </h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-500 max-w-lg'><span className='underline underline-offset-1 flex sm:hidden lg:hidden'>where you can connect your ideas and thought to other people.</span>&nbsp;Known about new Features introducing in Market | The Latest Technology used in Projects | Gain different Knowledge and many more</p>
    </div>
  )
}

export default Banner
