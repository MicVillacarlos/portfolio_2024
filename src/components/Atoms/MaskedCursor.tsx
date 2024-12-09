import React, { useEffect, useState } from "react";
import {
  ImageArt,
  ImageOriginal,
  MaskContainer,
  ParentMaskContainer,
} from "./StyledMaskCursor";
import { backOut } from "framer-motion";

const MaskedCursor = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    // Only runs in the browser
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    const setFromEvent = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Set initial width on mount
    handleResize();

    window.addEventListener("mousemove", setFromEvent);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const minusWidth = (number: number) => {
    if (number > 500) {
      return number / 4.5
    } else {
      return number/2
    }
  }
  return (
    <ParentMaskContainer>
      <MaskContainer
        animate={{
          WebkitMaskPosition:
            `${mousePosition.x - minusWidth(screenWidth)}px ${mousePosition.y - 300}px`,
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
