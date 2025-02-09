import Image from 'next/image';
import React from 'react';

type Feature = {
    title: string;
    description: string;
    image: string
}

const Features: React.FC = () => {
    const featuresList: Feature[] = [
        {
            title: "Lot of choices",
            description: "Embrace life's vastness, venture forth",
            image: "/suitcase.png"
        },
        {
            title: "Best Tour Guide",
            description: "Embrace life's vastness, venture forth",
            image: "/airplane.png"
        },
        {
            title: "Easy Booking",
            description: "Embrace life's vastness, venture forth",
            image: "/card.png"
        }
    ];

    return (
        <div className="p-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 w-full">
            <div className='flex flex-col items-center md:items-start space-y-1 md:space-y-2 md:ml-[5%]'>
                <p className="text-[#F85E9F] font-semibold text-sm">
                    WHAT WE SERVE
                </p>
                <p className='text-3xl font-[900] text-[rgba(37, 43, 66, 1)] leading-[1.3]'>
                    Top Values <span className='inline md:block'> For You</span>
                </p>
                <p className='font-medium text-sm text-[#191825] pt-1 md:pt-2'>
                    Embrace life&apos;s vastness, venture forth
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly w-full space-y-4 md:space-y-0">
                {featuresList.map((feature, index) => (
                    <FeatureBox key={index} title={feature.title} image={feature.image} description={feature.description} />
                ))}
            </div>
        </div>
    );
}

export default Features;

type FeatureBoxProps = {
    title: string;
    image: string;
    description: string;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({ title, image, description }) => {
    return (
        <div className="flex flex-col items-center space-y-4 w-auto md:w-full">
            <Image src={image} alt="feature" width={60} height={60} className='object-contain' />
            <p className="text-[#191825] font-semibold text-2xl">{title}</p>
            <p className='font-medium text-sm text-[#191825]'>
                {description}
            </p>
        </div>
    );
}