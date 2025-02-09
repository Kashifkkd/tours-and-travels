import Image from 'next/image';
import React from 'react';

const Categories = () => {
    const categories = [
        {
            name: "Adventure",
            description: "Explore thrilling adventures around the world.",
            image: "/adventure.jpeg"
        },
        {
            name: "Beach",
            description: "Relax on the most beautiful beaches.",
            image: "/beach.jpg"
        },
        {
            name: "Cultural",
            description: "Discover rich cultural heritage sites.",
            image: "/cultural.jpeg"
        },
        // {
        //     name: "Wildlife",
        //     description: "Witness the beauty of wildlife in their natural habitat.",
        //     image: "/wildlife.jpeg"
        // }
    ];

    return (
        <div className="p-4 flex flex-col space-y-4 w-full">
            <div className="flex flex-col pl-[4%] items-center md:items-start">
                <p className="text-[#F85E9F] font-semibold text-base ">
                    EXPLORE OUR TOP CATEGORIES
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-14 py-4">
                {categories.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}
            </div>
        </div>
    );
}

export default Categories

type CategoryCardProps = {
    name: string;
    description: string;
    image: string;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ name, description, image }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="relative w-full h-48 mb-4">
                <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h4 className="text-2xl font-bold mb-2">{name}</h4>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

