import styled from "styled-components";
import { device, size } from "../../utils/media_query";
import { motion } from "framer-motion";

export const PageHolder = styled.div`
  margin: auto;
  width: 1024px;
  padding-left: 5px;
  padding-right: 5px;

  @media ${device.laptop} {
    width: ${size.tablet};
  }

  @media ${device.tablet} {
    width: ${size.mobileS};
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
`;

export const StyledGridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  text-align: center;
`;

export const SwipeCarouselContainer = styled.div`
  /* display: "relative"; */
  overflow: hidden;
  height: 100%;
  background-color: red;
  padding: 5px;
`

export const SwipeCarouselChildContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: grab;
  background-color: "green";

  :active{
    cursor: grabbing;
  }
`;