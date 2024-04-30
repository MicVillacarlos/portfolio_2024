import styled from "styled-components";
import { device } from "../../utils/media_query";

interface TextProps {
  fontSize?: string;
  isTitleFont?: boolean;
  laptopFontSize?: string;
  tabletFontSize?: string;
}

export const TitleText = styled.h1<TextProps>`
  font-family: Helvetica, sans-serif;
  font-weight: 900;
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.text};
  letter-spacing: -1px;
  line-height: 15px;
  word-wrap: break-word;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSize.xxxLarge};
  }

  @media ${device.tablet} {
    text-align: center;
    line-height: 25px;
    font-size: ${(props) => props.theme.fontSize.xLarge};
  }
`;

export const CommonText = styled.p<TextProps>`
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
