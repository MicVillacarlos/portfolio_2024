import styled from "styled-components";

interface TextProps {
  fontSize?: string;
}

export const CommonText = styled.p<TextProps>`
  /* font-family: "Noticia Text"; */
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.medium};
  color: ${(props) => props.theme.text};
`;
