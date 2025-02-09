import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const Newsletter = () => {
    return (
        <div className="bg-orange-100 px-8 py-16 rounded-lg shadow-lg text-gray-800">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
                <p className="text-lg">Get the latest updates and offers.</p>
            </div>
            <form className="flex flex-col items-center justify-center space-y-4">
                <Input type="email" placeholder="Email" className='w-[100%] md:w-[40%] bg-white' />
                <Button
                    type="submit"
                    className='w-[100%] md:w-[40%]'
                >
                    Subscribe
                </Button>
            </form>
        </div>
    );
};

export default Newsletter;