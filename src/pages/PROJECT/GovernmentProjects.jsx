import React from 'react';
import { motion } from 'framer-motion';
import largeImg from '../../assets/images/gp-1.png';
import portraitImg from '../../assets/images/gp-2.png';

export default function GovernmentProjects() {
    return (
        <section className="bg-[#637524] lg:py-24 py-16 px-4 overflow-hidden">
            <div className="md:px-12 lg:px-[160px] max-w-[2000px] mx-auto">
                {/* Two-column layout: 70% left / 30% right */}
                <div className="flex flex-col lg:flex-row lg:gap-8 gap-6 items-stretch">

                    {/* ═══════════ Left Section (70%) ═══════════ */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-[60%] w-full flex flex-col"
                    >
                        {/* Heading & Paragraph */}
                        <div className="text-white mb-4 lg:mb-8">
                            <h2 className="text-[20px] md:text-[24px] font-medium mb-3 lg:mb-4">
                                Government Infrastructure &amp; Public Works
                            </h2>
                            <p className="text-white/90 md:text-[18px] text-[15px] max-w-2xl leading-relaxed text-justify lg:text-left">
                                We have established ourselves as a trusted partner for
                                government entities by delivering critical infrastructure projects.
                            </p>
                        </div>

                        {/* Large Image with Floating Overlay Card */}
                        <div className="relative flex-1">
                            <div className="rounded-lg overflow-hidden shadow-2xl h-full">
                                <img
                                    src={largeImg}
                                    alt="Construction workers on-site"
                                    className="w-full h-full min-h-[250px] lg:min-h-[300px] object-cover"
                                />
                            </div>

                            {/* Floating Overlay Card — bottom-left */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="absolute -bottom-12 left-0 right-0 mx-auto w-[85%] md:-bottom-12 md:left-8 md:right-auto md:mx-0 bg-[#F0F3D9] backdrop-blur-sm md:w-[270px] px-5 py-5 lg:py-6 rounded-lg z-20"
                            >
                                <div className="space-y-5">
                                    <div>
                                        <h4 className="text-[14px] md:text-[15px] font-bold text-[#3a3a3a] mb-1.5">
                                            Infrastructure Delivery:
                                        </h4>
                                        <p className="text-[#555] text-xs leading-[1.6] text-justify lg:text-left">
                                            Successfully managed and delivered large-scale
                                            infrastructure projects for various government agencies.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[14px] md:text-[15px] font-bold text-[#3a3a3a] mb-1.5">
                                            Infrastructure Delivery:
                                        </h4>
                                        <p className="text-[#555] text-xs leading-[1.6] text-justify lg:text-left">
                                            Successfully managed and delivered large-scale
                                            infrastructure projects for various government agencies.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ═══════════ Right Section (30%) ═══════════ */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-[40%] lg:block hidden w-full"
                    >
                        <div className="rounded-[20px] overflow-hidden shadow-2xl h-full">
                            <img
                                src={portraitImg}
                                alt="Construction engineer in safety gear"
                                className="w-full h-full object-cover min-h-[400px]"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
