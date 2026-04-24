import React from 'react';
import { motion } from 'framer-motion';
import appPhone from '../../assets/images/appPhone.png';
import appstoreBtn from '../../assets/images/appstore.png';
import playstoreBtn from '../../assets/images/playstore.png';

export default function MobileAppShowcase() {
    

    return (
        <section className="lg:py-20 bg-white overflow-hidden relative">
            <div className="md:px-12 lg:px-[160px] max-w-[2000px] mx-auto text-center px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-[28px] md:text-[32px] font-medium mb-4">SufPay Mobile Banking App</h2>
                    <p className="text-[#000000] text-base md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                        Your Complete Financial Ecosystem in Your Pocket. The SufPay Mobile App (currently in development) is designed to give individuals and businesses absolute control over their financial digital future.
                    </p>
                    
                    {/* Store Buttons Placeholder */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                         <div className=" flex items-center gap-2 cursor-pointer w-[150px]">
                           <img src={playstoreBtn} alt="" />
                         </div>
                         <div className=" rounded-lg flex items-center gap-2 cursor-pointer w-[150px] ">
                            <img src={appstoreBtn} alt="" />
                         </div>
                    </div>
                </motion.div>

                {/* App Showcase Container */}
                <div className="relative max-w-4xl mx-auto  flex items-center justify-center">
                    
                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 "
                    >
                        <img src={appPhone} alt="SufPay App" className="w-full h-auto" />
                    </motion.div>

                    {/* Floating Feature Cards */}
                    

                    {/* Mobile Only Features List (Static for tiny screens) */}
                    <div className="md:hidden mt-20 grid grid-cols-1 gap-4 absolute bottom-0 left-0 right-0">
                         {/* This could be a small slider or simple list if needed */}
                    </div>
                </div>
            </div>
        </section>
    );
}
