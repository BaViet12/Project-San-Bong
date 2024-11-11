import React from 'react'
import { GiSoccerField } from "react-icons/gi";
import { GiSoccerBall } from "react-icons/gi";
import { UserButton , useAuth} from '@clerk/nextjs';
import { TbPlayFootball } from "react-icons/tb";

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full flex justify-evenly items-center bg-white text-black rounded-b-xl  z-10 fixed border-b-2 border-black pb-3'>
        <div className='after:bottom-0 after:left-0 after:bg-orange-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300'>
            <TbPlayFootball className='text-red-600 text-3xl'/>
            <h2 className='text-black font-bold '>H O A M Y</h2>
        </div>
        <nav>
            <ul className=" flex gap-44">
                <li className="hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">Danh Sách Sân</li>
                <li className="hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">
                    <Link href={'/shop'}>Mua sắm</Link>
                </li>
                <li className="hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">Giới thiệu</li>
                <li className="hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">Quy định</li>
                <li className="hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:bg-orange-500 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">Liên hệ</li>
            </ul>
        </nav>
        <ul className='flex gap-5'>
            <li className='rounded px-5 py-3 bg-red-700 hover:bg-amber-300 '>Đăng nhập</li>
            <li className='rounded px-5 py-3 bg-green-500 hover:bg-amber-300'>Đăng ký  </li>
        </ul>
    </div>
  )
}

export default Navbar