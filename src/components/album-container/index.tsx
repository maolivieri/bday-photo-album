'use client'
import { useRef, useState } from "react";
import { NavigationPill } from "../navigation-pill";
import styles from "./styles.module.scss";
import { FoldersGrid } from "../folders-grid";
import { Folder, SubFolder } from "@/app/api/types";
import { BottomBlur } from "../bottom-blur";
import { ImageCarrousel } from "../carrousel";

interface Props {
  pages: Folder[];
}

export function AlbumContainer({ pages }: Props) {
  const [activeFolder, setActiveFolder] = useState<string>(pages[0]?.external_id ?? '');
  const [activeSubFolders, setActiveSubFolders] = useState<SubFolder[] | null>(pages[0]?.sub_folders);
  const [activeSubFolder, setActiveSubFolder] = useState<SubFolder | null>(null);
  const [activeSubFolderIndex, setActiveSubFolderIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const blurColor = activeSubFolder ? "#1A1831" : "#C1BEBB";

  console.log("RES ========> ", pages)


  function handleNavigationClick(id: string, button: HTMLButtonElement) {
    setActiveFolder(id);
    const selectedFolder = pages.find(page => page?.external_id === id);
    if (selectedFolder) {
      setActiveSubFolders(selectedFolder?.sub_folders);
      setActiveSubFolder(null)
    }
    scrollToCenter(button);
  }

  function handleSetActiveSubFolder(index: number | null) {
    if (index === null || !activeSubFolders) {
      setActiveSubFolder(null);
      setActiveSubFolderIndex(null);
    } else {
      const findSubFolder = activeSubFolders[index];
      if (findSubFolder) {
        setActiveSubFolder(findSubFolder);
        setActiveSubFolderIndex(index);
      }
    }
  }


  const scrollToCenter = (button: HTMLButtonElement) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate the scroll position to center the button
    const scrollLeft = button.offsetLeft - (containerRect.width / 2) + (buttonRect.width / 2);

    // Smoothly scroll to that position
    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.page}>
      <BottomBlur background={blurColor} />
      {activeSubFolder ? (
        <ImageCarrousel
          activeSubFolder={activeSubFolder}
          setActiveSubFolder={handleSetActiveSubFolder}
          activeSubFolderIndex={activeSubFolderIndex}
          count={activeSubFolders?.length}
        />
      ) : (
        <FoldersGrid
          subFolders={activeSubFolders}
          setActiveSubFolder={handleSetActiveSubFolder}
        />
      )}
      <nav className={styles.navigation} ref={containerRef}>
        {pages.map((page) => (
          <NavigationPill
            key={page?.external_id}
            $isActive={activeFolder === page?.external_id}
            onClick={(e) => handleNavigationClick(page?.external_id, e.currentTarget)}
            $theme={activeSubFolder ? "dark" : 'light'}
          >
            {page.name}
          </NavigationPill>
        ))}
      </nav>
    </div>
  )
}