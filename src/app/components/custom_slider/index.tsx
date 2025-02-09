"use client"

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type ArrowProps = {
    onClick?: () => void;
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        onClick={onClick}
    >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
    </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
        onClick={onClick}
    >
        <ChevronRightIcon className="h-6 w-6 text-white" />
    </button>
);

const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

type CustomSliderProps = {
    children: React.ReactNode;
};

const CustomSlider: React.FC<CustomSliderProps> = ({ children }) => {
    return (
        <Slider {...settings}>{children}</Slider>
    );
};

export default CustomSlider;