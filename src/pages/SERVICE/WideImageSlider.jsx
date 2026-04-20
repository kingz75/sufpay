import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import abimage1 from '../../assets/images/service1.png';
import abimage2 from '../../assets/images/service2.png';
import abimage3 from '../../assets/images/service3.png';
import abimage4 from '../../assets/images/service4.png';
import abimage5 from '../../assets/images/service5.png';
import abimage6 from '../../assets/images/service6.png';
import abimage7 from '../../assets/images/service7.png';
import abimage8 from '../../assets/images/service8.png';

const slidesData = [
    {
        src: abimage1,
        alt: 'Warehouse logistics and product handling',
        fit: 'cover',
    },
    {
        src: abimage2,
        alt: 'Modern office and workspace setup',
        fit: 'cover',
    },
    {
        src: abimage3,
        alt: 'Agricultural supply and farm operations',
        fit: 'cover',
    },
    {
        src: abimage4,
        alt: 'Heavy equipment and industrial supply',
        fit: 'cover',
    },
    {
        src: abimage5,
        alt: 'Vehicle and machinery distribution showcase',
        fit: 'contain',
    },
    {
        src: abimage6,
        alt: 'Vehicle and machinery distribution showcase',
        fit: 'contain',
    },
    {
        src: abimage7,
        alt: 'Vehicle and machinery distribution showcase',
        fit: 'contain',
    },
    {
        src: abimage8,
        alt: 'Vehicle and machinery distribution showcase',
        fit: 'contain',
    },
];

// Duplicate slides to ensure loop is seamless and fills the whole screen width
const repeatedSlides = [...slidesData, ...slidesData, ...slidesData];

export default function WideImageSlider() {
    return (
        <div className="relative  w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect="coverflow"
                loop={true}
                centeredSlides={true}
                slidesPerView="auto"
                initialSlide={slidesData.length} // Start in the middle of the triple-array
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false, // Ensure it keeps moving
                }}
                coverflowEffect={{
                    rotate: 35,
                    stretch: -30, // Pull items closer to avoid gaps
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                className="coverflow-slider !px-0"
            >
                {repeatedSlides.map((slide, index) => (
                    <SwiperSlide key={index} className="coverflow-slide">
                        <div className="coverflow-slide-inner">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className={`w-full h-full ${
                                    slide.fit === 'contain'
                                        ? 'object-contain  p-3'
                                        : 'object-cover'
                                }`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
