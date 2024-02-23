import React from 'react'
import Tabs from "../Tabs/tabs"
import { SendHorizontal } from 'lucide-react';
const SingleProductPage = () => {
  return (
    <div className=' container mx-auto'>
      <h1 className=' text-white text-2xl mt-6 pl-20 w-[40%]'>Men Checkered Round Neck Cotton Blend Black T-Shirt</h1>
      <div className=' pl-20 max-sm:pl-4 mt-10'>
        <img src="https://mcusercontent.com/4d495ae0bbe9396d5b9e37d4a/images/908d6eeb-63d7-7a0a-2fce-15f2239cbdd4.png" alt="" />
      </div>
      <div className=' flex pl-40 mt-9 max-sm:pl-0 max-sm:p-3'>
        <Tabs />
      </div>
      <div className=' mt-4 pl-20'>
        <button className=' bg-white py-1 px-32 rounded-2xl font-bold'>Buy Now</button>
        <div className=' flex gap-2 mt-4'>
          <input className=' p-3 bg-black bg-opacity-25 w-[260px] rounded-3xl' type="text" placeholder='Search more about your product' />
          <div className=' bg-white w-12 rounded-3xl p-3 cursor-pointer'>
            <SendHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage
