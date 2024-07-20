import styled from "styled-components";
import { device } from "../../../utils/media_query";
import { motion } from "framer-motion";

interface ProjectCardProps {
    justify?: string;
    align?: string;
    height?: string;
    width?: string;
    widthTablet?: string;
    isColumn?: boolean;
    isColumnTablet?: boolean;
    isRoundedCorners?: boolean;
    background?: string;
    gap?: string;
    margin?: string;
    marginTop?: string;
    marginTopTablet?: string;
    padding?: string;
    borderLeft?: string;
    borderRight?: string;
    borderTop?: string;
    borderBottom?: string;
    borderColor?: string;
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
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-color: ${(props) => props.theme.text};
  padding: ${(props) => props.padding};
  word-break: break-word;
  margin-top: ${(props) => props.marginTop};
  border-radius: ${(props) => props.isRoundedCorners && "10px"};
  border: ${(props) =>
    props.borderColor && `1px solid ${props.theme[props.borderColor]}`};

  @media ${device.tablet} {
    margin-top: ${(props) =>
      props.marginTopTablet ? props.marginTopTablet : props.marginTop};
    flex-direction: ${(props) => (props.isColumnTablet ? "column" : "row")};
    width: ${(props) => props.widthTablet};
  }

  :hover {
    cursor: pointer;
  }
`;