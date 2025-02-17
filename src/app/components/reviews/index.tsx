"use client"

import React from 'react';
import CustomSlider from '../custom_slider';
import Image from 'next/image';


const reviews = [
    // Reviews for Muslim Pilgrimage Services (Umrah/Hajj)
    {
        name: "Ayesha Khan",
        rating: 5,
        comment: "The Umrah package was excellent! The flights were comfortable, and the hotels were very close to Masjid al-Haram. Highly recommend!",
        image: "/user.jpg"
    },
    {
        name: "Omar Abdullah",
        rating: 4,
        comment: "The Hajj package was well-organized, but the flight delays were a bit inconvenient. Otherwise, everything was perfect.",
        image: "/user.jpg"
    },
    {
        name: "Fatima Zahra",
        rating: 5,
        comment: "This was my first Umrah, and the team made it so special. The flights were on time, and the accommodations were luxurious.",
        image: "/user.jpg"
    },
    {
        name: "Yusuf Rahman",
        rating: 5,
        comment: "The entire Hajj experience was seamless. The flights were comfortable, and the staff was very supportive. Thank you!",
        image: "/user.jpg"
    },

    // Reviews for Non-Muslim Flight Services
    {
        name: "Emily Johnson",
        rating: 5,
        comment: "The flight booking process was smooth, and the customer service team was very helpful. Will definitely use this service again!",
        image: "/user.jpg"
    },
    {
        name: "David Smith",
        rating: 4,
        comment: "Great flight options at affordable prices. The only issue was a slight delay, but overall, it was a good experience.",
        image: "/user.jpg"
    },
    {
        name: "Sophia Lee",
        rating: 5,
        comment: "I booked a last-minute flight, and everything went perfectly. The staff was very accommodating, and the flight was comfortable.",
        image: "/user.jpg"
    },
    {
        name: "Michael Brown",
        rating: 4,
        comment: "The flight service was good, but the in-flight meals could be improved. Otherwise, it was a pleasant journey.",
        image: "/user.jpg"
    },

    // Mixed Reviews for General Travel Services
    {
        name: "Priya Sharma",
        rating: 5,
        comment: "I booked a family holiday package, and the flights were excellent. The team took care of everything, making our trip stress-free.",
        image: "/user.jpg"
    },
    {
        name: "Abdul Malik",
        rating: 4,
        comment: "The flight booking was easy, but the return flight was delayed. Otherwise, the service was good.",
        image: "/user.jpg"
    }
];

const Reviews = () => {
    return (
        <div className="p-4 flex flex-col space-y-4 w-full mt-6 mb-6">
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
