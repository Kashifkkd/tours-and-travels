import React from 'react';
// import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from '@heroicons/react/outline';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h1 className="text-3xl font-bold">Global Tours & Travels</h1>
                        <p className="mt-2 text-gray-600">Explore the world with us.</p>
                        <div className="flex space-x-4 mt-4">
                            {/* <a href="#" className="text-gray-600 hover:text-gray-800">
                                <FacebookIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <TwitterIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <InstagramIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">
                                <LinkedinIcon className="h-6 w-6" />
                            </a> */}
                        </div>
                    </div>

                    <div className="md:w-1/3 mt-8 md:mt-0">
                        <h2 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h2>
                        <form className="flex flex-col space-y-2">
                            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md text-gray-800" />
                            <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-300 pt-4 text-center">
                    <p className="text-gray-600">&copy; 2024-25 Global Tours & Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;