import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import SwiperCustomButtons from "./SwiperCustomButtons";

import img1 from "../assets/zonasComunes/1.1.jpg";
import img2 from "../assets/zonasComunes/1.2.jpg";
import img3 from "../assets/zonasComunes/1.3.jpg";
import img4 from "../assets/zonasComunes/1.4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function ZonesSwiper() {
  return (
    <div className="w-full relative box-border">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".zones-next",
          prevEl: ".zones-prev",
        }}
        className="ZonesSwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className="rounded-lg" />
        </SwiperSlide>
      </Swiper>
      <SwiperCustomButtons next={"zones-next"} prev={"zones-prev"} />
    </div>
  );
}

export default ZonesSwiper;
