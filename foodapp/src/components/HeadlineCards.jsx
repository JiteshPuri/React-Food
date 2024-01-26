import React from 'react'

const HeadlineCards = () => {
  return (
    // Container
    <div className='max-w-[1640px] mx-auto px-4 my-12 grid md:grid-cols-3 gap-6  '>
        {/* Card */}
        <div className='relative rounded-xl '>
            {/* overlay */}
            <div className=' absolute h-full w-full bg-black/50 text-white   rounded-xl  '>
                <p className=' pt-4 text-2xl px-2 font-bold'>Sun's Out, BOGO's Out</p>
                <p className=' p-4'>Through 6/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>

            </div>
            <img className=' max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" />
        </div>
        {/* Card */}
        <div className='relative rounded-xl '>
            {/* overlay */}
            <div className=' absolute h-full w-full bg-black/50 text-white   rounded-xl  '>
                <p className=' pt-4 text-2xl px-2 font-bold'>New Restaurants</p>
                <p className=' p-4'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>

            </div>
            <img className=' max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src="https://images.pexels.com/photos/6084938/pexels-photo-6084938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
        </div>
        {/* Card */}
        <div className='relative rounded-xl '>
            {/* overlay */}
            <div className=' absolute h-full w-full bg-black/50 text-white   rounded-xl  '>
                <p className=' pt-4 text-2xl px-2 font-bold'>New Cuisines</p>
                <p className=' p-4'>Try Them Now!</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now!</button>

            </div>
            <img className=' max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
        </div>
        
    </div>
  )
}

export default HeadlineCards