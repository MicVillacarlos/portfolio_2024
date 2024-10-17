import styled from "styled-components";
import { device } from "../../utils/media_query";
import { motion } from "framer-motion";

interface ProjectCardProps {
  justify?: string;
  align?: string;
  height?: string;
  width?: string;
  widthTablet?: string;
  isColumn?: boolean;
  iscolumntablet?: boolean;
  isRoundedCorners?: boolean;
  background?: string;
  gap?: string;
  margin?: string;
  marginTop?: string;
  marginTopTablet?: string;
  padding?: string;
  borderLeft?: string;
  borderright?: string;
  borderTop?: string;
  borderBottom?: string;
  bordercolor?: string;
  isMouseOver?: boolean;
}

export const ProjectCardContainer = styled(motion.div)<ProjectCardProps>`
  gap: ${(props) => props.gap};
  display: flex;

  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height};
  flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  background-color: ${(props) =>
    props.background ? props.theme[props.background] : ""};
  margin: ${(props) => props.margin};
  border-right: ${(props) => props.borderright};
  border-left: ${(props) => props.borderLeft};
  border-color: ${(props) => props.theme.text};
  padding: ${(props) => props.padding};
  word-break: break-word;
  margin-top: ${(props) => props.marginTop};
  border-radius: ${(props) => props.isRoundedCorners && "10px"};
  border: ${(props) =>
  props.bordercolor && `1px solid ${props.theme[props.bordercolor]}`};
  border-radius: 10px;
  /* flex-shrink:0; */

  @media ${device.tablet} {
    margin-top: ${(props) =>
      props.marginTopTablet ? props.marginTopTablet : props.marginTop};
    flex-direction: ${(props) => (props.iscolumntablet ? "column" : "row")};
    width: ${(props) => props.widthTablet};
  }

  img{
    object-fit: cover;
  }

  :hover {
    cursor: pointer;
  }
`;

export const ProjectCardImageContainer = styled.div<ProjectCardProps>`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: ${(props) => `1px solid ${props.theme.text}`};
  position: relative;
  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    position: relative;
    z-index: 1;
    display: ${(props) => !props.isMouseOver && "none"};
  }

  img{
    -webkit-filter: grayscale(100%); 
    filter: grayscale(100%);
  }

  img {
    position: absolute;
    z-index: 0;
    -webkit-filter: ${(props) => props.isMouseOver && "grayscale(0%)"};
    filter: ${(props) => props.isMouseOver && "grayscale(0%)"};
    height: 100%;
    width: 100%;
  }
`;

export const BackdropContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const ModalContainer = styled(motion.div)`
  width: clamp(50%, 700px, 90%);
  height: min(50%, 500px);
  background-color: ${(props) => props.theme.body};
  border: ${(props) => `1px solid ${props.theme.text}`};
  display:flex;
`;

export const ImageModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  img{
    object-fit: cover;
    width: 100%;            /* make the image fill the width of its parent */
    height: 100%; 
  }
`;

export const DetailsModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: scroll;
  width: 50%;
`;