import React from 'react';
import { motion } from 'framer-motion';
import mainImg from '../../assets/images/project-hero.png';
import circleImg from '../../assets/images/team-mobile.png';

export default function ProjectHero() {
    return (
        <section className="pt-32 pb-20  px-4 md:px-12 lg:px-[160px] max-w-[2000px] mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    // className="lg:col-span-6"
                >
                    <h1 className="text-[24px] lg:text-[40px] font-semibold text-[#454545] leading-[61px]  lg:mb-8 mb-2">
                        Key Projects & Achievements
                    </h1>
                    <p className="text-[#454545]   text-[15px] md:text-[18px] lg:leading-relaxed text-justify leading-[30px] lg:mb-10 mb-6 max-w-2xl">
                        At Sufpay Limited, we take pride in our track record of delivering high impact solutions across various sectors in Nigeria. Our diverse portfolio demonstrates our capability to manage complex logistics, infrastructure development, and large-scale investment facilitation.
                    </p>
                    <button className="bg-[#637524] text-white lg:px-8 py-3 lg:py-6 px-8 rounded-full font-semibold hover:bg-[#52611d] transition-colors shadow-lg">
                        Contact Us
                    </button>
                </motion.div>

                {/* Right Image Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative  "
                >
                    {/* Main Rectangle Image */}
                    <div className=" overflow-hidden  relative z-10">
                        <img
                            src={mainImg}
                            alt="Sufpay Team Projects"
                            className="w-full h-auto object-cover lg:min-h-[300px]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
