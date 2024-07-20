import styled from "styled-components";
import { device } from "../../utils/media_query";
import { motion } from "framer-motion";

interface DividerProps {
  height?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  isHideTablet?: boolean;
}

interface GhostButtonProps {
  isHover?:boolean
}

interface FlexProps {
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

interface CommonOblongContainerProps {
  borderColor?: string;
  background?: string;
}

export const CommonDivider = styled.div<DividerProps>`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.text};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};

  @media ${device.tablet} {
    display: ${(props) => props.isHideTablet && "none"};
  }
`;

export const CommonFlexContainer = styled.div<FlexProps>`
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
  border: ${(props) => props.borderColor && `1px solid ${props.theme[props.borderColor]}`};

  @media ${device.tablet} {
    margin-top: ${(props) => props.marginTopTablet ? props.marginTopTablet : props.marginTop};
    flex-direction: ${(props) => (props.isColumnTablet ? "column" : "row")};
    width: ${(props) => props.widthTablet};
  }
`;

export const CommonOblongContainer = styled.div<CommonOblongContainerProps>`
  padding: 0px 10px;
  border-radius: 500px;
  background-color: ${(props) =>
    props.background && props.theme[props.background]};
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme[props.borderColor]}`
      : `1px solid ${props.theme.text}`};
  display: flex;
  align-items: center;
  justify-content: center;
`;
