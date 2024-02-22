import React from 'react'
import logo from "../../assets/imgs/Mask group.png"
const home = () => {
    return (
        <div className=' bg-black h-full'>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/749c7892e93dae7e49a25aa44bcd113aba2a5498821c96886e520a53ec71a690?"
                className=" mx-auto"
            />
            <div className=" flex flex-col justify-center items-center">
                <img className=' w-12' src={logo} alt="logo" />
                <h1 className=' text-white mt-14 text-5xl font-medium tracking-tighter text-center bg-clip-text leading-[65px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]'>Get what you
                    want twice
                    as fast.</h1>
                
                <main>
                    <button aria-label="Let's Go">
                        <div>
                            <span class="inner">
                                <div class="particles" aria-hidden="true"></div>
                                <span class="text">Let's Go</span>
                                <span class="halo" aria-hidden="true"></span>
                            </span>
                        </div>
                        <span class="shadow" aria-hidden="true"></span>
                    </button>
                </main>


                <div id="info-box" data-info-chrome="Rendering in Chrome" data-info-safari="Rendering in Safari" data-info-firefox="Rendering in Firefox" data-presentation-width="50vw" data-presentation-height="50vh" data-inspiration="https://twitter.com/adrienrochet/status/1642127496823930882" data-hidden-onLoad="false"></div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6dad51d54783c83df5d98e040a810b86fc984f01d096e745e0c6187b7332115?"
                className=" mx-auto self-stretch mt-20  aspect-[9.09] max-md:mt-10 max-md:max-w-full"
            />
        </div>
    );
};

export default home; 

// {/* <button className=' bg-pink-400 mt-4 rounded-md text-2xl p-2 px-8 text-white flex justify-center items-center self-center font-medium'>Lets go</button> */}