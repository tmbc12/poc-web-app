import React from 'react'
import Logo from "../../assets/imgs/Mask group.png"
import { Home, Search, LibraryBig, LogIn } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='  h-screen w-64 bg-[#4b1f5252] text-white'>
      <div className=' flex items-center justify-center mt-10 '>
        <a href="/">
          <img src={Logo} alt="" className=' w-12' />
        </a>
      </div>
      <div className=' pl-5 mt-5'>
        <a href="/">
          <div className=' flex gap-3 text-white hover:bg-gray-300 hover:bg-opacity-15 p-2 rounded-2xl'>
            <Home size={24} color="#fff" />
            <h4 className=' font-medium'>Home</h4>
          </div>
        </a>
        <a href="/search">
          <div className=' flex gap-3 text-white mt-3 hover:bg-gray-300 hover:bg-opacity-15 p-2 rounded-2xl'>
            <Search size={24} color="#fff" />
            <h4 className=' font-medium'>Discover</h4>
          </div>
        </a>
        <div className=' flex gap-3 text-white mt-3 cursor-pointer hover:bg-gray-300 hover:bg-opacity-15 p-2 rounded-2xl'>
          <LibraryBig size={24} color="#fff" />
          <h4 className=' font-medium'>Library</h4>
        </div>
        <div className=' flex gap-3 text-white mt-3 cursor-pointer hover:bg-gray-300 hover:bg-opacity-15 p-2 rounded-2xl'>
          <LogIn size={24} color="#fff" />
          <h4 className=' font-medium'>Sign ine</h4>
        </div>
      </div>
      <div className=' flex items-center justify-center mt-5'>
        <button className=' bg-[#FB74FF] text-white p-1 px-14 rounded-2xl font-bold'>Sign Up</button>
      </div>
    </div>
  )
}

export default Sidebar
