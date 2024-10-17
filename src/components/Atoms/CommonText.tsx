import styled from "styled-components";
import { device } from "../../utils/media_query";

interface TextProps {
  fontSize?: string;
  lineHeight?: number;
  isTitleFont?: boolean;
  laptopFontSize?: string;
  tabletFontSize?: string;
  margin?: string;
  align?: string;
  fontWeight?: number;
}

export const TitleText = styled.h1<TextProps>`
  font-weight: 900;
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.text};
  letter-spacing: -1px;
  line-height: 10px;
  word-wrap: break-word;

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSize.title};
  }

  @media ${device.tablet} {
    text-align: center;
    line-height: 45px;
    font-size: ${(props) => props.theme.fontSize.titleS};
  }
`;

export const CommonText = styled.p<TextProps>`
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "normal")};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
  font-family:${(props) =>
    props.isTitleFont
      ? "Helvetica, sans-serif"
      : "Gideon Roman, Times New Roman , Times, serif"};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.medium};
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme.text};

  @media ${device.laptop} {
    font-size: ${(props) => props.laptopFontSize};
  }

  @media ${device.tablet} {
    font-size: ${(props) => props.tabletFontSize};
  }
`;

export const CommonAnchor = styled.a<TextProps>`
  font-family: Helvetica, sans-serif;
  font-weight: ${(props) => props.fontWeight};
  text-decoration: none;
  color: ${(props)=>props.theme.text};
  :hover {
    cursor: pointer;
  }
`;
