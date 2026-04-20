import React from 'react';
import { motion } from 'framer-motion';
// import { FiShield, FiActivity, FiBriefcase } from 'react-icons/fi';
import iconApp1 from '../../assets/icons/icon-app1.png';
import iconApp2 from '../../assets/icons/icon-app2.png';
import iconApp3 from '../../assets/icons/icon-app3.png';   
import featurePhone from '../../assets/images/app-phone.png';
import appPhone2 from '../../assets/images/app-phone2.png';


export default function AppShowcaseSection() {
    const features = [
        {
            icon: iconApp1,
            title: 'Military - Grade Security',
            description: 'Advanced encryption and biometric authentication for every transaction.'
        },
        {
            icon: iconApp2,
            title: 'Real-Time Insights',
            description: 'Instant notifications and detailed analytics to keep you in control of your financial activities.'
        },
        {
            icon: iconApp3,
            title: 'One-stop Financial Shop',
            description: 'A comprehensive gateway for all payments, mobile wallet top-ups, and international fund transfers.'
        }
    ];

    return (
        <section className="lg:py-24 py-12 bg-[#637524] text-white overflow-hidden relative">
            {/* Background Pattern */}
            {/* <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px]  " /> */}
            
            <div className="px-4 md:px-12 lg:px-[160px] max-w-[2000px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Phone Image Part */}
                    <div className="flex justify-center lg:justify-start">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <picture>
                                <source srcSet={appPhone2} media="(max-width: 1023px)" />
                                <img 
                                    src={featurePhone} 
                                    alt="Sufpay App Preview" 
                                    className="w-[280px] md:w-[380px] lg:w-[530px]"
                                />
                            </picture>

                           
                        </motion.div>
                    </div>

                    {/* Content Part */}
                    <div>

                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[24px] md:text-[36px] font-bold mb-2"
                        >
                            The Sufpay App
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[#ffffff] text-[18px] mb-8 max-w-lg"
                        >
                            We are currently developing a robust mobile application featuring:
                        </motion.p>

                        <div className="space-y-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex gap-5"
                                >
                                    <div className="lg:w-[56px] lg:h-[56px] w-[48px] h-[48px] mt-1 rounded-xl flex flex-shrink-0 items-center justify-center">
                                        <img src={feature.icon} alt={feature.title} className=" object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-medium mb-1">{feature.title}</h4>
                                        <p className="text-[#ffffff]/80 text-[15px] leading-[24px]">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
