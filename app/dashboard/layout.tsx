"use client";
import { Children } from "react";
import NavbarDashboard from "../components/NavbarDashboard";
import Sidebardashboard from "../components/Sidebardashboard";


const DashboardLayout = ({children}:{children:React.ReactNode;}) => {
    return(
        <div className="hidden md:flex h-full w-full flex-col fixed inset-y-0 z-50">
            <NavbarDashboard/>
            <div className="flex w-full">
                <aside className="w-72 bg-gray-200">
                    <Sidebardashboard/>  
                </aside>
                <main className="flex-1 pl-6 justify-center h-full w-full bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout