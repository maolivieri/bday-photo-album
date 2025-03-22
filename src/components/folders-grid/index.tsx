import { SubFolder } from "@/app/api/types";
import styles from "./styles.module.scss";
import { SubFolderCard } from "../sub-folder-card";
import { getGridConfig } from "./config";

interface Props {
  subFolders: SubFolder[] | null;
}

export function FoldersGrid({ subFolders }: Props) {
  console.log(subFolders);
  console.log(subFolders?.length);

  const gridConfig = getGridConfig(subFolders?.length ?? 0);

  return (
    <div className={styles['folders-grid']}>
      {subFolders && subFolders.map((subFolder, index) => (
        <SubFolderCard
          key={subFolder.external_id}
          subFolder={subFolder}
          $colSpan={gridConfig[index + 1]}
        />
      ))}
    </div>

  )
}

