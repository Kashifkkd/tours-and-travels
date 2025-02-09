"use client"

import React from 'react';
import CustomSlider from '../custom_slider';
import Image from 'next/image';


const reviews = [
    {
        name: "John Doe",
        rating: 5,
        comment: "Amazing experience! Highly recommend.",
        image: "/person_image.jpg"
    },
    {
        name: "Jane Smith",
        rating: 4,
        comment: "Great service and friendly staff.",
        image: "/person_image.jpg"

    },
    {
        name: "Sam Wilson",
        rating: 5,
        comment: "A trip to remember! Everything was perfect.",
        image: "/person_image.jpg"

    },
    {
        name: "Lisa Brown",
        rating: 4,
        comment: "Good value for money. Will book again.",
        image: "/person_image.jpg"

    },
    {
        name: "Michael Johnson",
        rating: 5,
        comment: "Exceptional service and beautiful destinations.",
        image: "/person_image.jpg"

    }
];

const Reviews = () => {
    return (
        <div className="p-4 flex flex-col space-y-4 w-full mt-6">
            <div className="text-center">
                <p className="text-[#F85E9F] font-semibold text-base">
                    CUSTOMER REVIEWS
                </p>
                <h2 className="text-3xl font-bold text-gray-900">
                    What Our Clients Say
                </h2>
            </div>

            <CustomSlider>
                {reviews.map((review, index) => (
                    <div key={index} className="p-2 md:p-14">
                        <ReviewCard {...review} />
                    </div>
                ))}
            </CustomSlider>
        </div>
    );
}

export default Reviews;

type ReviewCardProps = {
    name: string;
    rating: number;
    comment: string;
    image: string;
};


const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, comment, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
                <div className="relative w-24 h-24 mr-8">
                    <Image src={image} alt={name} layout="fill" className="rounded-full object-cover" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <div className="flex items-center">
                        {[...Array(rating)].map((_, i) => (
                            <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.175 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.343 9.397c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-gray-700">{comment}</p>
        </div>
    );
};
