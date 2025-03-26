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
        <div className={styles.image}>
          <Image
            src={src}
            fill
            alt=""
          />
        </div>
      ) : (
        <video
          src={src}
          className={styles.video}
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