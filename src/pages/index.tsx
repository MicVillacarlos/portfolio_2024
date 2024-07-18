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
  CommonGhostButton,
  CommonOblongContainer,
} from "../components/Atoms/CommonAtomComponents";
import {
  CvIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  NorthEastArrowIcon,
  SunIcon,
} from "../components/Icons/Icons";
import { windowScreenSize } from "../utils/media_query";
import WorkExperienceCard from "../components/Organisms/WorkExperienceCard/WorkExperienceCard";
import { WorkExperienceCardProps } from "../types/types";
import ProjectCard from "../components/Organisms/WorkExperienceCard/ProjectCard";

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

  const dummyData: WorkExperienceCardProps[] = [
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
          {/* Socials START---------- */}
          <div>
            <CommonFlexContainer>
              <CommonAnchor>
                <InstagramIcon />
              </CommonAnchor>
              <CommonAnchor>
                <LinkedInIcon />
              </CommonAnchor>
            </CommonFlexContainer>
          </div>
          {/* Socials END ---------- */}
        </CommonFlexContainer>

        <CommonFlexContainer isColumn isColumnTablet>
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

        <CommonFlexContainer isColumnTablet align="start">
          <CommonFlexContainer
            justify="start"
            align="start"
            isColumn
            isColumnTablet
            width={windowScreenSize.tablet <= windowSize ? "60%" : "100%"}
            widthTablet="100%"
            padding="0px 10px 0px 0px"
            marginTop="10px"
          >
            {/*-----------------Dummy Photo START----------------- */}
            <CommonFlexContainer
              background="text"
              height="200px"
              margin="10px 0px"
            />
            {/*-----------------Dummy Photo END----------------- */}
            <CommonOblongContainer borderColor="green">
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
            isColumnTablet
            borderLeft={
              windowScreenSize.tablet <= windowSize ? "1px solid" : ""
            }
          >
            <CommonOblongContainer borderColor="red">
              <CommonText
                isTitleFont
                fontSize="xSmall"
                color="red"
                lineHeight={0.5}
              >
                WORK EXPERIENCE
              </CommonText>
            </CommonOblongContainer>
            {dummyData.map((item) => {
              return <WorkExperienceCard {...item} />;
            })}
            {/* <CommonGhostButton isHover>
              <CommonFlexContainer> */}
                View Full Résumé
                <NorthEastArrowIcon paddingTop="3px" width="16" height="16" />
              {/* </CommonFlexContainer>
            </CommonGhostButton> */}
          </CommonFlexContainer>
        </CommonFlexContainer>

        {/* ----------------------- PROJECTS ----------------------- */}
        <CommonFlexContainer
          isColumn
          isColumnTablet
          align="start"
          marginTopTablet="0px"
        >
          <CommonDivider margin="10px 0px" isHideTablet />
          <CommonOblongContainer borderColor="red">
            <CommonText
              isTitleFont
              fontSize="xSmall"
              color="red"
              lineHeight={0.5}
            >
              PROJECTS
            </CommonText>
          </CommonOblongContainer>
          <CommonFlexContainer
            marginTop="20px"
            justify="start"
            gap="10px"
            isColumnTablet
          >
            <ProjectCard />
            <ProjectCard />
          </CommonFlexContainer>
        </CommonFlexContainer>
        {/* ----------------------- Technologies ----------------------- */}
        <CommonFlexContainer
          isColumn
          isColumnTablet
          align="end"
          marginTop="20px"
        >
          <CommonDivider margin="10px 0px" isHideTablet />
          <CommonOblongContainer borderColor="red">
            <CommonText
              isTitleFont
              fontSize="xSmall"
              color="red"
              lineHeight={0.5}
            >
              TECHNOLOGIES WORKED WITH
            </CommonText>
          </CommonOblongContainer>

          <CommonFlexContainer
            marginTop="20px"
            justify="start"
            gap="10px"
          ></CommonFlexContainer>
        </CommonFlexContainer>
      </PageHolder>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>ECCENTRIC ENTHUSIAST</title>;
