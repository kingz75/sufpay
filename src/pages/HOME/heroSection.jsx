import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import dashboardImg from '../../assets/images/dashboard.png';
import homeBg from '../../assets/images/home-background.png';
import dashIcon1 from '../../assets/icons/dash-icon1.png';
import dashIcon2 from '../../assets/icons/dash-icon2.png';
import dashIcon3 from '../../assets/icons/dash-icon3.png';

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <>
            <section className="relative lg:pt-[120px] pt-[60px] overflow-hidden group">
                {/* ══ PART 1 – Text block: full-viewport on lg ══ */}
                <div className="relative z-10 flex flex-col items-center justify-center
                                pt-28 pb-16 px-4 sm:px-6 lg:px-8
                                lg:min-h-screen lg:pb-24">
                    
                    {/* ══ Background Image (Grid) – Only for the text area ══ */}
                    <div
                        className="absolute inset-0 z-0 opacity-60 lg:opacity-40 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out bg-center bg-cover bg-no-repeat pointer-events-none"
                        style={{
                            backgroundImage: `url(${homeBg})`,
                            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
                        }}
                    />

                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            src={dashIcon2} alt="Icon" className="object-cover absolute lg:-top-[50px] -top-[45px] lg:-right-[100px] -right-[0px] w-[20px] h-[20px] lg:w-auto lg:h-auto lg:-top-[60px] lg:-right-[100px]" 
                        />
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            src={dashIcon3} alt="Icon" className="object-cover absolute lg:-bottom-[50px] lg:-right-[100px] hidden lg:block" 
                        />
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            src={dashIcon1} alt="Icon" className="object-cover absolute lg:-bottom-[30px] -top-[40px] lg:-left-[100px] w-[28px] h-[28px] lg:w-auto lg:h-auto lg:top-auto lg:bottom-[0px] lg:-left-[100px]" 
                        />
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] lg:leading-[75px] text-[#2C2C2C] mb-5 font-medium"
                        >
                            Redefining Digital Payments{' '}
                            <br />
                            with <span className="text-[#637524]">Speed</span> and Security
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-[#2c2c2c] text-[18px] md:text-[24px] mb-8 max-w-2xl mx-auto"
                        >
                            At Sufpay, we make payments simple, fast, and secure for
                            businesses and individuals.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col w-full sm:flex-row items-center justify-center mt-10 gap-4"
                        >
                            <button
                                onClick={() => navigate('/signin')}
                                className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-[#637524] hover:bg-[#556620] text-white font-semibold px-12 py-4 rounded-full text-sm transition-all duration-300 shadow-lg shadow-[#637524]/25 hover:shadow-xl hover:shadow-[#637524]/35 hover:-translate-y-0.5"
                            >
                                Create account
                                
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="flex items-center justify-center gap-2 w-full sm:w-auto border-[1.5px] border-[#637524] text-[#637524] hover:bg-[#637524] hover:text-white font-semibold px-12 py-4 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Request a Demo
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* ══ PART 2 – Dashboard preview (fantastic animation) ══ */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 flex justify-center perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, y: 150, rotateX: 20, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 40, 
                            damping: 15, 
                            duration: 1.5 
                        }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="rounded-2xl overflow-hidden ">
                            <img
                                src={dashboardImg}
                                alt="Sufpay dashboard preview"
                                className="w-full h-auto block"
                            />
                        </div>
                    </motion.div>
                </div>

            </section>
        </>
    );
}
