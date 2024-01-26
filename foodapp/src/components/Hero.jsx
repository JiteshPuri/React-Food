import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
      <div className='max-h-[500px] relative '> 
        {/* Overlay */}
        <div className='absolute  text-gray-200 h-full w-full justify-center mx-auto bg-black/50 flex flex-col '>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4 py-2'>The <span className='text-orange-600'>Best</span></h1>
            <h1 className=' text-4xl sm:text-5xl py-2 px-4 md:text-6xl lg:text-7xl font-bold text-orange-600'>Foods <span className=' text-gray-200'>Delivered</span></h1>
        </div>
        {/* <div className='absolute w-[1640px]  '> */}
            <img className='max-h-[500px]  w-full mx-auto  object-cover ' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        {/* </div> */}
        </div>
    </div>
  )
}

export default Hero