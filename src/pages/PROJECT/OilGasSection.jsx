import React from 'react';
import { motion } from 'framer-motion';
import industrialImg from '../../assets/images/os-1.png';
import industrialImgMobile from '../../assets/images/os-2.png';

export default function OilGasSection() {
    return (
        <section className="py-24 px-4   relative overflow-hidden">
            
            <div className="md:px-12 lg:px-[160px] max-w-[2000px] mx-auto">
                {/* Horizontal Title centered */}
                <h2 className="text-[20px] md:text-[25px] font-medium  text-center lg:mb-16 mb-6 text-[#1a1a1a]">
                    Oil & Gas Strategic Solutions
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8 rounded-lg bg-[#F9F9F9] lg:p-7 p-2 overflow-hidden items-stretch">
                    {/* Left: Green Card Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#637524] p-5 lg:p-5 rounded-md flex flex-col justify-center h-full"
                    >
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-[24px] text-[#ffffff] font-medium mb-4">Technology for Nigeria's Energy Backbone</h3>
                                <p className="text-[#ffffff] text-[15px] leading-[28px] text-sm">
                                    SufPay Ltd., provides specialized technological and logistical support to the Oil & Gas sector, ensuring operational efficiency from the field to the boardroom.
                                </p>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h4 className="text-[24px] text-[#ffffff] font-medium mb-2">Sector-Specific Services</h4>
                                    <p className="text-[#ffffff] text-[15px] text-sm leading-[28px]">
                                        Energy Infrastructure Support: Installation of energy pipelines and the importation of specialized equipment for refineries and extraction sites.
                                    </p>
                                </div>
                                <p className="text-[#ffffff] text-[15px] text-sm leading-[28px]">
                                    Procurement & Global Sourcing: Acting as manufacturers' representatives to supply high-quality industrial machinery, spare parts, and heavy equipment for energy operations.
                                </p>
                                <p className="text-[#ffffff] text-[15px] text-sm leading-[28px]">
                                    Advanced Surveillance for Pipelines: Deployment of long-range FLIR thermal cameras (such as the Jaeger platform) for 24/7 perimeter security and pipeline monitoring in total darkness or adverse weather.
                                </p>
                            </div>

                            <button className="flex items-center gap-3 bg-white text-[#171717] px-6 py-3 rounded-full font-bold w-fit hover:bg-gray-100 transition-colors mt-4">
                                Visit site
                                <div className="w-9 h-9 rounded-full bg-[#171717] text-white flex items-center justify-center text-xs">
                                    →
                                </div>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: Industrial Image with CLIP PATH */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block h-full"
                        style={{
                            clipPath: 'ellipse(100% 100% at 100% 50%)'
                        }}
                    >
                        <img 
                            src={industrialImg} 
                            alt="Oil and Gas Industrial Site" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Mobile Image (No clip path for better visibility) */}
                    <div className="lg:hidden ">
                         <img 
                            src={industrialImgMobile} 
                            alt="Oil and Gas Industrial Site" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
