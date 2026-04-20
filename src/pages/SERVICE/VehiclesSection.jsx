import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets
import service1 from '../../assets/images/veh1.png';
import service2 from '../../assets/images/veh2.png';
import service3 from '../../assets/images/veh3.png';
import service4 from '../../assets/images/veh4.png';
import service5 from '../../assets/images/veh5.png';
import service6 from '../../assets/images/veh6.png';
import service7 from '../../assets/images/veh7.png';
import service8 from '../../assets/images/veh8.png';

export default function VehiclesSection() {
    return (
        <section className="lg:py-24 py-12 bg-[#F9FAFB]">
            <div className="px-4 md:px-12 lg:px-[160px] max-w-[2000px] mx-auto">
                <div className="text-center lg:mb-16 mb-8 max-w-2xl mx-auto">
                    <h2 className="text-[24px] md:text-[32px] font-semibold text-[#1a1a1a] uppercase mb-2">
                        SUPPLY OF VEHICLES
                    </h2>
                    <p className="text-[#2c2c2c] text-sm md:text-[18px] leading-[26px]">
                        Sufpay Limited is a trusted distributor of a wide range of vehicles, catering to the needs of individuals, businesses, and government institutions.
                    </p>
                </div>

                {/* 
                    DYNAMIC GRID STRATEGY:
                    - Desktop: 3 separate columns (Short-Tall-Short pattern)
                    - Mobile: 2-column Mosaic (Interleaved tall and wide items)
                    We use 'contents' on mobile to let children break out of their wrappers.
                */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                    
                    {/* LEFT COLUMN */}
                    <div className="contents lg:flex lg:flex-col lg:gap-6">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="h-[180px] lg:h-[180px] rounded-md overflow-hidden shadow-sm"
                        >
                            <img src={service1} alt="Vehicle 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="row-span-2 lg:row-span-1 h-[380px] lg:h-[340px] rounded-2xl overflow-hidden shadow-sm"
                        >
                            <img src={service2} alt="Vehicle 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="h-[180px] lg:h-[180px] rounded-2xl overflow-hidden shadow-sm"
                        >
                            <img src={service3} alt="Vehicle 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                    </div>

                    {/* CENTER COLUMN (Dominant Features) */}
                    <div className="contents lg:flex lg:flex-col lg:gap-6">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="col-span-2 lg:col-span-1 h-[250px] lg:h-[362px] rounded-2xl overflow-hidden shadow-md"
                        >
                            <img src={service4} alt="Vehicle 4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="col-span-2 lg:col-span-1 h-[250px] lg:h-[362px] rounded-2xl overflow-hidden shadow-md"
                        >
                            <img src={service5} alt="Vehicle 5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="contents lg:flex lg:flex-col lg:gap-6">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="h-[180px] lg:h-[180px] rounded-2xl overflow-hidden shadow-sm"
                        >
                            <img src={service6} alt="Vehicle 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="row-span-2 lg:row-span-1 h-[380px] lg:h-[340px] rounded-2xl overflow-hidden shadow-sm"
                        >
                            <img src={service7} alt="Vehicle 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="h-[180px] lg:h-[180px] rounded-2xl overflow-hidden shadow-sm"
                        >
                            <img src={service8} alt="Vehicle 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
