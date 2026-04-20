import React from 'react';
import teamImg from '../../assets/images/team.png';
import teamMobileImg from '../../assets/images/team-mobile.png';
import wc1 from '../../assets/icons/wc1.png';
import wc2 from '../../assets/icons/wc2.png';
import wc3 from '../../assets/icons/wc3.png';
import wc4 from '../../assets/icons/wc4.png';
import wc5 from '../../assets/icons/wc5.png';
import wc6 from '../../assets/icons/wc6.png';

const reasons = [
    {
        icon: wc1,
        title: 'Fast and Reliable Transactions',
        description:
            'Process payments instantly with a system built for speed, stability, and high performance—no delays, no disruptions.',
        color: 'bg-[#F4F7EB]',
        
    },
    {
        icon: wc2,
        title: 'Easy Integration',
        description:
            'Seamlessly integrate Sufpay into your website or mobile app using developer-friendly APIs and plugins, with minimal setup required.',
        color: 'bg-[#FFF9E6]',
    },
    {
        icon: wc3,
        title: 'Advanced Security You Can Trust',
        description:
            'Your transactions are protected with industry-standard encryption and secure infrastructure, keeping your business and customer data safe at all times.',
        color: 'bg-[#FFF0F0]',
    },
    {
        icon: wc4,
        title: 'Real-Time Insights and Analytics',
        description:
            'Monitor your transactions, track revenue, and gain valuable business insights with detailed, real-time reporting tools.',
        color: 'bg-[#F4F7EB]',
    },
    {
        icon: wc5,
        title: 'Multiple Payment Options',
        description:
            'Accept payments through cards, bank transfers, USSD, and digital wallets, giving your customers the flexibility to pay their way.',
        color: 'bg-[#F9F9F9]',
    },
    {
        icon: wc6,
        title: 'Scalable for Every Business',
        description:
            'Whether you’re a startup or an enterprise, Sufpay grows with you—handling everything from small transactions to high-volume operations effortlessly.',
        color: 'bg-[#F9F9F9]',
    },
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-[160px]">
                
                {/* Top Section – Content + Image */}
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 items-center mb-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl md:text-[45px] font-bold text-[#637524] mb-6">
                            Why Choose Us
                        </h2>
                        <p className="text-[#4E4E4E] text-base md:text-[18px] leading-relaxed">
                            Our team is available 24/7 to assist you with any questions, technical issues, or guidance—ensuring your payments and business operations run smoothly at all times.
                        </p>
                    </div>
                    <div className="relative lg:col-span-6">
                        {/* Desktop Image */}
                        <img
                            src={teamImg}
                            alt="Sufpay professional team"
                            className="hidden lg:block w-full h-full lg:h-[260px] object-cover rounded-[16px]"
                        />
                        {/* Mobile Image */}
                        <img
                            src={teamMobileImg}
                            alt="Sufpay professional team mobile"
                            className="block lg:hidden w-full h-auto object-cover rounded-[16px]"
                        />
                    </div>
                </div>

                {/* Features Grid – 2 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {reasons.map((reason, i) => {
                        return (
                            <div key={i} className="flex gap-6">
                                <div
                                    className={`flex-shrink-0 lg:w-16 lg:h-16 w-12 h-12 ${reason.color} rounded-2xl flex items-center justify-center shadow-sm shadow-black/[0.02]`}
                                >
                                    <img 
                                        src={reason.icon} 
                                        alt={reason.title} 
                                        className=" object-contain"
                                    />
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-lg md:text-[18px] font-semibold text-[#637524] mb-2 leading-tight">
                                        {reason.title}
                                    </h3>
                                    <p className="text-[#4E4E4E] text-sm md:text-[15px] leading-relaxed text-justify">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
