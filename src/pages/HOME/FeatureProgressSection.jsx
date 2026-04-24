import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSettings, FiCreditCard, FiMonitor, FiSend } from 'react-icons/fi';
import featurePhone from '../../assets/images/feature-phone.png';

const steps = [
    {
        id: 0,
        title: 'Easy Setup',
        description: 'Create your account, link your bank, and start accepting payments instantly.',
        icon: FiSettings
    },
    {
        id: 1,
        title: 'Accept Payments',
        description: 'Let customers pay via card, bank transfer, USSD, or digital wallets securely.',
        icon: FiCreditCard
    },
    {
        id: 2,
        title: 'Monitor Transactions',
        description: 'Monitor all payments in real time from your merchant dashboard.',
        icon: FiMonitor
    },
    {
        id: 3,
        title: 'Fast Payment',
        description: 'Receive funds directly to your bank account, with instant or scheduled payouts.',
        icon: FiSend
    }
];

export default function FeatureProgressSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-20 lg:mt-40 mt-32 lg:px-[160px] max-w-[2000px] mx-auto overflow-visible px-4">
            <div className="relative bg-[#F4F7EB] rounded-[40px] py-16 lg:py-24 px-6 md:px-12 lg:px-20 min-h-[600px] flex flex-col lg:flex-row items-center">

                {/* ══ DESKTOP – SIDE Overlapping Phone Image ══ */}
                <div className="hidden lg:block absolute -top-[100px] z-20 ">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src={featurePhone}
                            alt="Mobile Application Preview"
                            className="w-full "
                        />
                    </motion.div>
                </div>

                {/* ══ Content Area ══ */}
                <div className="w-full lg:ml-[420px] xl:ml-[460px] lg:-mt-10">

                    {/* Mobile Phone View (Top Overlap) */}
                    <div className="lg:hidden flex justify-center -mt-40 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className=""
                        >
                            <img
                                src={featurePhone}
                                alt="Mobile Application Preview"
                                className="w-full "
                            />
                        </motion.div>
                    </div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[20px] md:text-[32px] font-semibold text-[#2c2c2c] mb-6 lg:mb-8 leading-tight "
                    >
                        Simple Setup. Powerful Results.
                    </motion.h2>

                    {/* Vertical Stepper */}
                    <div className="relative space-y-4 max-w-md mx-auto lg:mx-0">
                        {/* Connecting Dashed Line */}
                        <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[0px] border-l-[2px] border-dashed border-gray-400 z-0" />

                        {steps.map((step, index) => {
                            const isActive = activeStep === index;
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.id}
                                    onMouseEnter={() => setActiveStep(index)}
                                    className="relative z-10 flex items-start gap-5 lg:gap-8 group cursor-pointer"
                                >
                                    {/* Icon Column */}
                                    <div className="relative flex-shrink-0">
                                        <div
                                            className={`
                                                w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border
                                                ${isActive
                                                    ? 'bg-[#637524] border-[#637524] scale-105 shadow-md shadow-[#637524]/20'
                                                    : 'bg-white border-gray-200 group-hover:border-gray-300'}
                                            `}
                                        >
                                            <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                        </div>
                                    </div>

                                    {/* Text Column */}
                                    <div className="flex-grow pt-1">
                                        <h3
                                            className={`
                                                text-lg md:text-[22px] font-semibold transition-all duration-300 mb-1
                                                ${isActive ? 'text-[#2c2c2c]' : 'text-gray-500'}
                                            `}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className={`
                                            text-sm md:text-base leading-relaxed transition-all duration-300
                                            ${isActive ? 'text-[#4e4e4e]' : 'text-gray-500'}
                                        `}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
