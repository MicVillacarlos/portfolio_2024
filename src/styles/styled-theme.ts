import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: "Noticia Text","Oswald";
  }
`;

export const lightTheme = {
  body: "#E6E4E2",
  text: "#0b0904",
  colors: {
    black: "#0b0904",
    white: "#E6E4E2",
    test: "#AA0000",
    transparent: `rgba(0,0,0,0.5)`,
  },
  fontSize: {
    xxSmall: "12px",
    xSmall: "14px",
    small: "16px",
    medium: "18px",
    large: "22px",
    xLarge: "26px",
    xxLarge: "30px",
    xxxLarge: "34px",
  },
};

export const darkTheme = {
  body: "#0b0904",
  text: "#E6E4E2",
  colors: {
    black: "#0b0904",
    white: "#E6E4E2",
    test: "#AA0000",
    transparent: `rgba(0,0,0,0.5)`,
  },
  fontSize: {
    xxSmall: "12px",
    xSmall: "14px",
    small: "16px",
    medium: "18px",
    large: "22px",
    xLarge: "26px",
    xxLarge: "30px",
    xxxLarge: "34px",
  },
};
