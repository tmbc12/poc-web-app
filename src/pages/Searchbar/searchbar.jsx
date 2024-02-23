import React from 'react';
import { Link2 } from 'lucide-react';
import Sidebar from '../../components/Sidebar/Sidebar';

const Searchbar = () => {



    return (
        <div className=' flex '>
            <Sidebar />
            <div className=' bg-[#4b1f5252] h-screen w-screen border-l-4 border-gray-800 border-opacity-40 '>
                <div className=' flex flex-col items-center justify-start pt-20'>
                    <h1 className=' text-white text-3xl'>Discover personalized online shopping.</h1>
                    <div className=' flex flex-col justify-center items-center mt-9 gap-10'>
                        <h5 className=' text-white '>Example Prompts</h5>
                        <div className=' grid grid-cols-3 grid-rows-1 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1'>
                            <div className=' bg-gray-500 bg-opacity-10 w-[250px] p-1 border-[1px] border-gray-500 rounded-2xl'>
                                <div className=' flex gap-3 bg-gray-500 bg-opacity-10 w-36 p-2 border-[1px] border-gray-500  justify-center items-center mt-5 rounded-3xl'>
                                    <img src="https://mcusercontent.com/4d495ae0bbe9396d5b9e37d4a/images/d422e661-0823-e11e-0c9b-bd4a40260c95.png" alt="" />
                                    <h2 className=' text-white font-medium'>tag heading</h2>
                                </div>
                                <h3 className=' text-white mt-5 pl-3'>Trending smart watches 2024</h3>
                            </div>
                            <div className=' bg-gray-500 bg-opacity-10 w-[250px] p-2 border-[1px] border-gray-500 rounded-2xl'>
                                <div className=' flex gap-3 bg-gray-500 bg-opacity-10 w-36 p-2 border-[1px] border-gray-500 justify-center items-center mt-5 rounded-3xl'>
                                    <img src="https://mcusercontent.com/4d495ae0bbe9396d5b9e37d4a/images/d422e661-0823-e11e-0c9b-bd4a40260c95.png" alt="" />
                                    <h2 className=' text-white font-medium'>tag heading</h2>
                                </div>
                                <h3 className=' text-white mt-5 pl-3'>Portable vacuum cleaner</h3>
                            </div>
                            <div className=' bg-gray-500 bg-opacity-10 w-[250px] p-2 border-[1px] border-gray-500 rounded-2xl'>
                                <div className=' flex gap-3 bg-gray-500 bg-opacity-10 w-36 p-2 border-[1px] border-gray-500 justify-center items-center mt-5 rounded-3xl'>
                                    <img src="https://mcusercontent.com/4d495ae0bbe9396d5b9e37d4a/images/d422e661-0823-e11e-0c9b-bd4a40260c95.png" alt="" />
                                    <h2 className=' text-white font-medium'>tag heading</h2>
                                </div>
                                <h3 className=' text-white mt-5 pl-3'>Kurti sets under 600</h3>
                            </div>
                        </div>
                        <div className=' mt-40'>
                            <div className=' flex bg-gray-800 bg-opacity-15 border-[1px] border-gray-500 p-3 rounded-full shadow-md'>
                                <input type="text" placeholder='search' className=' w-[400px] bg-transparent' />
                                <div className=' flex bg-white rounded-full py-1.5 px-4 w-28 gap-2'>
                                    <img  src="https://mcusercontent.com/4d495ae0bbe9396d5b9e37d4a/images/4d8cc4cc-96df-ab19-3c93-78214354624b.png" alt="" />
                                    <button className=' text-black font-semibold bg-white'>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar

