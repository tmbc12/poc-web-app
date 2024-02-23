import React from 'react';
import { Search } from 'lucide-react';
import Sidebar from '../../components/Sidebar/Sidebar';
// import { searchData } from "./search.data.js";

const Searchbar = () => {

    // const [items, setItems] = useState(searchData);


    return (
        <div className=' flex '>
           <Sidebar />
            <div className=' bg-[#4b1f5252] h-screen border-l-4 border-gray-800 border-opacity-40 '>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/749c7892e93dae7e49a25aa44bcd113aba2a5498821c96886e520a53ec71a690?" alt=''
                    className=" mx-auto w-[60%]"
                />
                <div className=' mt-10'>
                    <div className=' mx-auto p-14 flex flex-col justify-center items-center w-[700px] bg-gray-200 bg-opacity-10 rounded-3xl bg-transparent'>
                        <div className=" flex justify-center items-center  gap-10 ">
                            <div className=' flex items-center justify-center gap-6 border-[1px] border-gray-400 rounded-lg'>
                                <Search color='white' className=' ml-3' />
                                <input type="text" placeholder='Search' className=' w-[500px] p-3 bg-transparent text-white' />
                            </div>
                        </div>

                        <div className=' flex justify-center items-center gap-20 mt-5'>
                            <h1 className=' text-white text-[10px]'>Try asking for :</h1>
                            <div className=' flex gap-2'>
                                <div className=' flex flex-col text-white gap-3'>
                                    <a href="/productpage">
                                        <button className=' bg-gray-100 bg-opacity-15 text-xs p-1 px-8 rounded-3xl transition duration-300 hover:scale-105'>T-Shirts</button></a>
                                    <button className=' bg-gray-100 bg-opacity-15 text-xs p-1 px-8 rounded-3xl transition duration-300 hover:scale-105'>Hoodies</button>
                                </div>
                                <div className=' flex flex-col text-white gap-3'>
                                    <button className=' bg-gray-100 bg-opacity-15 text-xs p-1 px-8 rounded-3xl transition duration-300 hover:scale-105'>Nike Shoes</button>
                                    <button className=' bg-gray-100 bg-opacity-15 text-xs p-1 px-8 rounded-3xl transition duration-300 hover:scale-105'>Mens Shirts</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6dad51d54783c83df5d98e040a810b86fc984f01d096e745e0c6187b7332115?" alt=''
                    className=" mx-auto mt-24 w-[60%] "
                />
            </div>
        </div>
    )
}

export default Searchbar

//  {/* {items.map((item) =>(
//                 <div key={item.id} className=' grid grid-cols-3 grid-rows-2 gap-5'>
//                     <button className=' text-white'>{item.title}</button>
//                 </div>
//             ))} */}