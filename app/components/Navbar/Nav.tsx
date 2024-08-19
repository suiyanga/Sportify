import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/public/images/sports3.png';
import { BiMenu } from 'react-icons/bi';


interface Props {
    openNav:() => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="h-[12vh] shadow-md bg-neutral-900">
        <div className="flex items-center justify-between h-[100%] w-[90%] mx-auto">
            {/* Logo */}
            <Image src={Logo} alt="logo" width={180} height={180}/>
            {/* nav links */}
            <ul className="hidden lg:flex items-center space-x-16">
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200 text-white animate-shine">
                    <Link href="#"> Home </Link>
                </li>
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200 text-white animate-shine">
                    <Link href="#"> About </Link>
                </li>
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200 text-white animate-shine">
                    <Link href="#"> News </Link>
                </li>
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200 text-white animate-shine">
                    <Link href="#"> Post </Link>
                </li>
                <li className="text-[18px] font-medium uppercase hover:text-cyan-500 transition-all duration-200 text-white animate-shine">
                    <Link href="#"> Contact </Link>
                </li>
            </ul>
            {/* join button */}
            <div className="flex items-center space-x-3">
                <button className="px-6 py-2 sm:px-8 sm:py-2.5 transition-all duration-300 bg-cyan-600 hover:bg-cyan-800 text-white font-semibold"> 
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