import { SubFolder } from "@/app/api/types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { BottomBlur } from "../bottom-blur";



interface Props {
  subFolder: SubFolder;
  $colSpan: 1 | 2;
}

export function SubFolderCard({ subFolder, $colSpan }: Props) {

  const spanClass = $colSpan === 1 ? styles.singleSpan : styles.doubleSpan;

  const folderImages = subFolder.resources.filter(r => r.resource_type === 'image')
  const coverImage = folderImages[0];
  return (
    <div className={`${styles.card} ${spanClass}`}>
      {coverImage && (
        <Image
          src={coverImage.secure_url}
          alt={coverImage.display_name}
          fill
        />
      )}
      <BottomBlur background="#1A1831" />
      <p className={styles.title}>{subFolder.name.substring(3)}</p>
    </div>
  )
}