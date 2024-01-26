import React, {useState} from 'react'
import {data} from '../data/data.js'


const Food = () => {
    // console.log(data);
    const [foods, setFoods] = useState(data);
    // Filter type: burgers/pizza/etc
    const filterType = (category) =>{
        setFoods(
            data.filter((item) =>{
                return item.category === category;
            })
        )
    }
    const filterPrice = (price) =>{
        setFoods(
        data.filter((object) =>
        {
            return object.price === price;
        })
        )
    }
  return (
    <div className='max-w-[1640px] relative text-orange-500 mx-auto'>
        <h1 className='text-4xl pb-4 font-bold text-center'>Most Ordered Menu Items</h1>
        <div>
            {/* Filter Row */}
            <div className='pd-0'>
            <p className='text-black px-4 text-sm'>Filter Type:</p>
            </div>
            
            
            <div className=' flex text-sm md:text-md justify-between w-full px-4 py-1 '>
                {/* Filter Type */}
                
                <button onClick={() =>setFoods(data)} className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white'>All</button>
                <button onClick={()=> filterType('burger')} className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white'>Burgers</button>
                <button onClick={()=> filterType('pizza')}  className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white'>Pizza</button>
                <button onClick={()=> filterType('salad')}  className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white'>Salad</button>
                <button onClick={()=> filterType('chicken')}  className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white'>Chicken</button>

            </div>
            
            <div>
            {/* Filter Price */}
            <div className='pd-0'>
            <p className='text-black px-4 text-sm'>Price:</p>
            </div>
            
            
            <div className=' flex text-sm md:text-md gap-5 w-full px-4 py-1 '>
                {/* Prices */}
                
                <button onClick={()=> filterPrice('$')}  className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white'>$</button>
                <button onClick={()=> filterPrice('$$')}  className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white'>$$</button>
                <button onClick={()=> filterPrice('$$$')}   className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white '>$$$</button>
                <button onClick={()=> filterPrice('$$$$')} className='rounded-full border p-2 min-w-[70px] cursor-pointer border-orange-500 text-center hover:bg-orange-500 hover:text-white '>$$$$</button>
                <p className='rounded-full p-2 min-w-[70px] text-center'></p>
                <p className='rounded-full p-2 min-w-[70px]  text-center'></p>

            </div>
            </div>
           
        </div>
        {/* Display Food items */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index) => 
            // Card
            <div key = {index} className=' border shadow-lg hover:scale-105 hover:duration-300 p-4 rounded-xl  ' >
                <img className='rounded-t-xl h-[200px] object-cover w-full ' src={item.image} alt={item.name} />
                {/* Item name */}
                <div className='flex justify-between pt-4 text-black font-bold text-sm md:text-xl'>
                <p>{item.name}</p>
                <p className='rounded-full bg-orange-500 p-2 min-w-[50px] text-center hover:bg-white hover:text-orange-500 cursor-pointer hover:border-orange-500 border  text-white '><span>{item.price}</span></p>
                </div>    
            </div> )}

        </div>
    </div>
  )
}

export default Food