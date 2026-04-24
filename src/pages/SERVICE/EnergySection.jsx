import React from 'react';
import { motion } from 'framer-motion';
import mainEnergyImg from '../../assets/images/inf-main.png';
import circle1 from '../../assets/images/inf-1.png';
import circle2 from '../../assets/images/inf-2.png';
import circle3 from '../../assets/images/inf-3.png';

export default function EnergySection() {
    return (
        <section className="lg:pb-24 pb-12 bg-[#F0F3D9] overflow-hidden">
            <div className="px-4 md:px-12 lg:px-[160px] max-w-[2000px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                    
                    {/* Left Content */}
                    <div>
                        <h2 className="text-[24px] md:text-[32px] font-semibold text-[#1a1a1a] uppercase mb-6 leading-tight">
                            Infrastructure & Energy
                        </h2>
                        <p className="text-[#2c2c2c] text-[13px] md:text-[15px] leading-relaxed lg:mb-8 mb-6">
                            Sufpay Ltd combines general contracting expertise with modern renewable energy solutions to build a resilient future for Nigerian communities and industries.
                        </p>

                        <div className="flex gap-6 ">
                            {[circle1, circle2, circle3].map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden"
                                >
                                    <img src={img} alt={`Energy sector ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-md overflow-hidden shadow-2xl"
                    >
                        <img src={mainEnergyImg} alt="Solar Panel Installation" className="w-full lg:h-[350px] object-cover hover:scale-105 transition-transform duration-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
