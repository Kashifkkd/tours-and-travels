import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type DestinationCardPropsType = {
    location: string;
    rating: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

const DestinationCard = ({ location, rating, name, price, description, image }: DestinationCardPropsType) => {
    return (
        <Card className="rounded-2xl overflow-hidden bg-white" >
            <div className="relative w-full h-[15rem]">
                <Image className="object-cover" src={image} alt={name} layout="fill" />
            </div>

            <CardContent className="py-4 ">
                <CardTitle className="font-bold text-xl">{name}</CardTitle>
                <CardDescription className="text-gray-700 text-base mb-2">{location}</CardDescription>
                <div className="flex items-center mb-6">
                    <StarIcon className="h-5 w-5 text-yellow-500" />
                    <span className="ml-2 text-gray-600">{rating}</span>
                </div>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">${price}</span>
                    <Button>Book Now</Button>
                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Book Now
                    </button> */}
                </div>
            </CardContent>
        </Card>
    );
}

export default DestinationCard;