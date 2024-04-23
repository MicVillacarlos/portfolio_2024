import styled from "styled-components";

interface DividerProps {
  height?: string;
}

interface FlexProps {
  justify?: string;
  height?: string;
}

export const CommonDivider = styled.div<DividerProps>`
  width: 100%;
  border: 1px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.text};
  height: ${(props) => (props.height ? props.height : "2px")};
`;

export const CommonFlexContainer = styled.div<FlexProps>`
  width: "100%";
  height: ${(props)=>props.height};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
`;
