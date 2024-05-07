import styled from "styled-components";
import { device } from "../../utils/media_query";

interface TextProps {
  fontSize?: string;
  isTitleFont?: boolean;
  laptopFontSize?: string;
  tabletFontSize?: string;
  margin?: string;
  fontWeight?: number;
}

export const TitleText = styled.h1<TextProps>`
  font-family: Helvetica, sans-serif;
  font-weight: 900;
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.text};
  letter-spacing: -1px;
  line-height: 10px;
  word-wrap: break-word;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSize.xxxLarge};
  }

  @media ${device.tablet} {
    text-align: center;
    line-height: 25px;
    font-size: ${(props) => props.theme.fontSize.xxLarge};
  }
`;

export const CommonText = styled.p<TextProps>`
  line-height: normal;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  font-family: ${(props) =>
    props.isTitleFont
      ? "Helvetica, sans-serif"
      : "Playfair Display, Times New Roman , Times, serif"};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.medium};
  color: ${(props) => props.theme.text};

  @media ${device.laptop} {
    font-size: ${(props) => props.laptopFontSize};
  }

  @media ${device.tablet} {
    font-size: ${(props) => props.tabletFontSize};
  }
`;

export const CommonAnchor = styled.a`
  font-family: "Playfair Display", "Times New Roman", Times, serif;
  :hover {
    cursor: pointer;
  }
`;
