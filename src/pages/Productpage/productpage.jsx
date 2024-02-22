import React, { useState } from 'react'
import { productpageData } from './productpage.Data';

const Productpage = () => {
    const [items, setItems] = useState(productpageData);
    return (
        <div>
            <div>
                <div className=' container mx-auto p-2 flex justify-between items-center mt-10 max-md:flex-col max-md:justify-start max-md:items-start'>
                    <h1 className=' text-white font-extrabold text-2xl'>List of Black T- shirt</h1>
                    <div className=' flex justify-between gap-5 items-center text-white max-sm:gap-1 max-md:mt-3'>
                        <button className=' bg-gray-600 bg-opacity-55 p-2 px-4 rounded-3xl font-medium'>Lowest Price</button>
                        <button className=' bg-gray-600 bg-opacity-55 p-2 px-4 rounded-3xl font-medium'>Top Rated</button>
                        <button className=' bg-gray-600 bg-opacity-55 p-2 px-4 rounded-3xl font-medium'>Top Picks</button>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-4 grid-rows-3 gap-4 justify-center items-center p-10 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center '>
                {items.map((item) => (
                    <div key={item.id} className=' flex gap-5 justify-center items-center max-sm:items-center max-sm:justify-center '>
                        <div className="flex overflow-hidden relative flex-col shadow-2xl aspect-[0.72] max-w-[329px]">
                            <img
                                loading="lazy"
                                src={item.image}
                                className="object-cover absolute inset-0 w-[250px]"
                            />
                            <div className=" flex relative justify-between items-center px-4 pr-4 pt-5 pb-10 rounded-none gap-8">
                                <div className="flex flex-col flex-1 self-start mt-1.5">
                                    <h1 className="text-base font-medium text-stone-50">{item.name}</h1>
                                    <div className="flex gap-0.5 mt-4">
                                        <div className="bg-stone-50 h-[3px] rounded-[30px] w-[25px] cursor-pointer" />
                                        <div className="bg-white bg-opacity-50 h-[3px] rounded-[30px] w-[25px] cursor-pointer" />
                                        <div className="bg-white bg-opacity-50 h-[3px] rounded-[30px] w-[25px] cursor-pointer" />
                                        <div className="bg-white bg-opacity-50 h-[3px] rounded-[30px] w-[25px] cursor-pointer" />
                                    </div>
                                </div>

                                <div className="flex gap-3  px-2 py-1 text-sm font-medium leading-7 whitespace-nowrap rounded-3xl bg-neutral-900 text-stone-50">
                                    <h2 className="my-auto">{item.ratting}</h2>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bb12e0af2b86ddc0cca6c3505f8707429c7236fb281b1aad9cbf0512df7c7ff?"
                                        className="aspect-square w-[18px]"
                                    />
                                </div>
                            </div>

                            <div className="flex relative flex-col px-5 pt-3 pb-5 w-full rounded-none mt-16">
                                <h2 className="relative self-start text-xs font-medium text-stone-300">
                                    {item.brand}
                                </h2>
                                <h2 className="text-md w-56 font-medium text-stone-50">
                                    {item.description}
                                </h2>
                                <div className="flex gap-1 mt-1 justify-between items-center w-56">
                                    <div className="flex flex-col self-start">
                                        <h4 className="text-x text-white font-bold">Special price</h4>
                                        <p className=" mt-0.5 text-base font-bold text-stone-50">₹{item.price}</p>
                                    </div>
                                    <button className=" bg-white px-3 py-1 rounded-3xl font-semibold">
                                        Shop now
                                    </button>
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
