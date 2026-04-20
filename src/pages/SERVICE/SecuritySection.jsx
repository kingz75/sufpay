import React from 'react';
import { motion } from 'framer-motion';
import mainSecurityImg from '../../assets/images/sec-1.png';
import subImg1 from '../../assets/images/sec-2.png';
import subImg2 from '../../assets/images/sec-3.png';
import subImg3 from '../../assets/images/sec-4.png';

const securityItems = [
    {
        title: 'Thermal Imaging Platforms',
        text: 'We specialize in long-range PTZ (Pan-Tilt-Zoom) thermal cameras that provide 24/7 visibility in total darkness, fog, or smoke.',
        img: subImg1
    },
    {
        title: 'Tactical Sourcing & PPE',
        text: 'We procure and supply international-standard equipment for security forces covering personal protection, mobility, and utilities and communication.',
        img: subImg2
    },
    {
        title: 'Industrial Drones & UAV Technology',
        text: 'Sufpay pioneers heavy-lift LIDAR solutions in Nigeria, bringing world-class drone technology to logistics, emergency response, and infrastructure management.',
        img: subImg3
    }
];

export default function SecuritySection() {
    return (
        <section className="lg:pt-24 pt-12 lg:pb-24 pb-8 bg-[#F0F3D9]">
            <div className="px-4 md:px-12 lg:px-[160px] max-w-[2000px] mx-auto">
                <div className="text-center lg:mb-16 mb-8">
                    <h2 className="text-[24px] md:text-[32px] font-semibold text-[#2c2c2c] ">
                        SECURITY & SURVEILLANCE SOLUTIONS
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8 items-stretch">

                    {/* Left: Main Feature */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-md overflow-hidden mb-6 flex-grow flex"
                        >
                            <img
                                src={mainSecurityImg}
                                alt="Armored Vehicle"
                                className="w-full h-full object-cover lg:min-h-[350px]"
                            />
                        </motion.div>
                        <div className="flex-shrink-0">
                            <h3 className="text-lg font-medium text-[#1a1a1a] mb-3 leading-tight">
                                Advanced Reconnaissance and Tactical Defense
                            </h3>
                            <p className="text-[#2c2c2c] text-sm md:text-base leading-relaxed text-justify">
                                We provide highly modular surveillance platforms and tactical equipment designed for land and maritime protection. Our systems deliver precise intelligence in the most challenging environments.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {securityItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-row lg:gap-6 gap-4 items-start"
                            >
                                <div className="lg:w-[180px] lg:h-[160px] w-[80px] h-[70px] rounded-xl overflow-hidden flex-shrink-0">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-[#1a1a1a] mb-1.5 leading-tight">{item.title}</h4>
                                    <p className="text-[#2c2c2c] text-[13px] md:text-[15px] leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
