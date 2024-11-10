import styled from "styled-components";
import { device, size } from "../../utils/media_query";
import { motion } from "framer-motion";

export const PageHolder = styled.div`
  margin: auto;
  width: 1048px;
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
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  /* gap: 5px; */
`;

export const StyledGridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  text-align: center;
`;

export const SwipeCarouselContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 380px;
  padding: 5px;

  @media ${device.tablet} {
    width: 300px;
  }
`

export const SwipeCarouselChildContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: grab;

  :active{
    cursor: grabbing;
  }
`;

export const StyledDotsButton = styled.button`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  border: 0;
  margin: 2px;
  background-color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.gray};
`;