import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiOutlineTag  } from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs';
import {LuTruck} from 'react-icons/lu';
import { IoIosHeartEmpty, IoMdHelpCircleOutline   } from 'react-icons/io';
import { IoWalletOutline } from "react-icons/io5";
import {LiaUserFriendsSolid } from 'react-icons/lia';

const Navbar = () => {

const [nav, SetNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
    <div className='flex items-center'>
        <div onClick={()=> SetNav(!nav)} className=' cursor-pointer'>
        <AiOutlineMenu size={30}/>
    </div>
        <h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className=' font-bold  '>Eats</span></h1>
    
    <div className=' hidden lg:flex items-center bg-gray-200 rounded-full p-2 text-[15px]'>
        <p className=' bg-black text-white  rounded-full p-2'>Delivery</p>
        <p className='p-2'>Pickup</p>
    </div>
    </div>
    {/* Search bar */}
    <div className='flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[400] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input type="text" className="bg-transparent p-2 w-full focus:outline-none" placeholder='Search Foods'/>

        
    </div>
    {/* Cart button */}
    <button className='bg-black hidden text-white md:flex items-center py-2 justify-between rounded-full '>
            <BsFillCartFill size={20} className='mr-2'/>Cart
        </button>
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-full z-10 top-0 left-0'> 
        </div> : ''}
        {/* Side Drawer */}
        <div className= {nav ? ' fixed bg-white w-[300px] h-full z-10  top-0 left-0 duration-300 ' : ' fixed bg-white w-[300px] h-full z-10  top-0 left-[-100%] duration-300 '}  >
            <AiOutlineClose onClick={()=> SetNav(false)} size={30} className=' left-60 mx-3 absolute top-4 cursor-pointer ' />
            <h2 className='text-3xl p-4 '>Best <span className=' font-bold '>Eats</span></h2>
            <nav>
                <ul className='FLEX flex-col text-gray-800 p-4 '>
                    <li className='py-4 text-2xl flex   '>
                       <LuTruck   size={30} className=' mr-4 '/> Orders  
                    </li>
                    <li className='py-4 text-2xl flex   '>
                       <IoIosHeartEmpty  size={30} className=' mr-4 '/> Favorites  
                    </li>
                    <li className='py-4 text-2xl flex   '>
                       <IoWalletOutline  size={30} className=' mr-4 '/> Wallet  
                    </li>
                    <li className='py-4 text-2xl flex   '>
                       <IoMdHelpCircleOutline  size={30} className=' mr-4 '/> Help  
                    </li>
                    <li className='py-4 text-2xl flex   '>
                       <AiOutlineTag  Tag  size={30} className=' mr-4 '/> Promotions  
                    </li>
                    <li className='py-4 text-2xl flex   '>
                       <LiaUserFriendsSolid  size={30} className=' mr-4 '/> Invite Friends  
                    </li>
                    
                </ul>
            </nav>

        </div>
        

    </div>
  )
}

export default Navbar;