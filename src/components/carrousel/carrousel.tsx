"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import style from "./styles.module.scss";

interface Props {
  slides: Slides[]
}

export interface Slides {
  type: "image" | "video";
  src: string
}

export default function Carousel({ slides }: Props) {
  console.log("SLIDES DEDSDS", slides)

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
      style={{
        position: "absolute",
        zIndex: "-1",
        inset: 0
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className={style.resource}>
            {slide.type === "image" ? (
              // <img src={slide.src} className="w-full h-auto" alt="" />
              <Image src={slide.src} fill alt="" />
            ) : (
              <video
                src={slide.src}
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
              />
            )
            }
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
