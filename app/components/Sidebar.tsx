"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



const Sidebardashboard = () => {
  const pathname = usePathname()

  const sidebarLinks = [
    {
        href: "/dashboard",
        label: "Quản Lý Sân Bóng"
    },
    {
      href: "/dashboard/productmanagement",
      label: "Quản Lý Sản Phẩm"
    },
    {
      href: "/dashboard/productstatistics",
      label: "Quản Lý Thống Kê"
    }
  ]

  const isActivePath = (path: string) => {
    return pathname === path
  }
  // const isActive = (pathname === "/dashboard" && href === "dashboard") || pathname === href || pathname?.startsWith(`${href}/dashboard`);
  return (
        <div className='flex flex-col w-30 h-full  bg-slate-950 fixed'>
          <ul className='flex flex-col my-5 mx-10 w-52 h-[640px]'>
          {sidebarLinks.map((link) => (
          <li key={link.href} className='my-5'>
            <Link 
              href={link.href}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                isActivePath(link.href)
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
          </ul>
        </div>
  )
}

export default Sidebardashboard