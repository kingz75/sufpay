import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import tick from '../../assets/icons/check-mark.png';
import paymentAnalytics from '../../assets/images/payment-analytics.jpg';
import paymentTable from '../../assets/images/payment-table.png';

const bullets = [
    'Accept all major debit and credit cards safely and instantly.',
    'Let customers pay directly from their bank accounts with ease.',
    'Reach everyone, even those without internet access.',
    'Give your customers the freedom to pay the way they prefer.',
];

export default function PaymentOptionsSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-[160px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* ══ LEFT COLUMN – Text + Bullets + Table ══ */}
                    <div>
                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10"
                        >
                            Multiple Payment Options
                        </motion.h2>

                        {/* Description paragraph */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#4E4E4E] text-[18px] md:text-base leading-relaxed mb-8 max-w-lg"
                        >
                            Accept payments through cards, bank transfers, and other digital
                            payment methods all in one place. Sufpay makes it easy for your
                            customers to pay the way they prefer.
                        </motion.p>

                        {/* Bullet list */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-3 mb-10"
                        >
                            {bullets.map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-0.5 w-4 h-4  flex items-center justify-center">
                                        <img src={tick} alt="tick" />
                                    </span>
                                    <p className="text-[#637524] text-sm md:text-[15px] leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Table image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <img
                                src={paymentTable}
                                alt="Payment transactions table"
                                className="w-full max-w-md "
                            />
                        </motion.div>
                    </div>

                    {/* ══ RIGHT COLUMN – Analytics image ══ */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end mt-10  "
                    >
                        <img
                            src={paymentAnalytics}
                            alt="Payment analytics dashboard"
                            className="w-full max-w-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
