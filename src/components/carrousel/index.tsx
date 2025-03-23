'use client'
import { SubFolder } from "@/app/api/types";
import { CloseButton } from "../close-button";
import { NavigateCarrouselButtonLeft, NavigateCarrouselButtonRight } from "../navigate-carrousel-button";
import { Slides } from "./swiper";
import { ResourceInfoBox } from "../resource-info-box";
import { useEffect } from "react";
import { KeenSliderCarousel } from "./keenSlider";

interface Props {
  setActiveSubFolder: (subFolderIndex: number | null) => void;
  activeSubFolder: SubFolder | null;
  activeSubFolderIndex: number | null;
  count?: number;
}

export function ImageCarrousel({ setActiveSubFolder, activeSubFolder, activeSubFolderIndex, count }: Props) {
  useEffect(() => { }, [activeSubFolder])
  const canReturn = (0 !== activeSubFolderIndex);
  const canProceed = count && ((count - 1) !== activeSubFolderIndex);

  function handleNavigationClick(proceed: boolean) {
    console.log(activeSubFolderIndex)
    if (activeSubFolderIndex !== null) {
      const newIndex = proceed ? (activeSubFolderIndex + 1) : (activeSubFolderIndex - 1);
      setActiveSubFolder(newIndex)
    }
  }

  const resources = activeSubFolder?.resources.sort((a, b) => a.display_name.localeCompare(b.display_name)) ?? []
  const resourceMetadata = resources[0]?.context?.custom;

  const slides: Slides[] = resources.map(rs => ({
    type: rs.resource_type === 'image' ? 'image' : 'video',
    src: rs.secure_url
  }));

  return (
    <div>
      {/* <SwiperCarousel slides={slides} /> */}
      <KeenSliderCarousel slides={slides} />
      <CloseButton onClick={() => setActiveSubFolder(null)} />
      {canReturn && (<NavigateCarrouselButtonLeft onClick={() => handleNavigationClick(false)} />)}
      {canProceed && (<NavigateCarrouselButtonRight onClick={() => handleNavigationClick(true)} />)}
      {resourceMetadata && (<ResourceInfoBox
        title={activeSubFolder?.name.substring(3) ?? ""}
        metadata={resourceMetadata}
      />)}
    </div>
  )
}