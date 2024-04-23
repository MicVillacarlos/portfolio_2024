import styled from "styled-components";
import { device } from "../../utils/media_query";

interface TextProps {
  fontSize?: string;
}

export const TitleText = styled.h1`
  font-family: Helvetica, sans-serif;
  font-weight: 900;
  font-size: 45px;
  color: ${(props) => props.theme.text};
  letter-spacing: -1px;
  line-height: 15px;


  @media ${device.mobileL}{
    font-size: ${(props)=>props.theme.fontSize.xLarge}
  }
`;

export const CommonText = styled.p<TextProps>`
  font-family: "Noticia Text", "Times New Roman", Times, serif;
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.medium};
  color: ${(props) => props.theme.text};
`;

export const CommonAnchor = styled.a`
  font-family: "Noticia Text", "Times New Roman", Times, serif;
  :hover {
    cursor: pointer;
  }
`;
