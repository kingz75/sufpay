import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import images from assets
import img1 from '../../assets/tiamin-photo/29.jpg';
import img2 from '../../assets/tiamin-photo/30.jpg';
import img3 from '../../assets/tiamin-photo/31.jpg';
import img4 from '../../assets/tiamin-photo/32.jpg';
import img5 from '../../assets/tiamin-photo/33.jpg';

const FarmEvents = () => {
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    const images = [img1, img2, img3, img4, img5];

    return (
        <section className="py-16 max-w-7xl mx-auto px-4 bg-white overflow-hidden">
            <div className=" text-center mb-12">
                <p className="text-[#EEC044] font-medium mb-2" style={{ fontFamily: '"Covered By Your Grace", cursive', fontSize: '1.5rem' }}>
                    From our Galleries
                </p>
                <h2 className="text-4xl lg:text-[48px] font-extrabold text-[#1F1E17]">
                    Farm & Events
                </h2>
            </div>

            <div className="relative">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                        bulletClass: 'swiper-pagination-bullet mx-1 cursor-pointer transition-all duration-300',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="pb-16"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-2xl overflow-hidden h-[400px] md:h-[500px] shadow-lg">
                                <img
                                    src={img}
                                    alt={`Farm and Event ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Container */}
                <div className="custom-pagination flex justify-center items-center mt-8 mb-8 h-4"></div>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate('/gallery')}
                    className="bg-[#4BAF47] text-white px-10 py-3 rounded-2xl font-semibold text-lg hover:bg-[#45a049] transition-colors duration-300 shadow-md"
                >
                    View more
                </button>
            </div>
        </section>
    );
};

export default FarmEvents;
