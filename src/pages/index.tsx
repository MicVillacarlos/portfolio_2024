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
import WorkExperienceCard from "../components/Organisms/WorkExperienceCard/WorkExperienceCard";
import { WorkExperienceCardProps } from "../types/types";

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

  const dummyData: WorkExperienceCardProps = {
    companyName: "Tech Solutions Inc.",
    startDate: "Jan 2024",
    endDate: "Present",
    position: "Junior Web Developer",
    description:
      "Worked on various projects involving web development and software engineering.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  };
  

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

        <CommonFlexContainer isColumn isColumnTablet>
          <TitleText>Michael Villacarlos</TitleText>
          <CommonText
            margin="-12px 0px 5px 0px"
            isTitleFont
            fontSize={
              windowScreenSize.tablet <= windowSize ? "small" : "xxSmall"
            }
          >
            I build web apps with love.
          </CommonText>
        </CommonFlexContainer>

        {/* <CommonDivider /> */}

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
            isColumnTablet
          >
            <CommonText fontSize="medium">WORK EXPERIENCE</CommonText>
            <WorkExperienceCard {...dummyData} />
          </CommonFlexContainer>
        </CommonFlexContainer>
      </PageHolder>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>ECCENTRIC ENTHUSIAST</title>;
