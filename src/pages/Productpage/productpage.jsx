import React, { useState } from 'react'
import { productpageData } from './productpage.Data';

const Productpage = () => {
    const [items, setItems] = useState(productpageData);
    return (
        <div>
            <div>
                <div className=' container mx-auto px-10 flex justify-between items-center mt-10 max-md:flex-col max-md:justify-start max-md:items-start'>
                    <h1 className=' text-white font-extrabold text-2xl'>List of Black T- shirt</h1>
                    <div className=' flex justify-between gap-5 items-center text-white max-sm:gap-1 max-md:mt-3'>
                        <button className=' bg-gray-600 bg-opacity-55 p-2 px-4 rounded-3xl font-medium'>Lowest Price</button>
                        <button className=' bg-gray-600 bg-opacity-55 p-2 px-4 rounded-3xl font-medium'>Top Rated</button>
                        <button className=' bg-gray-600 bg-opacity-55 p-2 px-4 rounded-3xl font-medium'>Top Picks</button>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-4 grid-rows-3 gap-4 justify-center items-center p-16 xl:grid-cols-5 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center '>
                {items.map((item) => (
                    <div key={item.id} className=' flex gap-5 justify-center items-center max-sm:items-center max-sm:justify-center '>
                        <div className="flex overflow-hidden relative flex-col shadow-2xl aspect-[0.72] max-w-[329px]">
                            <a href="/singleproduct">
                                <img
                                    loading="lazy"
                                    src={item.image} alt=''
                                    className="object-cover absolute inset-0 w-[250px]"
                                />
                            </a>
                            <div className=" flex relative justify-between items-center px-4 pr-4 pt-5 pb-10 rounded-none gap-20">
                                <div>
                                    <img src={item.img} alt="" className=' w-8' />
                                </div>
                                <div className="flex flex-col flex-1 self-start mt-1.5">
                                    <h1 className="text-base font-medium text-stone-50">{item.name}</h1>
                                    <div className="flex gap-0.5 mt-4">
                                        <div className="bg-stone-50 h-[3px] rounded-[30px] w-[25px] cursor-pointer" />
                                        <div className="bg-white bg-opacity-50 h-[3px] rounded-[30px] w-[25px] cursor-pointer" />
                                        <div className="bg-white bg-opacity-50 h-[3px] rounded-[30px] w-[25px] cursor-pointer" />
                                        <div className="bg-white bg-opacity-50 h-[3px] rounded-[30px] w-[25px] cursor-pointer" />
                                    </div>
                                </div>

                            </div>

                            <div className="flex relative flex-col px-5 pt-3 pb-5 w-full rounded-none mt-16">
                                <div className="flex gap-3 w-16 px-2 text-sm font-medium leading-7 whitespace-nowrap rounded-3xl text-black bg-white">
                                    <h2 className="my-auto">{item.ratting}</h2>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d4b43cc0394ff57a89d8fc17bc98b7d99b40554f232576963f547b9a2f5a0c1?" alt=''
                                        className="aspect-square w-[18px]"
                                    />
                                </div>
                                <h2 className="relative self-start mt-1 text-xs font-medium text-stone-300">
                                    {item.brand}
                                </h2>
                                <h2 className="text-sm w-56 font-medium text-stone-50">
                                    {item.description}
                                </h2>
                                <div className="flex gap-1 mt-1 justify-between items-center w-56">
                                    <div className="flex flex-col self-start">
                                        <h4 className="text-sm text-white font-bold">Special price</h4>
                                        <p className=" mt-0.5 text-xm font-bold text-stone-50">₹{item.price}</p>
                                    </div>
                                    <a href="/singleproduct">
                                        <button className=" bg-white px-3 py-1 rounded-3xl font-semibold text-xs">
                                            Shop now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Productpage
