import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import SwiperCustomButtons from "./SwiperCustomButtons";

import apartmentImg0 from "../assets/main-bg.png";
import apartmentImg01 from "../assets/apartmentsImgs/Apartment01.png";
import apartmentImg02 from "../assets/apartmentsImgs/2.jpg";
import apartmentImg03 from "../assets/apartmentsImgs/3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function ApartmentsSwiper() {
  return (
    <div className="w-full relative box-border">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          760: {
            slidesPerView: 1.7,
          },
        }}
        className="apartmentsSwiper"
      >
        <SwiperSlide>
          <img src={apartmentImg0} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apartmentImg01} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apartmentImg02} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apartmentImg03} alt="" />
        </SwiperSlide>
      </Swiper>
      <SwiperCustomButtons next={"custom-next"} prev={"custom-prev"} />
    </div>
  );
}

export default ApartmentsSwiper;
