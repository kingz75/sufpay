import React from 'react';
import { motion } from 'framer-motion';
import gatewayImage from '../../assets/images/gatewayImage.jpg';
import ocIcon from '../../assets/images/oc.png';
import hvIcon from '../../assets/images/hv.png';

export default function PaymentGatewaySection() {
    const bullets = [
        {
            title: "Omni-channel Integration",
            desc: "Facilitate payments across web, mobile, and physical points of sale effortlessly.",
            icon: ocIcon
        },
        {
            title: "High-Volume Reliability",
            desc: "Designed to handle the high-velocity demands of modern commerce without compromising on speed or accuracy.",
            icon: hvIcon
        }
    ];

    return (
        <section className="lg:py-24 py-12 bg-[#fcfdf2] overflow-hidden">
            <div className="md:px-12 lg:px-[160px] max-w-[2000px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[24px] md:text-[32px] font-medium text-[#000000] mb-4">
                            SufPay Payment Gateway
                        </h2>
                        <p className="text-[#454545] text-base md:text-[18px] leading-[30px] mb-5">
                            The SufPay Payment Gateway is engineered to be the premier transaction engine for Nigerian businesses. We bridge the gap between traditional enterprise and the digital economy by providing a robust infrastructure for electronic collections and disbursements.
                        </p>

                        <div className="space-y-8">
                            {bullets.map((bullet, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 w-[54px] h-[49px]">
                                        <div className=" flex items-center justify-center">
                                            <img src={bullet.icon} alt={bullet.title} className="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[24px] font-medium text-[#454545] mb-2">{bullet.title}</h4>
                                        <p className="text-[#454545] text-[15px] leading-[30px]">{bullet.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-12 bg-[#637524] text-[#ffffff] px-10 py-4 rounded-full font-medium">
                            Create Account
                        </button>
                    </motion.div>

                    {/* Right: Gateway Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-full"
                    >
                        <div className="rounded-lg overflow-hidden h-full">
                            <img
                                src={gatewayImage}
                                alt="SufPay Payment Gateway"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
