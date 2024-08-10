'use client';

import React from 'react';

// SwiperJs
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// AosCss
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerSlider = () => {
  // Effects
  React.useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      once: false,
      duration: 800,
      delay: 30,
    });
  }, []);

  return (
    <div>
      <Swiper
        loop
        autoplay={{
          stopOnLastSlide: false,
          delay: 5500,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        onSlideChange={() => AOS.refresh()}
      >
        <SwiperSlide>
          <div className="h-[300px] w-full bg-[url('/images/banner/banner1.jpg')] bg-cover bg-center bg-no-repeat sm:h-[510px] lg:h-[760px]">
            <div className="flex size-full flex-col items-start justify-center px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40">
              <span
                data-aos="fade-down"
                className="h-[5px] w-[50px] bg-[#3474d4]"
              ></span>
              <h1
                data-aos="fade-down"
                className="my-[25px] font-montserrat text-lg font-bold text-[#555555] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              >
                New Fashion Collection
              </h1>
              <p
                data-aos="fade-down"
                className="mb-3 font-montserrat text-xl font-normal tracking-wider text-[#444444] md:text-2xl lg:text-3xl xl:text-4xl"
              >
                Sale Offer
              </p>
              <p
                data-aos="fade-down"
                className="max-w-[230px] font-poppins text-sm font-normal tracking-wide text-[#777777] sm:max-w-[300px] sm:text-base"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[300px] w-full bg-[url('/images/banner/banner2.jpg')] bg-cover bg-center bg-no-repeat sm:h-[510px] lg:h-[760px]">
            <div className="flex size-full flex-col items-start justify-center px-6 sm:px-16 md:px-24 lg:px-32 xl:px-40">
              <span
                data-aos="fade-down"
                className="h-[5px] w-[50px] bg-[#3474d4]"
              ></span>
              <h1
                data-aos="fade-down"
                className="my-[25px] font-montserrat text-lg font-bold text-[#555555] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              >
                Boat Headphone Sets
              </h1>
              <p
                data-aos="fade-down"
                className="mb-3 font-montserrat text-xl font-normal tracking-wider text-[#444444] md:text-2xl lg:text-3xl xl:text-4xl"
              >
                Sale Offer
              </p>
              <p
                data-aos="fade-down"
                className="max-w-[230px] font-poppins text-sm font-normal tracking-wide text-[#777777] sm:max-w-[300px] sm:text-base"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
