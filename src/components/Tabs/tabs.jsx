import React from "react";
import TabRender from './tabRender'

export default function App() {
    return (
        <div className=" flex flex-col ">

            <TabRender
                tabs={[
                    {
                        title: "Overview", render: () =>
                            <h2 className=" text-white mt-4 w-[600px] max-sm:w-[300px] max-sm:p-2">
                                Tees Collection specialize in making men's clothes with characteristics of fashionable,comfortable and elegant. To show a kind of fashionable and special dressing style, appear the person's vigorous and vitality personality, and express his active and optimistic attitude of life. Wear our professional design high quality men's shirts, you will become more elegant and fascinating. Our designers are attention to every detail of the design and pursue exquisite sewing process.
                            </h2>
                    },

                    {
                        title: "Specifications", render: () =>
                            <div className=" text-white mt-3 ">
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 ">
                                    <h2>Type</h2>
                                    <h2 className=" w-40">Mandarin Collar</h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2>Sleeve</h2>
                                    <h2 className=" w-40">Full Sleeve</h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2>Fit</h2>
                                    <h2 className=" w-40">Slim </h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2>Fabric</h2>
                                    <h2 className=" w-40">Pure Cotton</h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2 className=" w-40">Neck Type</h2>
                                    <h2 className=" w-40">Mandarin Collar</h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2>Ideal For</h2>
                                    <h2 className=" w-40">Men  </h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2>Size </h2>
                                    <h2 className=" w-40">S</h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2>Pattern</h2>
                                    <h2 className=" w-40"> Checkered</h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2 className=" w-40">Sleeve Type</h2>
                                    <h2 className=" w-40">Narrow</h2>
                                </div>
                                <div className=" grid grid-cols-2 grid-rows-1 gap-8 w-40 mt-2">
                                    <h2 className=" w-40">Fabric Care</h2>
                                    <h2 className=" w-48"> Machine wash as per tag  </h2>
                                </div>
                            </div>
                    },

                    {
                        title: "Reviews", render: () =>
                            <div className=" text-white mt-5">
                                <div className="flex flex-col max-w-[328px]">
                                    <div className="flex gap-5 justify-between">
                                        <div className="flex flex-col px-5 basis-0">
                                            <div className="text-2xl font-medium text-stone-50">2.0</div>
                                            <div className="flex gap-px px-0.5 mt-">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/532402fc7c4622d442684c39c17eeeb4273277024a7956beaa0cab356ebb557f?"
                                                    className="aspect-square fill-zinc-300 w-[11px]"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c0d4266cccef5485686b96544ec4eabe8bc552c509d2f141974522d8903f284?"
                                                    className="aspect-square fill-zinc-300 w-[11px]"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a061a89b14c69aa9f0f7386aa81806add92a0d7539af866b83d1ef37857c1e45?"
                                                    className="aspect-square fill-white fill-opacity-30 w-[11px]"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1400eb4afefbc45a3075b0ca7c96afff11e3a9720a65d71d4ab642cfd8a7ea50?"
                                                    className="aspect-square fill-white fill-opacity-30 w-[11px]"
                                                />
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c31979cc704631173b15482f622ee51f66051671e11f8bcad3063dab047cabf?"
                                                    className="aspect-square fill-white fill-opacity-30 w-[11px]"
                                                />
                                            </div>
                                            <div className="text-sm font-medium leading-8 text-white text-opacity-70">
                                                28,789,565
                                            </div>
                                        </div>

                                        <div>
                                            <div className=" flex gap-2">
                                                <div class="mb-1 text-base font-medium dark:text-white">5</div>
                                                <div class=" bg-gray-400 rounded-full h-1.5 mb-4 dark:bg-gray-700 w-40 mt-2 ">
                                                    <div class="bg-blue-600 h-1.5 rounded-full dark:bg-white w-20" ></div>
                                                </div>
                                            </div>
                                            <div className=" flex gap-2">
                                                <div class="mb-1 text-base font-medium dark:text-white">4</div>
                                                <div class=" bg-gray-400 rounded-full h-1.5 mb-4 dark:bg-gray-700 w-40 mt-2 ">
                                                    <div class="bg-blue-600 h-1.5 rounded-full dark:bg-white w-12" ></div>
                                                </div>
                                            </div>
                                            <div className=" flex gap-2">
                                                <div class="mb-1 text-base font-medium dark:text-white">3</div>
                                                <div class=" bg-gray-400 rounded-full h-1.5 mb-4 dark:bg-gray-700 w-40 mt-2 ">
                                                    <div class="bg-blue-600 h-1.5 rounded-full dark:bg-white w-8" ></div>
                                                </div>
                                            </div>
                                            <div className=" flex gap-2">
                                                <div class="mb-1 text-base font-medium dark:text-white">2</div>
                                                <div class=" bg-gray-400 rounded-full h-1.5 mb-4 dark:bg-gray-700 w-40 mt-2 ">
                                                    <div class="bg-blue-600 h-1.5 rounded-full dark:bg-white w-5" ></div>
                                                </div>
                                            </div>
                                            <div className=" flex gap-2">
                                                <div class="mb-1 text-base font-medium dark:text-white">1</div>
                                                <div class=" bg-gray-400 rounded-full h-1.5 mb-4 dark:bg-gray-700 w-40 mt-2 ">
                                                    <div class="bg-blue-600 h-1.5 rounded-full dark:bg-white w-32" ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                ]}
            />
        </div>
    );
}