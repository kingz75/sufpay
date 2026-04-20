import React from 'react';
import { FiSettings, FiCreditCard, FiActivity, FiZap } from 'react-icons/fi';
import featurePhone from '../../assets/images/feature-phone.png';

const features = [
    {
        icon: FiSettings,
        title: 'Easy Setup',
        description: 'Get started in minutes with our intuitive onboarding process and comprehensive documentation.',
        color: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        icon: FiCreditCard,
        title: 'Accept Payments',
        description: 'Accept payments from multiple channels including cards, bank transfers, and mobile money.',
        color: 'bg-green-50',
        iconColor: 'text-green-600',
    },
    {
        icon: FiActivity,
        title: 'Monitor Transactions',
        description: 'Track every transaction in real-time with a powerful dashboard designed for your business.',
        color: 'bg-purple-50',
        iconColor: 'text-purple-600',
    },
    {
        icon: FiZap,
        title: 'Fast Payment',
        description: 'Receive funds in your bank account with instant or scheduled payouts.',
        color: 'bg-amber-50',
        iconColor: 'text-amber-600',
    },
];

export default function FeatureHighlightCard() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-[#F0F5E0] to-[#E8EDD4] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left - Phone Mockup */}
                        <div className="flex justify-center">
                            <img src={featurePhone} alt="" />
                        </div>

                        {/* Right - Feature List */}
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">
                                Simple Setup, Powerful Results.
                            </h2>
                            <p className="text-[#6B7280] text-sm mb-8 leading-relaxed">
                                Everything you need to start accepting payments in four simple steps.
                            </p>

                            <div className="space-y-5">
                                {features.map((feature, i) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="flex gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-default"
                                        >
                                            <div className={`flex-shrink-0 w-11 h-11 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                                            </div>
                                            <div>
                                                <h3 className="text-sm md:text-[15px] font-bold text-[#1a1a1a] mb-1">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-[#6B7280] text-xs md:text-[13px] leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
