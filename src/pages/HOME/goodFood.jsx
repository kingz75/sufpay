import React from "react";
import riceBags from "../../assets/images/riceBag.png";
import goodFoodBg from "../../assets/images/goodFoodBg.png";

export default function GoodFood() {
    return (
        <section
            className="w-full bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${goodFoodBg})` }}
        >
            {/* Subtle pattern overlay */}
            {/* <div
                className="absolute inset-0 opacity-20 bg-repeat"
                style={{
                    backgroundImage: "url('/images/food-pattern.svg')",
                }}
            /> */}

            <div className="relative z-10   px-6 py-16 lg:pt-24 lg:pb-0">

                {/* Header */}


                {/* Content */}
                <div className="flex lg:max-w-7xl lg:mx-auto flex-col lg:flex-row items-end justify-center">

                    {/* Green Card */}
                    <div className="w-full lg:w-auto">
                        <div className="mb-6 text-center lg:text-left">
                            <p className="text-[#EEC044] text-[20px] lg:text-[28px] font-medium mb-2" style={{ fontFamily: '"Covered By Your Grace", cursive' }}>
                                Produce
                            </p>
                            <h2 className="text-3xl lg:text-[48px] font-extrabold text-[#1F1E17]">
                                Naturally Good Food
                            </h2>
                        </div>
                        <div className="bg-[#4BB145] text-white p-6 lg:p-[72px] w-full lg:max-w-[630px] text-left mx-auto">
                            <h3 className="text-xl lg:text-[40px] font-bold leading-[43px] mb-4">
                                Premium Rice from <br className="hidden sm:block" />
                                <span className="text-[#FFCC00]">Nigeria’s</span>  Finest Fields
                            </h3>

                            <p className="text-sm lg:text-[16px] leading-relaxed lg:leading-[30px] text-[#FFFFFF]">
                                Tiamin Group produces high-quality rice from Nigeria’s
                                fertile regions, meticulously processed to meet global
                                standards for nutrition and taste.
                            </p>
                        </div></div>

                    {/* Product Image (NO GAP) */}
                    <div className="w-full lg:w-auto hidden lg:flex justify-center lg:justify-start">
                        <img
                            src={riceBags}
                            alt="Tiamin Rice Products"
                            className="w-[280px] sm:w-[380px] lg:w-[500px] object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
