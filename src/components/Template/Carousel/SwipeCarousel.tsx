import React, { useState } from "react";
import {
  SwipeCarouselChildContainer,
  SwipeCarouselContainer,
} from "../StyledCommonTemplateComponents";
import { useMotionValue } from "framer-motion";
import { Dots } from "./Dots";
import BlogCard from "../BlogCard/BlogCard";

const DRAG_BUFFER = 50;

const objectData = [
  {
    title:
      "Implementing Payment Transactions with Stripe in Node.js(Express) and React.js: Holding, Confirming, and Declining Payments",
    description: "Lorem Ipsum",
    link: "https://medium.com/@micvillacarlos/implementing-payment-transactions-with-stripe-in-node-js-express-de7611bc4e95",
  },
];

export const SwipeCarousel = () => {
  const [objectIndex, setObjectIndex] = useState<number>(0);

  const dragX = useMotionValue(0);
  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && objectIndex < objectData.length - 1) {
      setObjectIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && objectIndex > 0) {
      setObjectIndex((pv) => pv - 1);
    }
  };

  return (
    <>
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
            translateX: `-${objectIndex * 105}%`,
          }}
          onDragEnd={onDragEnd}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 300,
            damping: 50,
          }}
        >
          {objectData.map((item: any, index: number) => {
            return (
              <BlogCard
                description=""
                title={item.title}
                key={index}
                link={item.link}
              />
            );
          })}
        </SwipeCarouselChildContainer>
      </SwipeCarouselContainer>
      <Dots
        objIndex={objectIndex}
        setObjIndex={setObjectIndex}
        objectData={objectData}
      />
    </>
  );
};
