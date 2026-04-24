import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/general-supply.png';


export default function GeneralContractsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="px-4 md:px-12 lg:px-[160px] max-w-[2000px] mx-auto">
                <div className="text-center mb-8 lg:mb-12">
                     <h2 className="text-[24px] md:text-[32px] font-semibold text-[#2c2c2c] ">
                        GENERAL CONTRACTS AND SUPPLIES
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Collage Part */}
                    <div className="relative ">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src={img1} alt="Construction" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                       
                    </div>

                    {/* Content Part */}
                    <div>
                        <p className="text-[#2c2c2c] font-medium mb-10 text-[20px] leading-[30px]">
                            We Deliver Comprehensive Infrastructure Services For Both  Private And Public Sectors:
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[20px] font-semibold text-[#2c2c2c] mb-2">Construction</h4>
                                <p className="text-[#2c2c2c] text-[14px] leading-[24px]">
                                    High-standard building construction, remodeling, and renovations.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[20px] font-semibold text-[#2c2c2c] mb-2">Infrastructure</h4>
                                <p className="text-[#2c2c2c] text-[14px] leading-[24px]">
                                    Civil works and specialized project management for large-scale developments.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[20px] font-semibold text-[#2c2c2c] mb-2">Investment Facilitation</h4>
                                <p className="text-[#2c2c2c] text-[14px] leading-[24px]">
                                    We serve as a strategic partner to global investors, providing market research, feasibility studies and regulatory compliance support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
