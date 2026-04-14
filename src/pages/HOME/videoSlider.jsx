import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import videoSliderBg from "../../assets/images/videoSliderBg.png";
// Import Videos
import tiamin_video_1 from "../../assets/videos/tiamin_video_1.mp4";
import tiamin_video_2 from "../../assets/videos/tiamin_video_2.mp4";
import tiamin_video_3 from "../../assets/videos/tiamin_video_3.mp4";
import tiamin_video_4 from "../../assets/videos/tiamin_video_4.mp4";

export default function VideoSlider() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const videoData = [
        { id: 1, video: tiamin_video_1 },
        { id: 2, video: tiamin_video_2 },
        { id: 3, video: tiamin_video_3 },
        { id: 4, video: tiamin_video_4 },
    ];

    const openModal = (video) => {
        setCurrentVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    return (
        <section className="w-full py-24 overflow-hidden" style={{ backgroundImage: `url(${videoSliderBg})`, backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}>
            <div className="w-full lg:px-20 px-0">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    spaceBetween={40}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 70,
                        },
                    }}
                    className="video-swiper !overflow-visible [&_.swiper-slide]:!bg-transparent"
                >
                    {videoData.map((item, index) => (
                        <SwiperSlide key={index} className="!bg-transparent">
                            {({ isActive }) => (
                                <div
                                    className={`relative transition-all duration-700 ease-out overflow-hidden bg-transparent cursor-pointer ${isActive
                                        ? "scale-110 sm:scale-125 z-20"
                                        : "scale-90 z-10"
                                        }`}
                                    style={{
                                        transformOrigin: "center center",
                                        backgroundColor: 'transparent',
                                    }}
                                    onClick={() => openModal(item.video)}
                                >
                                    <div className="relative group">
                                        <video
                                            src={item.video}
                                            className="w-full aspect-video object-cover bg-transparent"
                                            muted
                                            playsInline
                                            preload="metadata"
                                            onMouseOver={(e) => e.target.play()}
                                            onMouseOut={(e) => {
                                                e.target.pause();
                                                e.target.currentTime = 0;
                                            }}
                                        />
                                        {/* Play Icon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                                            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
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
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            {/* Video Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <video
                            src={currentVideo}
                            className="w-full h-full"
                            controls
                            autoPlay
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

