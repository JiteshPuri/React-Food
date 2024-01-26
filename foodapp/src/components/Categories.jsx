import React from 'react'
import {categories} from '../data/data.js'
const Categories = () => {
    // console.log(categories);
  return (
    <div className='max-w-[1640px] mx-auto py-12'>
        <h2 className=' text-orange-500 text-5xl font-bold text-center'>Categories</h2>
        <div className=' justify-between py-10 grid  md:grid-cols-4 grid-cols-1 gap-6'>
            {categories.map((item, index) =>
                <div key ={index} className='border flex justify-between shadow-lg hover:scale-105 hover:duration-300 rounded-xl  items-center'>
                    <h2 className= ' font-bold  text:sm md:text-xl pl-6 '>
                        {item.name }
                    </h2>
                    <img src={item.image} alt={item.name} />


                </div>
            )}
        </div>
    </div>
  )
}

export default Categories