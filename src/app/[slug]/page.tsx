import Image from "next/image";
import styles from "./page.module.css";
import { TransparentLinkButton } from "@/components/transparent-link-button";
import { BottomBlur } from "@/components/bottom-blur";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <div className={styles.page}>
      <div className={styles['text-container']}>
        <p className={styles.title}>Olivia</p>
        <p className={styles['sub-title']}>faz 1</p>
      </div>
      <TransparentLinkButton href={`${slug}/album`}>Venha me ver crescer</TransparentLinkButton>
      <div className={styles['cover-image']}>
        <Image
          className={styles['bg-image']}
          src="https://res.cloudinary.com/dmdx95emj/image/upload/v1742600824/CAPA_fsyjwl.jpg"
          alt="Foto da capa"
          fill
        />
        <BottomBlur background="#1A1831" />
      </div>
    </div>
  );
}
