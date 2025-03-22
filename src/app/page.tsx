import Image from "next/image";
import styles from "./page.module.css";
import { TransparentLinkButton } from "@/components/transparent-link-button";
import { BottomBlur } from "@/components/bottom-blur";
// import { UpdateApiOptions } from 'cloudinary'

// async function getIntroImages() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/fetchIntro`, {
//       cache: 'no-store', // Ensures fresh data on each request
//     });
//     if (!res.ok) throw new Error('Failed to fetch images');
//     return await res.json();
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

export default async function Home() {
  // const images: UpdateApiOptions[] = await getIntroImages();

  return (
    <div className={styles.page}>
      <div className={styles['text-container']}>
        <p className={styles.title}>Olivia</p>
        <p className={styles['sub-title']}>faz 1</p>
      </div>
      <TransparentLinkButton href={'/abc'}>Venha me ver crescer</TransparentLinkButton>
      <div className={styles['cover-image']}>
        <Image
          src="https://res.cloudinary.com/dmdx95emj/image/upload/v1742600824/CAPA_fsyjwl.jpg"
          alt="Foto da capa"
          fill
        />
        <BottomBlur />
      </div>

    </div>
  );
}
