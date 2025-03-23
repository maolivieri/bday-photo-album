import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from "./styles.module.scss";
import { CarrouselMedia } from "../carrousel-media";

interface Props {
  slides: Slides[]
}

export interface Slides {
  type: "image" | "video";
  src: string
}

// const animation = { duration: 5000, easing: (t: number) => t }

export function KeenSliderCarousel({ slides }: Props) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ])

  return (
    <div className={`${styles.carousel}`}>
      <div ref={sliderRef} className={`keen-slider`}>
        {slides.map((slide, index) => (
          <CarrouselMedia
            key={index}
            className={`keen-slider__slide number-slide${index + 1}`}
            src={slide.src}
            type={slide.type}
          />
        ))}
        {/* <div className="keen-slider__slide number-slide1">1</div> */}
        {/* <div className="keen-slider__slide number-slide2">2</div> */}
        {/* <div className="keen-slider__slide number-slide3">3</div> */}
        {/* <div className="keen-slider__slide number-slide4">4</div> */}
        {/* <div className="keen-slider__slide number-slide5">5</div> */}
        {/* <div className="keen-slider__slide number-slide6">6</div> */}
      </div>
    </div>
  )
}