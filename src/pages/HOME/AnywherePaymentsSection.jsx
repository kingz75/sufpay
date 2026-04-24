import React from 'react';
import downloadPhone from '../../assets/images/feature-phone - Copy.png';
import downloadBg from '../../assets/images/download-bg.png';

export default function AnywherePaymentsSection() {
    return (
        <section 
            className="py-12 md:py-16 bg-cover lg:bg-center bg-left bg-no-repeat"
            style={{ backgroundImage: `url(${downloadBg})` }}
        >
            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-[160px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left - Text Content */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-left text-center font-bold text-[#1a1a1a] leading-tight mb-4">
                            Manage Your Payments{' '}
                            <br className="hidden sm:block" />
                            Anytime, Anywhere
                        </h2>
                        <p className="text-[#4E4E4E] lg:text-left text-center text-sm md:text-[18px] leading-relaxed mb-8 max-w-[500px] lg:text-justify">
                            Experience seamless payment management with the Sufpay mobile app, built for speed, security, and
                            convenience.
                        </p>

                        

                        {/* Download Text */}
                        <p className="text-[18px] lg:text-left text-center font-semibold text-[#2c2c2c] mb-4  tracking-wider">
                            Download Now
                        </p>

                        {/* Store Buttons */}
                        <div className="flex flex-row gap-3">
                            {/* Google Play */}
                            <a
                                href="#!"
                                className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#333] text-white rounded-xl px-5 py-3 transition-all duration-300 hover:shadow-lg"
                            >
                                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.921V2.735a1 1 0 0 1 .609-.921zM14.5 12.707l2.302 2.302-10.937 6.15L14.5 12.707zm3.312-1.414l2.077 1.166a1 1 0 0 1 0 1.742l-2.384 1.34-2.505-2.505 2.812-2.743zM5.865 3.741l10.937 6.15L14.5 12.193 5.865 3.741z" />
                                </svg>
                                <div>
                                    <p className="text-[9px]  tracking-wide opacity-70 leading-none mb-0.5">Get it on</p>
                                    <p className="text-sm font-semibold leading-none">Google Play</p>
                                </div>
                            </a>

                            {/* App Store */}
                            <a
                                href="#!"
                                className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#333] text-white rounded-xl px-5 py-3 transition-all duration-300 hover:shadow-lg"
                            >
                                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div>
                                    <p className="text-[9px] uppercase tracking-wide opacity-70 leading-none mb-0.5">Download on the</p>
                                    <p className="text-sm font-semibold leading-none">App Store</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right - Phone Mockup */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Main Phone */}
                            <img src={downloadPhone} alt="" className='w-[450px]' />

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
