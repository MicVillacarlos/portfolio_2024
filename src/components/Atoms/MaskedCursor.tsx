import React, { useEffect, useState } from "react";
import {
  ImageArt,
  ImageOriginal,
  MaskContainer,
  ParentMaskContainer,
} from "./StyledMaskCursor";
import { backOut } from "framer-motion";
import { windowScreenSize } from "../../utils/media_query";

const MaskedCursor = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const setFromEvent = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const screenResize = () => {
      const { innerWidth: width } = window;
      setScreenWidth(width);
    }
    
    window.addEventListener("mousemove", setFromEvent);
    window.addEventListener('resize', screenResize);
    return () => {
      window.addEventListener("mousemove", setFromEvent);
      window.removeEventListener('resize', screenResize);
    };
  }, []);

  return (
    <ParentMaskContainer>
      <MaskContainer
        animate={{
          WebkitMaskPosition: `${screenWidth / 2 - mousePosition.x}px ${
          screenWidth / 2 - mousePosition.y
        }px`,
        }}
        transition={{ type: "tween", ease: backOut }}
      >
        <ImageOriginal />
      </MaskContainer>
      <ImageArt />
    </ParentMaskContainer>
  );
};

export default MaskedCursor;
