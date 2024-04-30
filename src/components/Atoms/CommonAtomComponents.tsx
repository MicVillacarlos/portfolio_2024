import styled from "styled-components";

interface DividerProps {
  height?: string;
}

interface FlexProps {
  justify?: string;
  align?: string;
  height?: string;
  width?: string;
  isColumn?: boolean;
}

export const CommonDivider = styled.div<DividerProps>`
  width: 100%;
  border: 0.5px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.text};
`;

export const CommonFlexContainer = styled.div<FlexProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height};
  flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props)=>props.align ? props.align : "center"};
`;
