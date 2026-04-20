import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Slide1 from "../../../assets/images/slide1.jpg";
import Slide2 from "../../../assets/images/slide2.jpg";
import Slide3 from "../../../assets/images/slide3.jpg";
import Slide4 from "../../../assets/images/slide4.jpg";
import Slide5 from "../../../assets/images/slide5.jpg";

const slides = [
  {
    image: Slide1,
    title: "Advanced Reconnaissance and Tactical Defense",
    text: "We provide highly modular surveillance platforms and tactical equipment designed for land and maritime protection.",
  },
  {
    image: Slide2,
    title: "Thermal Imaging Platforms",
    text: "We specialize in long-range PTZ (Pan-Tilt-Zoom) thermal cameras that provide 24/7 visibility in total darkness, fog, or smoke.",
  },
  {
    image: Slide3,
    title: "Tactical Sourcing & PPE",
    text: "Our wire-free, high-lumen solar systems eliminate grid dependency while enhancing safety in villages, resorts, and municipal zones.",
  },
  {
    image: Slide4,
    title: "Industrial Drones & UAV Technology",
    text: "Our wire-free, high-lumen solar systems eliminate grid dependency while enhancing safety in villages, resorts, and municipal zones.",
  },
  {
    image: Slide5,
    title: "Infrastructure & Energy",
    text: "SufPay Ltd combines general contracting expertise with modern renewable energy solutions to build a resilient future for Nigerian communities and industries.",
  },
];

const autoplay = {
  delay: 3000,
  disableOnInteraction: false,
};

const swiperBreakpoints = {
  480: {
    slidesPerView: 1.3,
    spaceBetween: 16,
  },
  640: {
    slidesPerView: 1.8,
    spaceBetween: 18,
  },
  768: {
    slidesPerView: 2.2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
};

function ShowcaseCard({ image, title, text }) {
  return (
    <div className="rounded-[16px] border border-[#e7ebdd] bg-white p-4 flex flex-col">
      <div className="h-[200px] sm:h-[220px] lg:h-[260px] w-full overflow-hidden rounded-[12px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-3 text-start text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-5 text-[#2C2C2C]">
        {title}
      </p>
      <p className="mt-2 text-start text-[13px] sm:text-[14px] text-[#2C2C2C] line-clamp-3">
        {text}
      </p>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="mb-2 bg-[#FFFFFF] px-4 py-10 sm:px-6 md:px-10 lg:px-[160px] lg:py-20">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={autoplay}
        breakpoints={swiperBreakpoints}
        pagination={{ clickable: true }}
        className="mySwiper !py-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <ShowcaseCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
