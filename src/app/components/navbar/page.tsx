"use client"
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from '@/components/ui/drawer';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("home");

    const navbarItems = [
        { value: "home", label: "Home" },
        { value: "about", label: "About" },
        { value: "destinations", label: "Destinations" },
        { value: "packages", label: "Packages" },
        { value: "blogs", label: "Blogs" },
        { value: "contact_us", label: "Contact us" },
    ];

    return (
        <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white text-black">
            <div className="flex items-center justify-between w-full md:w-auto">
                <h1 className="font-bold text-xl">Global Tours & Travels</h1>
                <Drawer>
                    <DrawerTrigger asChild>
                        <button className="md:hidden text-2xl">
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className="fixed inset-0 bg-white z-50 h-screen">
                        <DrawerHeader className="flex justify-between items-center p-4">
                            <DrawerClose asChild>
                            </DrawerClose>
                        </DrawerHeader>
                        <div className="flex flex-col items-center space-y-4 p-4 h-full">
                            {navbarItems.map(item => (
                                <a
                                    key={item.value}
                                    href={`#${item.value}`}
                                    className={`hover:underline text-2xl ${activeItem === item.value ? 'text-[#222831] font-bold' : 'text-[rgba(25, 24, 37, 0.75)]'}`}
                                    onClick={() => setActiveItem(item.value)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
            <div className="hidden md:flex space-x-8">
                {navbarItems.map(item => (
                    <a
                        key={item.value}
                        href={`#${item.value}`}
                        className={`hover:underline text-base ${activeItem === item.value ? 'text-[#222831] font-bold' : 'text-[rgba(25, 24, 37, 0.75)]'}`}
                        onClick={() => setActiveItem(item.value)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;