import React from 'react';
import Image from 'next/image';

const cardData = [
    { label: '4k+', description: 'Customers' },
    { label: '1000+', description: 'Destinations' },
    { label: '24/7', description: 'Support' },
    { label: '100%', description: 'Dedication' },
];

const AboutUs = () => {
    return (
        <div className="bg-white py-16 px-8 md:px-16 lg:px-32 text-gray-800">
            <div className="flex flex-col lg:flex-row items-center mb-12">
                <div className="relative w-80 h-100 lg:w-80 lg:h-80 mb-6 lg:mb-0 lg:mr-8">
                    <Image 
                        src="/header_image.png" 
                        alt="Travel" 
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl font-bold mb-4">WE ARE THE BEST FOR YOU</h2>
                    <h3 className="text-2xl font-semibold mb-4">Unlock Your Dream Destination</h3>
                    <p className="text-lg">
                        We are dedicated to making your journey of discovery truly unforgettable. Our team of passionate travel experts is here to assist you in finding the destination of your dreams.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cardData.map((card, index) => (
                    <CustomCard key={index} label={card.label} description={card.description} />
                ))}
            </div>
        </div>
    );
};

export default AboutUs;

type CustomCardProps = {
    label: string;
    description: string;
};

const CustomCard: React.FC<CustomCardProps> = ({ label, description }) => {
    return (
        <div className="bg-orange-100 p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-extrabold text-[#F85E9F]">{label}</h4>
            <p className="text-sm text-gray-800">{description}</p>
        </div>
    );
}; 
