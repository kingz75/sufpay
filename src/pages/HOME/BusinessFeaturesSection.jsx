import React from 'react';
import { FiZap, FiShield, FiSmartphone } from 'react-icons/fi';
import businessPhone from '../../assets/images/business-phone.png';

const features = [
    {
        title: 'Simple Setup, Powerful Results',
        description:
            'Getting started with Sufpay is quick and straightforward. Create an account, integrate our gateway, and start receiving payments in minutes.',
    },
    {
        title: 'Simple Setup, Powerful Results',
        description:
            'Getting started with Sufpay is quick and straightforward. Create an account, integrate our gateway, and start receiving payments in minutes.',
    },
];

export default function BusinessFeaturesSection() {
    return (
        <section className="py-16 md:py-24 bg-[#F9F9F9]">
            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:pl-[160px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-stretch">
                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#2c2c2c] mb-4">
                            Built for Every Business
                        </h2>
                        <p className="text-[#4E4E4E] text-sm md:text-[18px] max-w-lg leading-relaxed mb-5 text-justify">
                            From startups to large enterprises, Sufpay is designed to scale with your business. Whether you run an ecommerce
                            store, offer digital services, or manage subscriptions, our platform has you covered.
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#2c2c2c] mb-4">
                            Simple Setup. Powerful Results
                        </h2>
                        <p className="text-[#4E4E4E] text-sm md:text-[18px] max-w-lg leading-relaxed mb-5 text-justify ">
                            Getting started with Sufpay is quick and straightforward. Create an account, integrate our gateway, and start receiving payments in minutes.
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#2c2c2c] mb-4">
                            Digital Payment Solutions
                        </h2>
                        <p className="text-[#4E4E4E] text-sm md:text-[18px] max-w-lg leading-relaxed mb-10 text-justify ">
                            We facilitate effortless electronic payments and collections. Our system supports multiple payment channels, ensuring high versatility and accessibility for all users.
                        </p>
                    </div>

                    {/* Right - Phone Mockup */}
                    <div className="relative h-full">
                        <img 
                            src={businessPhone} 
                            alt="Business features" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
