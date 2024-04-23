import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../styles/styled-theme";
import {
  CommonAnchor,
  CommonText,
  TitleText,
} from "../components/Atoms/CommonText";
import { useState } from "react";
import { PageHolder } from "../components/Template/CommonTemplateComponents";
import {
  CommonDivider,
  CommonFlexContainer,
} from "../components/Atoms/CommonAtomComponents";
import {
  CvIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "../components/Icons/Icons";

const IndexPage: React.FC<PageProps> = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <PageHolder>
        <CommonFlexContainer height="30px" justify="space-between">
          {/* Theme switch ---------- */}
          {isDarkTheme ? (
            <CommonAnchor onClick={toggleTheme}>
              <SunIcon height="20" />
            </CommonAnchor>
          ) : (
            <CommonAnchor onClick={toggleTheme}>
              <MoonIcon height="20" />
            </CommonAnchor>
          )}

          {/* Socials ---------- */}
          <CommonFlexContainer>
            <CommonAnchor>
              <CvIcon height="18" />
            </CommonAnchor>
            <CommonAnchor>
              <InstagramIcon />
            </CommonAnchor>
            <CommonAnchor>
              <LinkedInIcon />
            </CommonAnchor>
          </CommonFlexContainer>
        </CommonFlexContainer>

        <CommonFlexContainer>
          <TitleText>ECCENTRIC ENTHUSIAST</TitleText>
        </CommonFlexContainer>

        <CommonDivider />
      </PageHolder>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Eccentric Enthusiast</title>;
