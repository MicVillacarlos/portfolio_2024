import { createGlobalStyle } from "styled-components";

const fontSize = {
  xxSmall: "12px",
  xSmall: "14px",
  small: "16px",
  medium: "18px",
  large: "22px",
  xLarge: "26px",
  xxLarge: "30px",
  xxxLarge: "34px",
  title: "45px",
};

const themeColors = {
  light: {
    body: "#D9D8D5",
    text: "#0b0904",
    test: "#AA0000",
    transparent: "rgba(0,0,0,0.5)",
    //colors -------
    red: "#BE3D20",
    blue: "#3D87AA",
    yellow: "#C1A238",
    green: "#325234",
  },
  dark: {
    body: "#0b0904",
    text: "#D9D8D5",
    test: "#AA0000",
    transparent: "rgba(0,0,0,0.5)",
    //colors -------
    red: "#BE3D20",
    blue: "#3D87AA",
    yellow: "#C1A238",
    green: "#6F8570",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: Helvetica, sans-serif;
  }
`;

export const lightTheme = {
  ...themeColors.light,
  fontSize,
};

export const darkTheme = {
  ...themeColors.dark,
  fontSize,
};
