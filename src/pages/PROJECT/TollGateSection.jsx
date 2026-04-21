import React from 'react';
import { motion } from 'framer-motion';
import tollImg from '../../assets/images/tollgateImage.png';
import backImg from '../../assets/images/service2.png';
import dashboardImg from '../../assets/images/tollgateImage3.png';
import arrow from '../../assets/images/arrow.png';

export default function TollGateSection() {
    return (
        <section className="lg:py-24 py-12 bg-white overflow-hidden">
            <div className="md:px-12 lg:px-[160px] max-w-[2000px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-0 items-stretch">

                    {/* Left: Stacked Images */}
                    <div className="relative flex items-center justify-center h-full">
                        {/* Background Offset Image */}


                        {/* Main Toll Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 w-full  h-full rounded-lg overflow-hidden"
                        >
                            <img
                                src={tollImg}
                                alt="Modern Toll Gate Infrastructure"
                                className="w-full lg:block hidden h-full object-cover"
                            />
                        </motion.div>


                    </div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center h-full"
                    >
                        <h2 className="text-[28px] md:text-[32px] leading-[41px] font-bold text-[#1a1a1a] mb-2">
                            Toll Gate Payments
                        </h2>
                        <p className="text-[#454545] text-[18px] leading-[30px] mb-4 max-w-lg">
                            SufPay Limited. acted as the primary catalyst for the Kogi State Government in modernizing its road infrastructure revenue collection system. By transitioning from traditional cash based manual systems to a secure, automated digital ecosystem, we have significantly enhanced operational efficiency and fiscal transparency.
                        </p>

                        <button className="flex items-center gap-3 bg-[#637524] text-white text-[15px] px-5 py-2.5 rounded-full font-semibold hover:bg-[#52611d] transition-all mb-7 w-fit">
                            Request Service 
                            <div className=" rounded-full  text-[#637524] flex items-center justify-center">
                                <img src={arrow} alt="" />
                            </div>
                        </button>

                        {/* Dashboard UI Placeholder Image */}
                        <div className=" rounded-lg relative overflow-hidden group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={dashboardImg}
                                    alt="SufPay Dashboard UI"
                                    className="w-full h-auto"
                                />
                            </motion.div>


                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
