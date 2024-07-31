import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/public/images/sportify.svg';
import { BiMenu } from 'react-icons/bi';


interface Props {
    openNav:() => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="h-[12vh] shadow-md">
        <div className="flex items-center justify-between h-[100%] w-[90%] mx-auto">
            {/* Logo */}
            <Image src={Logo} alt="logo" width={150} height={150}/>
            {/* nav links */}
            <ul className="hidden lg:flex items-center space-x-16">
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200">
                    <Link href="#"> Home </Link>
                </li>
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200">
                    <Link href="#"> About </Link>
                </li>
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200">
                    <Link href="#"> News </Link>
                </li>
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200">
                    <Link href="#"> Post </Link>
                </li>
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200">
                    <Link href="#"> Contact </Link>
                </li>
            </ul>
            {/* join button */}
            <div className="flex items-center space-x-3">
                <button className="px-6 py-2 sm:px-8 sm:py-2.5 transition-all duration-300 bg-teal-600 hover:bg-teal-800 text-white font-semibold"> 
                    Join Now 
                </button>
                {/*menu */}
                <BiMenu 
                onClick={openNav}
                className="w-[2rem] h-[2rem] text-amber-600 lg:hidden" />
            </div>
          </div>
        </div>
  )
}

export default Nav;