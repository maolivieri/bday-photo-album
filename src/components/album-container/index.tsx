'use client'
import { useRef, useState } from "react";
import { NavigationPill } from "../navigation-pill";
import styles from "./styles.module.scss";
import { FoldersGrid } from "../folders-grid";
import { Folder, SubFolder } from "@/app/api/types";
import { usePathname } from "next/navigation";

interface Props {
  pages: Folder[];
}

export function AlbumContainer({ pages }: Props) {
  const [activeFolder, setActiveFolder] = useState<string>(pages[0].external_id ?? '');
  const [activeSubFolder, setActiveSubFolder] = useState<SubFolder[] | null>(pages[0].sub_folders);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Get the current URL

  function handleNavigationClick(id: string, button: HTMLButtonElement) {
    setActiveFolder(id);
    const selectedFolder = pages.find(page => page.external_id === id);
    if (selectedFolder) {
      setActiveSubFolder(selectedFolder?.sub_folders);
    }
    scrollToCenter(button);
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
    <>
      <FoldersGrid subFolders={activeSubFolder} pathname={pathname} />
      <nav className={styles.navigation} ref={containerRef}>
        {pages.map((page) => (
          <NavigationPill
            key={page.external_id}
            $isActive={activeFolder === page.external_id}
            onClick={(e) => handleNavigationClick(page.external_id, e.currentTarget)}
          >
            {page.name}
          </NavigationPill>
        ))}
      </nav>
    </>
  )
}