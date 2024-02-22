import React from 'react'
import logo from "../../assets/imgs/Mask group.png"
const home = () => {
    return (
        <div className=' bg-black h-full'>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/749c7892e93dae7e49a25aa44bcd113aba2a5498821c96886e520a53ec71a690?"
                className="self-stretch w-full aspect-[9.09] max-md:max-w-full"
            />
            <div className=" flex flex-col justify-center items-center">
                <img className=' w-12' src={logo} alt="logo" />
                <h1 className=' text-white mt-14 text-5xl font-medium tracking-tighter text-center bg-clip-text leading-[65px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]'>Get what you
                    want twice
                    as fast.</h1>
                <button className=' bg-pink-400 mt-4 rounded-md text-2xl p-4 px-8 text-white flex justify-center items-center self-center'>Lets go</button>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6dad51d54783c83df5d98e040a810b86fc984f01d096e745e0c6187b7332115?"
                className="self-stretch mt-20 w-full aspect-[9.09] max-md:mt-10 max-md:max-w-full"
            />
        </div>
    );
};

export default home; 