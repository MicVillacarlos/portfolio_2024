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
import { PageHolder } from "../components/Template/StyledCommonTemplateComponents";
import {
  CommonDivider,
  CommonFlexContainer,
  CommonOblongContainer,
} from "../components/Atoms/CommonAtomComponents";
import {
  GithubIcon,
  GmailIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  NorthEastArrowIcon,
  SunIcon,
} from "../components/Icons/Icons";
import { windowScreenSize } from "../utils/media_query";
import WorkExperienceCard from "../components/Organisms/WorkExperienceCard/WorkExperienceCard";
import { ProjectDataTypes, WorkExperienceCardTypes } from "../types/types";
import ProjectCard from "../components/Organisms/WorkExperienceCard/ProjectCard";
import StyledFooterComponent from "../components/Template/StyledFooterComponent";
import { LinksSection } from "../components/Template/LinksSection";
import { SwipeCarousel } from "../components/Template/SwipeCarousel";

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

  const dummyData: WorkExperienceCardTypes[] = [
    {
      companyName: "Ark Creative Web Studio Inc.",
      startDate: "May 2023",
      endDate: "Present",
      position: "Fullstack Junior Web Developer",
      description:
        "Worked on various projects involving web development and software engineering.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      companyName: "AJIO IT Solutions",
      startDate: "September 2022",
      endDate: "April 2023",
      position: "Frontend Junior Web Developer",
      description:
        "Worked on various projects involving web development and software engineering.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
  ];

  const ProjectData: ProjectDataTypes[] = [
    {
      id: 1,
      title: "GrowerStats",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet diam quis quam fermentum, vit ultricies ex suscipit. Maecenas ac sodales turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sedrhoncus sapien vitae nisi eleifend, quis malesuada purus eleifend. asdqwes",
    },
    {
      id: 2,
      title: "Secret Dates",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet diam quis quam fermentum, vit ultricies ex suscipit. Maecenas ac sodales turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sedrhoncus sapien vitae nisi eleifend, quis malesuada purus eleifend. asdqwes",
    },
    {
      id: 3,
      title: "KUHL Japan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet diam quis quam fermentum, vit ultricies ex suscipit. Maecenas ac sodales turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sedrhoncus sapien vitae nisi eleifend, quis malesuada purus eleifend. asdqwes",
    },
    {
      id: 4,
      title: "My HealthNotes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet diam quis quam fermentum, vit ultricies ex suscipit. Maecenas ac sodales turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sedrhoncus sapien vitae nisi eleifend, quis malesuada purus eleifend. asdqwes",
    },
  ];

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <PageHolder>
        <CommonFlexContainer height="30px" justify="space-between">
          {/*----------Theme switch---------- */}
          <div>
            {isDarkTheme ? (
              <CommonAnchor onClick={toggleTheme}>
                <SunIcon height="20" isNoHover />
              </CommonAnchor>
            ) : (
              <CommonAnchor onClick={toggleTheme}>
                <MoonIcon height="20" isNoHover />
              </CommonAnchor>
            )}
          </div>
        </CommonFlexContainer>

        <CommonFlexContainer isColumn iscolumntablet>
          <TitleText>MICHAEL VILLACARLOS</TitleText>
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

        <CommonFlexContainer iscolumntablet align="start">
          <CommonFlexContainer
            justify="start"
            align="start"
            isColumn
            iscolumntablet
            width={windowScreenSize.tablet <= windowSize ? "60%" : "100%"}
            widthTablet="100%"
            padding="0px 10px 0px 0px"
            marginTop="10px"
          >
            {/*-----------------Dummy Photo START----------------- */}
            <CommonFlexContainer
              background="text"
              height="250px"
              margin="10px 0px"
            />
            {/*-----------------Dummy Photo END----------------- */}
            <CommonOblongContainer bordercolor="green">
              <CommonText
                isTitleFont
                fontSize="xSmall"
                color="green"
                lineHeight={0.5}
              >
                ABOUT ME
              </CommonText>
            </CommonOblongContainer>
            <CommonText fontSize="small" isTitleFont>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet diam quis quam fermentum, vitae ultricies ex suscipit.
              Maecenas ac sodales turpis. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Sed
              rhoncus sapien vitae nisi eleifend, quis malesuada purus eleifend.
            </CommonText>
          </CommonFlexContainer>
          {/* ------------------- Column 2 -------------------- */}
          <CommonFlexContainer
            padding={
              windowScreenSize.tablet <= windowSize ? "20px 0px 0px 10px" : ""
            }
            justify="start"
            align="start"
            width={windowScreenSize.tablet <= windowSize ? "40%" : "100%"}
            isColumn
            iscolumntablet
            borderLeft={
              windowScreenSize.tablet <= windowSize ? "1px solid" : ""
            }
          >
            <CommonOblongContainer bordercolor="red">
              <CommonText
                isTitleFont
                fontSize="xSmall"
                color="red"
                lineHeight={0.5}
              >
                WORK EXPERIENCE
              </CommonText>
            </CommonOblongContainer>
            {dummyData.map((item, index) => {
              return <WorkExperienceCard key={index} {...item} />;
            })}
            <a onClick={() => window.open("https://google.com", "_blank")}>
              <NorthEastArrowIcon
                text={"View Full Résumé"}
                width="16"
                height="16"
                hoverTextColor="red"
                marginBottom="10px"
                isTransformX
              />
            </a>
          </CommonFlexContainer>
        </CommonFlexContainer>

        {/* ----------------------- PROJECTS ----------------------- */}
        <CommonFlexContainer
          isColumn
          iscolumntablet
          align="start"
          marginTopTablet="0px"
        >
          <CommonDivider margin="10px 0px" isHideTablet />
          <CommonOblongContainer
            bordercolor="blue"
            // background="blue"
          >
            <CommonText
              isTitleFont
              fontSize="xSmall"
              color="blue"
              // color="body"
              lineHeight={0.5}
            >
              WORK PROJECTS
            </CommonText>
          </CommonOblongContainer>
          <CommonFlexContainer
            marginTop="15px"
            justify="center"
            gap="10px"
            iscolumntablet
          >
            {ProjectData.map((item, index) => {
              return <ProjectCard key={index} {...item} />;
            })}
          </CommonFlexContainer>
        </CommonFlexContainer>
        {/* ------------LIFE BEYOND TECH----------------- */}
        <CommonDivider margin="20px 0px 10px 0px" isHideTablet />
        <CommonFlexContainer iscolumntablet align="start">
          <CommonFlexContainer
            isColumn
            iscolumntablet
            width={"50%"}
            widthTablet="100%"
            align="start"
            justify="center"
            borderright={
              windowScreenSize.tablet <= windowSize ? "1px solid" : ""
            }
          >
            <CommonOblongContainer bordercolor="red">
              <CommonText
                isTitleFont
                fontSize="xSmall"
                color="red"
                lineHeight={0.5}
              >
                LIFE BEYOND TECH
              </CommonText>
            </CommonOblongContainer>
            <SwipeCarousel />
          </CommonFlexContainer>

          {/* ------------------ LINKS-------------------- */}
          <CommonFlexContainer
            isColumn
            iscolumntablet
            align="start"
            marginTopTablet="20px"
            width={"50%"}
            widthTablet="100%"
          >
            <CommonOblongContainer
              bordercolor="red"
              margin={
                windowScreenSize.tablet <= windowSize ? "0px 0px 0px 5px" : ""
              }
            >
              <CommonText
                isTitleFont
                fontSize="xSmall"
                color="red"
                lineHeight={0.5}
              >
                LINKS
              </CommonText>
            </CommonOblongContainer>
            <CommonFlexContainer justify="center">
              <LinksSection />
            </CommonFlexContainer>
          </CommonFlexContainer>
        </CommonFlexContainer>
      </PageHolder>
      <StyledFooterComponent />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Michael Villacarlos | Web Developer</title>
);
