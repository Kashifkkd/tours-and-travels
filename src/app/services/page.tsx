import React from 'react';
import Image from 'next/image';

const services = [
    {
        image: "/flight_bookings.jpg",
        title: "Flight Bookings",
        description: "Book flights to your favorite destinations with ease."
    },
    {
        image: "/visa_application.jpg",
        title: "Visa Application",
        description: "Get assistance with your visa application process."
    },
    {
        image: "/visa_transfer_service.jpeg",
        title: "Visa Transfer",
        description: "Transfer your visa seamlessly with our services."
    },
    {
        image: "/hotel_booking.avif",
        title: "Hotel Bookings",
        description: "Find and book the best hotels at your destination."
    },
    {
        image: "/holiday_packages.avif",
        title: "Holiday Packages",
        description: "Explore our exclusive holiday packages."
    },
    {
        image: "/umrah_service.jpg",
        title: "Umrah Packages",
        description: "Special packages for your Umrah pilgrimage."
    },
    {
        image: "/car_bike_rental_service.jpg",
        title: "Rent a Car/Bike",
        description: "Rent a car or bike for your travel needs."
    },
    {
        image: "/travel_consultation_service.jpeg",
        title: "Travel Consultation",
        description: "Get expert travel consultation services."
    },
    {
        image: "/passport_services.jpg",
        title: "Passport Services",
        description: "Assistance with passport services and renewals."
    },
];


const Services = () => {
    return (
        <div className="bg-gray-100 py-8 px-8 md:px-16 lg:px-32 text-gray-800">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-orange-600">Our Services</h2>
                <p className="text-lg">We offer a wide range of travel services to make your journey unforgettable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <div className="relative w-full h-48 mb-4">
                            <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-lg" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2">{service.title}</h4>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;