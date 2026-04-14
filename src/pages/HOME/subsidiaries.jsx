import React from "react";
import { useNavigate } from "react-router-dom";
import subBg from "../../assets/images/sub.png";
import subs1 from "../../assets/images/subs1.png";
import subs2 from "../../assets/images/subs2.png";
import subs3 from "../../assets/images/subs3.png";
import subs4 from "../../assets/images/subs4.png";

const subsidiaries = [
    {
        title: "Tiamin Rice Mill",
        image: subs1,
        path: "/subsidiaries/list1"
    },
    {
        title: "Tiamin Gold General Trading LLC",
        image: subs2,
        path: "/subsidiaries/list2"
    },
    {
        title: "Tiamin Commodity Exchange",
        image: subs3,
        path: "/subsidiaries/list3"
    },
    {
        title: "Tiamin Air",
        image: subs4,
        path: "/subsidiaries/list4"
    },
];

export default function Subsidiaries() {
    const navigate = useNavigate();
    return (
        <section className="bg-white">
            {/* Green Background Section */}
            <div
                className="relative bg-cover bg-center min-h-[400px] lg:h-[480px]"
                style={{
                    backgroundImage: `url(${subBg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/5"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:pt-20 lg:pb-0">
                    <h2 className="text-center  text-white text-3xl sm:text-4xl lg:text-[60px] font-extrabold mb-10 lg:mb-16 tracking-tight">
                        Our Subsidiaries
                    </h2>

                    {/* Cards Container - Overlapping the bottom boundary on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {subsidiaries.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden flex flex-col lg:transform lg:translate-y-1/2 bg-white p-4 lg:p-0 shadow-md lg:shadow-none"
                            >
                                {/* Card Image */}
                                <div className="h-[200px] w-full">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full shadow-md rounded-2xl object-cover"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="flex flex-col items-center lg:items-start flex-grow mt-6 lg:mt-[47px] text-left">
                                    <h3 className="text-[18px] lg:text-[22px] font-bold text-[#1F1E17] mb-4 leading-tight min-h-[48px]">
                                        {item.title}
                                    </h3>

                                    <button
                                        onClick={() => navigate(item.path)}
                                        className="bg-[#4BAF47] hover:bg-[#43a047] text-white font-extrabold px-8 py-2.5 rounded-2xl transition-colors text-[14px] lg:text-[16px]"
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Spacer section - only needed on desktop */}
            <div className="hidden lg:block h-[250px] bg-white"></div>
            <div className="lg:hidden h-20 bg-white"></div>
        </section>
    );
}
