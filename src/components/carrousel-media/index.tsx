import Image from "next/image";
import styles from "./styles.module.scss";
import { ComponentProps } from "react";

interface Props extends ComponentProps<'div'> {
  type: 'image' | 'video';
  src: string;
}

export function CarrouselMedia({ src, type, ...props }: Props) {
  return (
    <div className={styles.resource} {...props}>
      {type === "image" ? (
        // <img src={slide.src} className="w-full h-auto" alt="" />
        <Image src={src} fill alt="" />
      ) : (
        <video
          src={src}
          className="w-full h-auto"
          autoPlay
          muted
          loop
          playsInline
        />
      )
      }
    </div>
  )
}