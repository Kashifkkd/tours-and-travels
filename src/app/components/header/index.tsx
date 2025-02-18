"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

    const handleScroll = () => {
        window.scrollBy({ top: 1297, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white md:mt-16 p-4">
            <div className="w-full md:w-2/5 p-2 m-4 md:m-16 ">
                <div className="flex items-center space-x-4">
                    {/* <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
                        Travel <span className="text-orange-600">top</span> <span className="text-orange-600 md:block">destination</span> of the world
                    </h1> */}
                    <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
                        Travel <span className="text-orange-600">Top</span> <span className="text-orange-600 md:block">Destinations</span> & get<span className="text-orange-600"> Best Services</span>
                    </h1>
                </div>
                <p className="mt-4 text-base md:text-lg text-center md:text-left">From travel adventures to premium services, we make every moment unforgettable.</p>

                <div className="mt-8 mb-4 flex flex-row md:flex-row items-center md:items-start justify-center md:justify-start space-x-4 ">
                    <Button onClick={handleScroll}>
                        Get Started
                    </Button>
                    <Link href="tel:+918655733476" passHref>
                        <Button variant="secondary">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-3/5">
                <Image
                    src="/header_image_3.png"
                    alt="header-img"
                    width={800}
                    height={800}
                    className="mix-blend-normal object-cover"
                />
            </div>
        </div>
    );
}

export default Header;