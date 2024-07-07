import styled from "styled-components";
import { device } from "../../utils/media_query";

interface DividerProps {
  height?: string;
}

interface FlexProps {
  justify?: string;
  align?: string;
  height?: string;
  width?: string;
  widthTablet?: string;
  isColumn?: boolean;
  isColumnTablet?: boolean;
  background?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
}

interface OblongContainerProps{
  borderColor?: string;
}


export const CommonDivider = styled.div<DividerProps>`
  width: 100%;
  border: 0.5px solid ${(props) => props.theme.text};
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
  border-color: ${(props) => props.theme.text};
  padding: ${(props)=>props.padding};

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.isColumnTablet ? "column" : "row")};
    width: ${(props) => props.widthTablet};
  }
`;

export const OblongContainer = styled.div<OblongContainerProps>`
  padding: 3px 4px 3px 4px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.red};
`;
