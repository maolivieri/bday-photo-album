import { BottomBlur } from "@/components/bottom-blur";
import styles from "./page.module.scss";
import { AlbumContainer } from "@/components/album-container";
import { Folder } from "../api/types";


async function getPages(): Promise<Folder[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/getAlbuns`);
    if (!res.ok) throw new Error('Falha ao buscar albums');
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Album() {
  const pagesResponse = await getPages();

  const pages = pagesResponse
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(page => ({
      ...page,
      name: page.name.substring(3)
    }))

  return (
    <div className={styles.page}>
      <BottomBlur />
      <AlbumContainer pages={pages} />
    </div>
  )
}