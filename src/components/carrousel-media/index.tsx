import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  type: 'image' | 'video';
  src: string;
}

export function CarrouselMedia({ src, type }: Props) {
  return (
    <div className={styles.resource}>
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