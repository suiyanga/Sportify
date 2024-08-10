import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
            {/* 1st part */}
            <div>
                <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
                    About Club
                </h1>
                <p className="text-[17px] text-white font-semibold text-opacity-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente quasi sunt! Magnam velit, nostrum repudiandae laudantium, officia inventore 
                    commodi ipsum unde cum qui accusamus est voluptas eligendi dolorum ex.
                </p>
                <div className="mt-[1.5rem] flex items-center space-x-3">
                    <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
                        <FaFacebook className="text-white" />
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-sky-300 rounded-full flex items-center justify-center flex-col">
                        <FaTwitter className="text-white" />
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
                        <FaYoutube className="text-white" />
                    </div>
                    <div className="w-[2.4rem] h-[2.4rem] bg-pink-600 rounded-full flex items-center justify-center flex-col">
                        <FaInstagram className="text-white" />
                    </div>
                </div>
            </div>
            {/* 2nd part */}
            <div>
                <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
                    About Us
                </h1>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    About Club
                </p >
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    Contacts
                </p>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    Price Table
                </p>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    Shop
                </p>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    Our Players
                </p>
            </div>
            {/* 3rd part */}
            <div>
                <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
                    Quick Links
                </h1>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    About Club
                </p >
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    Contacts
                </p>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    Price Table
                </p>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    Shop
                </p>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    Our Players
                </p>
            </div>
            {/* 4th part */}
            <div>
                <h1 className="text-[22px] text-white font-semibold mb-[1.5rem] uppercase">
                    Get in Touch
                </h1>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase">
                    +254 713 341 586
                </p >
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem]">
                    augustkinya@gmail.com
                </p>
                <p className="text-[15px] w-fit text-white hover:text-teal-400 cursor-pointer text-opacity-30 mb-[0.7rem]">
                    Nairobi, Kenya
                </p>
            </div>
        </div>
        {/* copyright */}
        <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50"> COPYRIGHT BY SUIYANGA.DEV | 2024</h1>
    </div>
  )
}

export default Footer;