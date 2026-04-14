import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sect1a from '../../assets/images/sect1b.png'
import sect1b from '../../assets/images/sect1a.png'
import abtbg from '../../assets/images/abt-bg.png'

export default function SectionTwo() {
    const navigate = useNavigate();
    const leftRef = useRef(null)
    const [leftHeight, setLeftHeight] = useState(null)
    const [count, setCount] = useState(0)
    const [hasCounted, setHasCounted] = useState(false)
    const counterRef = useRef(null)

    useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight)
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !hasCounted) {
                setHasCounted(true);
                let start = 0;
                const end = 20;
                const duration = 2000;
                const incrementTime = duration / end;
                const timer = setInterval(() => {
                    start += 1;
                    setCount(start);
                    if (start >= end) clearInterval(timer);
                }, incrementTime);
            }
        }, { threshold: 0.5 });

        if (counterRef.current) observer.observe(counterRef.current);

        return () => {
            if (counterRef.current) observer.unobserve(counterRef.current);
        };
    }, [hasCounted]);

    return (
        <section className="w-full py-12 md:py-16 lg:py-20" style={{ backgroundImage: `url(${abtbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 max-w-6xl mx-auto px-6 lg:px-4">

                {/* LEFT CONTENT (HEIGHT SOURCE) */}
                <div ref={leftRef} className="w-full lg:w-[50%] text-left">
                    <span className="text-[#EEC044] text-[18px] md:text-[22px] lg:text-[24px] leading-tight" style={{ fontFamily: '"Covered By Your Grace", cursive' }}>
                        About Tiamin Group
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-[36px] leading-[1.2] font-bold mt-4">
                        Leading Manufacturing and Agricultural Company of the 21st Century.
                    </h2>

                    <p className="text-[#878680] text-sm md:text-base lg:text-[16px] mt-6 leading-relaxed">
                        Tiamin Group’s diverse portfolio includes road construction, rice
                        processing, farming, charcoal production, commodity exchange, and
                        international gold trading in Dubai.
                    </p>

                    <p className="text-[#878680] text-sm md:text-base mt-4 leading-relaxed">
                        Headquartered in Kano and Bauchi, Nigeria, with a combined workforce
                        of around 600 employees, Tiamin Group prides itself on its ethical
                        practices and relentless pursuit of success.
                    </p>

                    <p className="mt-6 text-[20px] md:text-[22px] lg:text-[28px] leading-tight text-[#4BAF47]" style={{ fontFamily: '"Covered By Your Grace", cursive' }}>
                        Modern agriculture types
                    </p>

                    <p className="text-[#878680] text-sm md:text-base font-bold mt-2">
                        Safely Grown | Clean energy | Non GMO
                    </p>

                    <button
                        className="mt-8 bg-[#4BAF47] transition hover:bg-[#43A047] text-[#FFFFFF] text-[14px] leading-none px-8 py-4 rounded-lg font-semibold shadow-lg shadow-green-500/20"
                        onClick={() => navigate('/shop')}
                    >
                        Discover More
                    </button>
                </div>

                {/* RIGHT IMAGES (HEIGHT DEPENDS ON LEFT ON DESKTOP) */}
                <div
                    className="w-full lg:w-[50%]"
                    style={{ height: leftHeight && window.innerWidth > 1024 ? leftHeight : 'auto' }}
                >
                    <div className="w-full h-full">

                        <div className='flex gap-2'>
                            <div className='w-[50%] flex flex-col'>
                                <div>
                                    <img src={sect1a} alt="" className="w-full h-auto object-contain" />
                                </div>
                                <div className='flex flex-col items-center justify-center flex-1' ref={counterRef}>
                                    <p className='text-[40px] sm:text-[60px] lg:text-[80px] text-[#1F1E17] leading-none' style={{ fontFamily: '"Covered By Your Grace", cursive' }}>{count}</p>
                                    <p className='text-[10px] sm:text-[12px] lg:text-[16px] font-medium text-[#4BAF47] text-center -mt-0 sm:-mt-2 lg:-mt-2'>PARTNERS IN WORLD WIDE</p>
                                </div>
                            </div>

                            <div className='w-[50%] flex items-center'>
                                <img src={sect1b} alt="" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
