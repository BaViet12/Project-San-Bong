'use client'
import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";

interface NhaCungCap {
    id:number;
    Ten:string;
}
async function getData() {
    const res = await fetch("http:localhost:3000/api/products/nhacungcap");
    if(!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}

const Navbar = async () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const data = await getData();
    console.log(data);
    const nhacungcap = data.nhacungcap;
  return (
    
    <div className=''>
        <div className='flex justify-between text-white bg-slate-800 h-10 px-10 items-center'>
            <p className=''>CAM KẾT HÀNG CHÍNH HÃNG</p>
            <div className='flex gap-4 items-center'>
                <VscAccount className='text-2xl' />
                <p>Tài khoản</p>
            </div>
        </div>
        <div className='flex justify-between items-center bg-slate-800'>
            <img src="https://theme.hstatic.net/1000061481/1001035882/14/logo.png?v=2010" alt="logo" className='w-[350px]'/>
            <div className='mr-48 gap-4 py-2'>
                <input type="text" name="" id="" className="bg-red-100 w-[550px] rounded-md"/> 
                <button className='text-white ml-2 bg-yellow-700 rounded-md px-5'>Tìm kiếm</button>
            </div>
                <FiShoppingCart className='mr-10 text-white text-3xl'/>
        </div>
        <div className='bg-slate-800 text-white pb-4 py-2 '>
            <ul className='flex justify-around font-bold'>
                <li className="hover:text-yellow-700 relative after:absolute after:bottom-0 after:left-0 after:bg-yellow-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">TRANG CHỦ</li>
                <li className="hover:text-yellow-700 relative after:absolute after:bottom-0 after:left-0 after:bg-yellow-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">GIÀY BÓNG ĐÁ</li>
                <li
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)} // Hiển thị khi hover
                    onMouseLeave={() => setIsDropdownOpen(false)} // Ẩn khi rời chuột
                >
                <span className="hover:text-yellow-700 cursor-pointer">
                THƯƠNG HIỆU
                </span>

                    {/* Droplist thương hiệu */}
                    {isDropdownOpen && (
                    <ul className="absolute left-0 top-full mt-2 bg-gray-700 text-white rounded-md shadow-lg w-56">
                        {nhacungcap.length > 0 ? (
                        nhacungcap.map((brand:NhaCungCap) => (
                            <li
                            key={brand.id}
                            className="py-2 px-4 hover:bg-gray-600 cursor-pointer"
                            >
                            {brand.Ten}
                            </li>
                        ))
                        ) : (
                        <li className="py-2 px-4">Không có thương hiệu</li>
                        )}
                    </ul>
                    )}
                </li>

                <li className="hover:text-yellow-700 relative after:absolute after:bottom-0 after:left-0 after:bg-yellow-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">PHỤ KIỆN</li>
                <li className="hover:text-yellow-700 relative after:absolute after:bottom-0 after:left-0 after:bg-yellow-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">DỊCH VỤ</li>
                <li className="hover:text-yellow-700 relative after:absolute after:bottom-0 after:left-0 after:bg-yellow-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">HƯỚNG DẪN</li>
                <li className="hover:text-yellow-700 relative after:absolute after:bottom-0 after:left-0 after:bg-yellow-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300">TIN TỨC</li>
                <li className="hover:text-black relative after:absolute after:bottom-0 after:left-0 after:bg-yellow-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 animate-bounce rounded-lg bg-red-600 px-3">SALE</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar