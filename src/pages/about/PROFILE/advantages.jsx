import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Adimage1 from "../../../assets/images/adimage1.png";
import Adimage2 from "../../../assets/images/adimage2.png";
import Adimage3 from "../../../assets/images/adimage3.png";

const images = [Adimage1, Adimage2, Adimage3];

export default function Advantages() {
  return (
    <section className="bg-[#FFFFFF] py-14 px-4 sm:px-6 lg:px-[160px] lg:py-20">
      <div>
        <div className="text-center">
          <h3 className="text-[32px] sm:text-[36px] lg:text-[40px] font-medium text-[#2C2C2C]">
            The SufPay Advantage
          </h3>
          <p className="mx-auto mt-4 max-w-[750px] text-base sm:text-lg lg:text-[18px] leading-7 lg:leading-8 text-[#4E4E4E]">
            At SufPay Ltd., we don't just build solutions — we power the systems
            that drive transactions, security, and infrastructure across a
            rapidly evolving Nigeria.
          </p>
        </div>

        <div className="mt-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            pagination={{ clickable: true }}
            className="mySwiper !pb-10"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img
                    src={image}
                    alt={`Advantage ${index + 1}`}
                    className="w-full max-w-[400px] h-auto object-cover rounded-[16px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
