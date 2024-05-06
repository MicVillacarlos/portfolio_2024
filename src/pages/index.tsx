import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../styles/styled-theme";
import {
  CommonAnchor,
  CommonText,
  TitleText,
} from "../components/Atoms/CommonText";
import { useEffect, useState } from "react";
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
import { windowScreenSize } from "../utils/media_query";

const IndexPage: React.FC<PageProps> = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <PageHolder>
        <CommonFlexContainer height="30px" justify="space-between">
          {/*----------Theme switch---------- */}
          <div>
            {isDarkTheme ? (
              <CommonAnchor onClick={toggleTheme}>
                <SunIcon height="20" />
              </CommonAnchor>
            ) : (
              <CommonAnchor onClick={toggleTheme}>
                <MoonIcon height="20" />
              </CommonAnchor>
            )}
          </div>

          {/* Socials ---------- */}
          <div>
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
          </div>
        </CommonFlexContainer>

        <CommonFlexContainer>
          <TitleText>LOREM IPSUM DOLLAR SIGN HELLO WORLD</TitleText>
        </CommonFlexContainer>

        <CommonDivider />

        <CommonFlexContainer isColumnTablet>
          <CommonFlexContainer
            justify="start"
            align="start"
            isColumn
            isColumnTablet
            width={windowScreenSize.tablet <= windowSize ? "60%" : "100%"}
            widthTablet="100%"
            padding="0px 10px 0px 0px"
            margin="10px 0px 0px 0px"
            borderRight={
              windowScreenSize.tablet <= windowSize ? "1px solid" : ""
            }
          >
            {/*-----------------Dummy Photo----------------- */}
            <CommonFlexContainer
              background="test"
              height="200px"
              margin="10px 0px"
            />
            {/*-----------------Dummy Photo----------------- */}
            <CommonText fontSize="xLarge" margin="0px">
              I'm Michael, Web Developer based in Cebu, Philippines.
            </CommonText>
            <CommonText fontSize="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet diam quis quam fermentum, vitae ultricies ex suscipit.
              Maecenas ac sodales turpis. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Sed
              rhoncus sapien vitae nisi eleifend, quis malesuada purus eleifend.
            </CommonText>
          </CommonFlexContainer>

          <CommonFlexContainer
            padding={
              windowScreenSize.tablet <= windowSize ? "0px 0px 0px 10px" : ""
            }
            justify="start"
            align="start"
            width={windowScreenSize.tablet <= windowSize ? "40%" : "100%"}
            isColumn
          >
            <CommonText fontSize="xLarge">Work Experience</CommonText>
            <CommonText fontSize="xLarge">Freelance Projects</CommonText>
            <CommonText fontSize="xLarge">Others/Hobbies</CommonText>
            <CommonText fontSize="xLarge">Coding Journey</CommonText>
          </CommonFlexContainer>
        </CommonFlexContainer>
      </PageHolder>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>ECCENTRIC ENTHUSIAST</title>;
