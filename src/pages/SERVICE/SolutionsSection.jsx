import React from 'react';
import { motion } from 'framer-motion';

import solIcon1 from '../../assets/icons/sol-icon1.png';
import solIcon2 from '../../assets/icons/sol-icon2.png';
import solIcon3 from '../../assets/icons/sol-icon3.png';

const solutions = [
    {
        icon: solIcon1,
        title: 'Unified Digital Payments',
        description: 'A seamless platform facilitating electronic collection and disbursement across multiple channels ensuring every transaction is effortless.',
        
    },
    {
        icon: solIcon2,
        title: 'Smart Payroll Automation',
        description: 'Streamline your organization\'s efficiency with automated salary disbursements, productivity calculations and managed deductions that minimize administrative risk.',
        
    },
    {
        icon: solIcon3,
        title: 'Public Fund management',
        description: 'Maximize your organizational efficiency with automated salary disbursements, productivity calculations and managed deductions that minimize administrative risk.',
        
    }
];

export default function SolutionsSection() {
    return (
        <section className="py-24 mt-12">
            <div className="px-4 md:px-12 lg:px-[160px] max-w-[2000px] mx-auto">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-[36px] font-bold text-[#454545]"
                    >
                        Our Solutions
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#F9F9F9] p-8 md:p-10 rounded-[28px]"
                        >
                            <div className={`w-[61px] h-[60px] flex items-center justify-center mb-5 mx-auto`}>
                                <img src={item.icon} alt={item.title} className="object-contain" />
                            </div>
                            <h3 className="text-xl md:text-[22px] font-bold text-[#1a1a1a] mb-2 text-center">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-[15px] text-center">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
