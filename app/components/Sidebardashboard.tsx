'use client';
import { GiSoccerField } from "react-icons/gi";
import { usePathname, useRouter } from 'next/navigation';
import { GrUserManager } from "react-icons/gr";
import React from 'react'

interface SidebarLink {
    icon: React.ReactElement;
    href: string;
    label:string;
}

const Sidebardashboard: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const sidebarLink:SidebarLink[] = [
        {
            icon:<GiSoccerField />,
            href:"/dashboard/soccermanager",
            label:"Quản lý sân bóng",
        }
    ]
    const isActivePath = (path: string) => pathname === path;

    const handleNavigation = (href: string) => {
        router.push(href);
     };
  return (
    <div className="flex flex-col w-72 h-full bg-green-900 fixed">
      <div className="collapse collapse-arrow w-64 m-6 bg-green-900">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title text-white text-base text-center mb-2  font-medium">
          <div className="absolute left-9 top-4 text-xl"><GrUserManager /></div>
          Quản Lý
        </div>
        <div className="collapse-content">
        <ul className="">
        {sidebarLink.map((link) => (
          <li key={link.href} className="my-5 pl-4">
            <button
              onClick={() => handleNavigation(link.href)}
              className={`block pl-7 pr-7 py-2 rounded-lg transition-colors ${
                isActivePath(link.href)
                  ? "bg-green-800 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
            <div className="absolute left-9">{link.icon}</div> 
            <div className="text-sm">{link.label}</div>
            </button>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebardashboard