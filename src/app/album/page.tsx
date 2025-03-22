import { BottomBlur } from "@/components/bottom-blur";
import styles from "./page.module.scss";
import { AlbumContainer } from "@/components/album-container";
import { getFolders } from "@/lib/api/getFolders";

export default async function Album() {
  const pagesResponse = await getFolders();

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