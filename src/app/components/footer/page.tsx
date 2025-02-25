import React from 'react';
import Image from 'next/image';
import { AtSymbolIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between p-4">
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h1 className="text-3xl font-bold">Global Tours & Travels</h1>
                        <p className="mt-2 text-gray-600">Explore the world with us.</p>
                        <div className="flex space-x-6 mt-4">
                            <Link
                                href="https://wa.me/918655733476"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                <Image src="/whatsapp_logo.svg" alt="Whatsapp" width={24} height={24} />
                            </Link>

                            {/* Instagram */}
                            <Link
                                href="https://www.instagram.com/globaltoursandtravels_2023"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                <Image src="/instagram_logo.svg" alt="Instagram" width={24} height={24} />
                            </Link>

                            {/* YouTube */}
                            <Link
                                href="https://www.youtube.com/@GLOBALToursAndTravelByFaizan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                <Image src="/youtube_logo.svg" alt="Youtube" width={24} height={24} />
                            </Link>

                            <Link
                                href="https://www.facebook.com/share/15iF3RBkL5/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-800"
                            >
                                <Image src="/messenger-logo.svg" alt="Facebook Messenger" width={24} height={24} />
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                        <div className="flex items-center mb-2">
                            <UserIcon className="h-6 w-6 text-gray-600 mr-2" />
                            <a className="text-gray-600 hover:text-gray-800">Faizan Purkar</a>
                        </div>
                        <div className="flex items-center mb-2">
                            <AtSymbolIcon className="h-6 w-6 text-gray-600 mr-2" />
                            <a href="mailto:globaltoursandtravel@gmail.com" className="text-gray-600 hover:text-gray-800">globaltoursandtravel@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <PhoneIcon className="h-5 w-5 text-gray-600 mr-2 ml-[3px]" />
                            <a href="tel:+918655733476" className="text-gray-600 hover:text-gray-800">+91 8655733476</a>
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