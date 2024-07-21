import React, { useState } from "react";
import {
  SwipeCarouselChildContainer,
  SwipeCarouselContainer,
} from "./StyledCommonTemplateComponents";
import { CommonFlexContainer } from "../Atoms/CommonAtomComponents";
import { useMotionValue } from "framer-motion";

const DRAG_BUFFER = 50;

const objectData = [
  {
    title: "Hello1",
  },
  {
    title: "Hello2",
  },
  {
    title: "Hello3",
  },
  {
    title: "Hello4",
  },
  {
    title: "Hello5",
  },
];

export const SwipeCarousel = () => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [objectIndex, setObjectIndex] = useState<number>(0);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && objectIndex < objectData.length - 1) {
      setObjectIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && objectIndex > 0) {
      setObjectIndex((pv) => pv - 1);
    }
  };
  console.log(objectIndex);
  return (
    <SwipeCarouselContainer>
      <SwipeCarouselChildContainer
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${objectIndex * 100}%`,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {objectData.map((item: any, index: number) => {
          return (
            <CommonFlexContainer
              flexshrink={0}
              height="200px"
              width="100%"
              key={index}
            >
              {item.title}
            </CommonFlexContainer>
          );
        })}
      </SwipeCarouselChildContainer>
    </SwipeCarouselContainer>
  );
};
