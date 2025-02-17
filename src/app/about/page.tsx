import React from 'react';
import Image from 'next/image';
import { AtSymbolIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 py-16 px-8 md:px-16 lg:px-32 text-gray-800">
            <div className="text-center mb-12">
                <div className="relative w-40 h-40 mx-auto mb-4">
                    <Image
                        src="/logo.png"
                        alt="Global Tours and Travels"
                        layout="fill"
                        objectFit="contain"
                        className="mix-blend-multiply"
                    />
                </div>
                <h1 className="text-4xl font-bold mb-4">Global Tours & Travels</h1>
                <p className="text-lg">We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="flex items-center justify-center mb-4">
                    <UserIcon className="h-6 w-6 text-gray-600 mr-2" />
                    <p className="text-gray-700">Faizan Purkar</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <PhoneIcon className="h-6 w-6 text-gray-600 mr-2" />
                    <a href="tel:+918655733476" className="text-gray-700 hover:text-gray-900">+91 86557 33476</a>
                </div>
                <div className="flex items-center justify-center">
                    <AtSymbolIcon className="h-6 w-6 text-gray-600 mr-2" />
                    <a href="mailto:info@globaltours.com" className="text-gray-700 hover:text-gray-900">info@globaltours.com</a>
                </div>
            </div>
        </div>
    );
}

export default About;