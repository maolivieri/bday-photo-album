"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useRef } from "react";
import { CarrouselMedia } from "../carrousel-media";

interface Props {
  slides: Slides[]
}

export interface Slides {
  type: "image" | "video";
  src: string
}

export default function Carousel({ slides }: Props) {
  // useEffect(() => {
  // }, [slides])

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.swiper.autoplay.start(); // Restart autoplay when component mounts
      }, 500);
    }
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false, stopOnLastSlide: false }}
      loop
      style={{
        position: "absolute",
        zIndex: "-1",
        inset: 0
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <CarrouselMedia
            src={slide.src}
            type={slide.type}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
