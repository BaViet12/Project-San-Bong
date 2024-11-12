"use client";
import { Children } from "react";
import Sidebar from "../dashboard/_components/sidebar";
import Sidebardashboard from "../components/Sidebar";


const DashboardLayout = ({children}:{children:React.ReactNode;}) => {
    return(
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
            <Sidebar/>
            <div className="flex w-full pt-16">
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