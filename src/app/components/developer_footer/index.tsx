import React from 'react';
import { AtSymbolIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';

const DeveloperFooter = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 md:w-1/3 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">Developed by Kashif Deshmukh</h2>
                        <p className="text-gray-400">Senior Frontend Developer</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                        <div className="flex items-center space-x-2">
                            <UserIcon className="h-6 w-6 text-gray-400" />
                            <span className="text-gray-400">Kashif Deshmukh</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AtSymbolIcon className="h-6 w-6 text-gray-400" />
                            <a href="mailto:info@globaltours.com" className="text-gray-400 hover:text-white transition-colors">kashifdeshmukh786@gmail.com</a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <PhoneIcon className="h-6 w-6 text-gray-400" />
                            <a href="tel:+918655733476" className="text-gray-400 hover:text-white transition-colors">+91 7058578937</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default DeveloperFooter;