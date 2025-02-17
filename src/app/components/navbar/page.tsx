"use client"
import React, { useState } from 'react';
import { AtSymbolIcon, Bars3Icon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from '@/components/ui/drawer';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("home");

    const navbarItems = [
        { value: "", label: "Home" },
        { value: "about", label: "About" },
        { value: "services", label: "Services" },
    ];

    return (
        <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white text-black">
            <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={60} height={60} />
                </Link>
                <Drawer>
                    <DrawerTrigger asChild>
                        <button className="md:hidden text-2xl">
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className="fixed inset-0 bg-white z-50 h-screen">
                        <DrawerHeader className="flex justify-between items-center p-4">
                        </DrawerHeader>
                        <div className="flex flex-col items-center justify-between h-full p-4 space-y-6">
                            {/* Navigation Links */}
                            <div className="flex flex-col items-center space-y-4 w-full">
                                {navbarItems.map((item) => (
                                    <DrawerClose asChild key={item.value}>
                                        <Link
                                            href={`/${item.value}`}
                                            className={`text-2xl hover:underline ${activeItem === item.value
                                                ? 'text-[#222831] font-bold'
                                                : 'text-[rgba(25, 24, 37, 0.75)]'
                                                }`}
                                            onClick={() => setActiveItem(item.value)}
                                            aria-current={activeItem === item.value ? 'page' : undefined}
                                        >
                                            {item.label}
                                        </Link>
                                    </DrawerClose>
                                ))}
                            </div>

                            {/* Contact Information */}
                            <div className="w-full p-4 text-center">
                                <h2 className="text-xl font-bold mb-4">Contact Us</h2>

                                {/* Contact Details */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center">
                                        <UserIcon className="h-6 w-6 text-gray-600 mr-2" />
                                        <span className="text-gray-600">Faizan Purkar</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <AtSymbolIcon className="h-6 w-6 text-gray-600 mr-2" />
                                        <a
                                            href="mailto:info@globaltours.com"
                                            className="text-gray-600 hover:text-gray-800 transition-colors"
                                        >
                                            info@globaltours.com
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <PhoneIcon className="h-6 w-6 text-gray-600 mr-2" />
                                        <a
                                            href="tel:+918655733476"
                                            className="text-gray-600 hover:text-gray-800 transition-colors"
                                        >
                                            +91 8655733476
                                        </a>
                                    </div>
                                    <div className="border-t border-gray-300 pt-4 mt-4">
                                        <p className="text-gray-600">
                                            &copy; 2024-25 Global Tours & Travels. All rights reserved.
                                        </p>
                                    </div>
                                </div>

                                {/* Footer */}
                            </div>
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