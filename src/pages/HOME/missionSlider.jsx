import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/images/m1.png";
import img2 from "../../assets/images/m2.png";
import img3 from "../../assets/images/m1.png";

export default function MissionSlider() {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    centeredSlides
                    spaceBetween={20}
                    loop
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    className="mission-swiper pb-16 [&_.swiper-wrapper]:items-end"
                >
                    {[
                        {
                            image: img1,
                            title: "Leading Across Sectors with Agricultural Commitment",
                            text:
                                "Tiamin Group is a conglomerate with a diversified portfolio of businesses operating across various sectors. With a strong foothold in the agricultural industry.",
                        },
                        {
                            image: img2,
                            title: "Our Mission",
                            text:
                                "We strive to be socially responsible and environmentally conscious in all aspects of our operations while maintaining the highest standards of innovation and excellence.",
                        },
                        {
                            image: img3,
                            title: "Social Responsibility:",
                            text:
                                "We actively seek ways to give back to our community, supporting causes related to health, education, and environmental sustainability.",
                        },
                        {
                            image: img1,
                            title: "Leading Across Sectors with Agricultural Commitment",
                            text:
                                "Tiamin Group is a conglomerate with a diversified portfolio of businesses operating across various sectors. With a strong foothold in the agricultural industry.",
                        },
                        {
                            image: img2,
                            title: "Our Mission",
                            text:
                                "We strive to be socially responsible and environmentally conscious in all aspects of our operations while maintaining the highest standards of innovation and excellence.",
                        },
                        {
                            image: img3,
                            title: "Social Responsibility:",
                            text:
                                "We actively seek ways to give back to our community, supporting causes related to health, education, and environmental sustainability.",
                        },
                    ].map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            {({ isActive }) => (
                                <div
                                    className={`transition-all duration-700 ease-out ${isActive
                                        ? "scale-105"
                                        : "scale-100"
                                        }`}
                                >
                                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                        <div className={`overflow-hidden transition-all duration-700 ${isActive ? "h-72" : "h-44"}`}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="p-6 text-left">
                                            <h3 className="font-extrabold text-[#1F1E17] mb-3 text-[22px]">
                                                {item.title}
                                            </h3>
                                            <p className="text-[12px] text-[#878680] leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
