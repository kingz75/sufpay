import React from 'react';
import { motion } from 'framer-motion';
import WideImageSlider from './WideImageSlider';

export default function ServiceHero() {
    return (
        <section className="pt-28 pb-10 px-4 md:px-12 lg:px-[160px] max-w-[2000px] mx-auto text-center overflow-hidden">
            {/* Title & Subtext */}
            <div className="max-w-4xl mx-auto mb-16 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[24px]  lg:text-[48px] font-bold text-[#1a1a1a] leading-[1.1] mb-6"
                >
                    The Core <span className="text-[#637524]">of Digital Economy</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#454545] text-base md:text-[18px] lg:max-w-2xl mx-auto leading-relaxed"
                >
                    Sufpay is not just a payment gateway; it is a full-spectrum financial ecosystem designed to drive the Nigerian digital economy forward.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 bg-[#637524] text-white px-6 lg:px-8 py-3 lg:py-3.5 rounded-full font-semibold hover:bg-[#637524] "
                >
                    Contact an Expert
                </motion.button>
            </div>

            {/* Cinematic Slider - Breaks out of container */}
            {/* <WideImageSlider /> */}
        </section>
    );
}

