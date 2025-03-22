'use client'
import { SubFolder } from "@/app/api/types";
import { CloseButton } from "../close-button";
import { NavigateCarrouselButtonLeft, NavigateCarrouselButtonRight } from "../navigate-carrousel-button";
import Carousel, { Slides } from "./carrousel";
import styles from "./styles.module.scss";

interface Props {
  setActiveSubFolder: (subFolderIndex: number | null) => void;
  activeSubFolder: SubFolder | null;
  activeSubFolderIndex: number | null;
  count?: number;
}

export function ImageCarrousel({ setActiveSubFolder, activeSubFolder, activeSubFolderIndex, count }: Props) {
  const canReturn = (0 !== activeSubFolderIndex);
  const canProceed = count && ((count - 1) !== activeSubFolderIndex);

  function handleNavigationClick(proceed: boolean) {
    console.log(activeSubFolderIndex)
    if (activeSubFolderIndex !== null) {
      const newIndex = proceed ? (activeSubFolderIndex + 1) : (activeSubFolderIndex - 1);
      setActiveSubFolder(newIndex)
    }
  }
  console.log(activeSubFolder?.resources);

  const slides: Slides[] = activeSubFolder?.resources.map(rs => ({
    type: rs.resource_type === 'image' ? 'image' : 'video',
    src: rs.secure_url
  })) ?? [];

  return (
    <div className={styles.carrouselInset}>
      <Carousel slides={slides} />
      <CloseButton onClick={() => setActiveSubFolder(null)} />
      {canReturn && (<NavigateCarrouselButtonLeft onClick={() => handleNavigationClick(false)} />)}
      {canProceed && (<NavigateCarrouselButtonRight onClick={() => handleNavigationClick(true)} />)}
      {/* {activeSubFolder?.name} */}
    </div>
  )
}