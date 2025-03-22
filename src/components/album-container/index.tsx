'use client'
import { useState } from "react";
import { NavigationPill } from "../navigation-pill";
import styles from "./styles.module.scss";
import { FoldersGrid } from "../folders-grid";
import { Folder } from "@/app/api/types";

interface Props {
  pages: Folder[];
}

export function AlbumContainer({ pages }: Props) {
  const [activePage, setActivePage] = useState(0);
  console.log(pages)

  function handleNavigationClick(pageIndex: number) {
    setActivePage(pageIndex)
  }

  return (
    <>
      <FoldersGrid />
      <nav className={styles.navigation}>
        {pages.map((page, index) => (
          <NavigationPill
            key={index}
            $isActive={activePage === index}
            onClick={() => handleNavigationClick(index)}
          >
            {page.name}
          </NavigationPill>
        ))}
      </nav>
    </>
  )
}