import React from 'react';
import DestinationCard from '../../destination_card';
import CustomSlider from '../../custom_slider';

const Destinations = () => {
    const dummyDestinations = [
        {
            location: "Paris, France",
            rating: 4.8,
            name: "Eiffel Tower Tour",
            price: 120000,
            description: "Experience the beauty of Paris with a guided tour of the Eiffel Tower.",
            image: "/header_2.jpg"
        },
        {
            location: "Rome, Italy",
            rating: 4.7,
            name: "Colosseum Tour",
            price: 120000,
            description: "Explore the ancient Colosseum with a knowledgeable guide.",
            image: "/header_2.jpg"
        },
        {
            location: "New York, USA",
            rating: 4.9,
            name: "Statue of Liberty Tour",
            price: 120000,
            description: "Visit the iconic Statue of Liberty and learn about its history.",
            image: "/header_2.jpg"
        },
        {
            location: "Tokyo, Japan",
            rating: 4.8,
            name: "Tokyo Tower Tour",
            price: 120000,
            description: "Discover the vibrant city of Tokyo with a visit to Tokyo Tower.",
            image: "/header_2.jpg"
        },
        {
            location: "Sydney, Australia",
            rating: 4.7,
            name: "Sydney Opera House Tour",
            price: 120000,
            description: "Enjoy a guided tour of the famous Sydney Opera House.",
            image: "/header_2.jpg"
        }
    ];

    return (
        <div className="p-4 flex flex-col space-y-4 w-full mt-6">
            <div className="flex flex-col pl-[4%] items-center md:items-start">
                <p className="text-[#F85E9F] font-semibold text-base ">
                    CHOOSE YOUR NEXT DESTINATION
                </p>
            </div>

            <CustomSlider>
                {dummyDestinations.map((destination, index) => (
                    <div key={index} className="px-2 md:px-14">
                        <DestinationCard key={index} {...destination} />
                    </div>
                ))}
            </CustomSlider>
        </div>
    );
}

export default Destinations;