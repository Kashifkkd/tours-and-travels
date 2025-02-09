import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-4 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between p-4">
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h1 className="text-3xl font-bold">Global Tours & Travels</h1>
                        <p className="mt-2 text-gray-600">Explore the world with us.</p>
                        <div className="flex space-x-6 mt-4">
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <Image src="/instagram_logo.svg" alt="Instagram" width={24} height={24} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <Image src="/youtube_logo.svg" alt="Youtube" width={24} height={24} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <Image src="/messenger-logo.svg" alt="Facebook" width={24} height={24} />
                            </a>
                            {/* <a href="#" className="text-gray-600 hover:text-gray-800">
                                <Image src="/twitter_logo.svg" alt="Twitter" width={24} height={24} />
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 pt-4 text-center">
                    <p className="text-gray-600">&copy; 2024-25 Global Tours & Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;