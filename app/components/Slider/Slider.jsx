"use client";

import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]}
      spaceBetween={10}
      slidesPerView={props.count}
      navigation={true}
      rewind={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{
        delay: props.delay,
        disableOnInteraction: false,
      }}
      loop={true}
      lazyPreloadPrevNext={1}
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1500: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1820: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      className={props.styles}
    >
      {/* Render each SwiperSlide using the props.children */}
      {React.Children.map(props.children, (child, index) => (
        <SwiperSlide key={child} virtualIndex={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
