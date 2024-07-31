import React from 'react';
import { BiCalendar, BiUser } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className=" relative h-[88vh] bg-[url('/images/football2.jpg')] bg-cover bg-center opacity-70">
        {/*dark overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.68)] "></div>    
        <div className="relative z-[10] flex items-center h-[100%] text-white">
            <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                {/* text content */}
                <div>
                    <p className="sm:px-8 py-1 mb-[1rem] text-[12px] sm:text-[16px] bg-amber-600 text-white w-fit uppercase">
                        Athletics
                    </p>
                    <h1 className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[45px] text-white leading-[2rem] md:leading-[3.5rem] font-medium">
                        THE PARIS OLYMPICS 2024: WATCH ALL GAMES HERE
                    </h1>
                    <div className="flex items-center space-x-14">
                        <div className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]">
                            <BiCalendar className="w-[1rem] h-[1rem] text-white" />
                            <p className="text-[11px] sm:text-[16px] text-white uppercase">
                                July 31, 2024
                            </p>
                        </div>
                        <div className="flex items-center space-x-2 mt-[1rem] sm:mt-[2rem]">
                            <BiUser className="w-[1rem] h-[1rem] text-white" />
                            <p className="text-[11px] sm:text-[16px] text-white uppercase">
                                By Suiyanga.Dev
                            </p>
                        </div>
                    </div>
                    <div className="mt-[2.4rem] flex items-center space-x-6">
                        <button className="sm:px-8 sm:py-2.5 px-4 py-2 bg-amber-600 hover:bg-amber-900 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-white">
                            Watch Highlights
                        </button>
                        <button className="sm:px-8 sm:py-2.5 px-4 py-2 bg-white hover:bg-gray-300 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-black">
                            Learn More
                        </button>
                    </div>
                </div>
                {/* play button */}
                <div className="w-[10rem] lg:ml-auto h-[10rem] rounded-full bg-amber-600 hover:bg-black transition-all duration-200 cursor-pointer sm:flex flex-col items-center justify-center hidden">
                    <FaPlay className="w-[3rem] h-[3rem] text-white" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero