import React from "react";
import aminuAhmedVideo from "../../assets/images/videoBg.png";
import leadershipBg from "../../assets/images/leadershipBg.png";

export default function Leadership() {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <section className="relative w-full bg-white overflow-hidden">

            {/* GREEN BACKGROUND (30%) - Hidden/Adjusted on mobile */}
            <div
                className="absolute left-0 top-0 h-full w-full lg:w-[40%] bg-cover bg-no-repeat opacity-20 lg:opacity-100"
                style={{
                    backgroundImage: `url(${leadershipBg})`,
                }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">

                    {/* VIDEO CONTAINER */}
                    <div className="w-full lg:w-[50%] flex justify-center items-stretch">
                        <div className="relative lg:translate-x-[15%] max-w-lg w-full py-4 lg:py-0">
                            <div className="relative overflow-hidden rounded-md shadow-xl h-full min-h-[300px] lg:min-h-full bg-black">
                                {!isPlaying ? (
                                    <div
                                        className="relative cursor-pointer group w-full h-full"
                                        onClick={() => setIsPlaying(true)}
                                    >
                                        <img
                                            src={aminuAhmedVideo}
                                            alt="Aminu Ahmed - GMD/CEO Tiamin Group"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Play Icon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                                            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                                <svg
                                                    className="text-white ml-1 w-8 h-8"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <iframe
                                        className="w-full h-full border-0 absolute inset-0"
                                        src="https://www.youtube.com/embed/l9rRS1tLZ7E?autoplay=1"
                                        title="Aminu Ahmed - GMD/CEO Tiamin Group"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="w-full lg:w-[50%] lg:pl-24 flex flex-col justify-center text-left">
                        <p className="text-[#EEC044] text-[18px] md:text-[22px] lg:text-[28px] leading-tight mb-3" style={{ fontFamily: '"Covered By Your Grace", cursive' }}>
                            Versatile Dynamism
                        </p>

                        <h2 className="text-2xl md:text-3xl lg:text-[44px] leading-tight lg:leading-[57.6px] font-extrabold text-[#1F1E17] mb-6">
                            From Agriculture to Global Trading Leadership
                        </h2>

                        <p className="text-[#878680] text-sm md:text-base lg:text-base leading-relaxed mb-5">
                            Tiamin Group’s multi-business portfolio that encompasses a wide
                            range of businesses from road construction, rice processing,
                            farming, charcoal production, commodity exchange and even gold
                            trading on the international platform (Dubai) has added to our
                            versatile dynamism.
                        </p>

                        <p className="text-[#878680] text-sm md:text-base lg:text-base leading-relaxed">
                            With our collective expertise and unwavering dedication to our
                            clients, we aim to become a global leader in food processing and
                            wellness, portfolio finance in commodity trading and travel.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
