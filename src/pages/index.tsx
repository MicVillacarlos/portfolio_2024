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
  ImageDescription,
} from "../components/Atoms/CommonAtomComponents";
import {
  MoonIcon,
  NorthEastArrowIcon,
  SunIcon,
} from "../components/Icons/Icons";
import { windowScreenSize } from "../utils/media_query";
import WorkExperienceCard from "../components/Organisms/WorkExperienceCard/WorkExperienceCard";
import { ProjectDataTypes, WorkExperienceCardTypes } from "../types/types";
import ProjectCard from "../components/Organisms/ProjectCard";
import StyledFooterComponent from "../components/Template/StyledFooterComponent";
import { SwipeCarousel } from "../components/Template/Carousel/SwipeCarousel";
import { StaticImage } from "gatsby-plugin-image";
import { CommonGridContainer } from "../components/Molecules/CommonMoleculeComponents";
import MaskedCursor from "../components/Atoms/MaskedCursor";

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
      position: "Fullstack Web Developer",
      description:
        "Worked on web and mobile development projects across frontend and backend using the MERN stack and React Native, collaborating closely with QA engineers and project managers to deliver high-quality applications and meet project deadlines.",
    },
    {
      companyName: "AJIO IT Solutions",
      startDate: "September 2022",
      endDate: "April 2023",
      position: "Frontend Web Developer",
      description:
        "Worked on frontend development for web projects using React.js and Next.js to create responsive, user-focused interfaces. Handled development tasks and ensured project goals were met within deadlines",
    },
  ];

  const ProjectData: ProjectDataTypes[] = [
    {
      id: 4,
      title: "My HealthNotes",
      imageCover:
        "https://lh3.googleusercontent.com/d/1oV1o7XwoG6fCx1VLDKJJEjIfDnJhKFTQ",
      imageLink:
        "https://lh3.googleusercontent.com/d/15kkl17miERM--Bou8Fa4mj8cFHkv3xpI",
      description:
        "A mobile app that helps users stay on track with their health goals and tasks through reminders, along with an admin interface for assigning and managing tasks",
      technology: "MongoDB, React Js,React Native, Express, NodeJS",
      role: "Fullstack Developer",
      responsibilities: [
        "Enhanced app performance by 12% through optimization of React Native code, ensuring proper setup and efficient coding practices. Improved backend functionality by optimizing API queries.",
      ],
    },
    {
      id: 1,
      title: "GrowerStats",
      imageCover:
        "https://lh3.googleusercontent.com/d/1KU66BiPtGlWeZuwI4lrGfRxTV9yad8zJ",
      imageLink:
        "https://lh3.googleusercontent.com/d/1r-8P9YvJqzLn9AIn6EmGCDxR9cFKIMm9",
      description:
        "A platform designed for market managers to record customer orders for fruits and vegetables, track intake, and provide health data for customers to review.",
      technology: "MongoDB, React Js,React Native, Express, NodeJS",
      role: "Fullstack Developer",
      responsibilities: [
        "Implemented user interfaces using React, ensuring a responsive, dynamic, and intuitive experience. Handle state management and create reusable components.",
        "Develop and manage APIs using Node.js and Express.js and ensured the server logic supports the application’s features and business requirements.",
        "Created and consumed RESTful APIs and integrated third-party services (Google Maps).",
        "Worked closely with product managers, and other developers to translate business requirements into technical solutions.",
      ],
    },
    {
      id: 2,
      title: "Secret Dates",
      imageCover:
        "https://lh3.googleusercontent.com/d/1BWef3rtzzSu8kg4a0M4xifecTsPb_ibW",
      imageLink:
        "https://lh3.googleusercontent.com/d/1kv3ixfDcaehCAwjMdXntnGKLH4R0_YfL",
      description:
        "Online dating web app that matches users based on shared preferred activities or dining places.",
      technology:
        "MongoDB, React Js, Express, NodeJS, Stripe, Tailwind CSS, BitBucket",
      role: "Fullstack Developer",
      responsibilities: [
        "Implemented new features and maintained system stability, optimizing overall performance and user experience.",
        "Integrated Stripe to facilitate holding, accepting, and deleting payments in a project.",
        "Integrated a third-party API from Eatsapp, an online food ordering platform, enabling users to book reservations and dining experiences within the system.",
        "Worked closely with product managers, and other developers to translate business requirements into technical solutions.",
      ],
    },
    {
      id: 3,
      title: "KUHL Car Simulation",
      imageCover:
        "https://lh3.googleusercontent.com/d/1svIS3nb9mexe-lgFm8uS-p8yg7BqlQnM",
      imageLink:
        "https://lh3.googleusercontent.com/d/1pB1yqlc-z1Kam8_Pw8n0Gxt7cCt-6034",
      description:
        "Online web app enabling customers to customize and order vehicles directly, with real-time visualization and purchase/order integration.",
      technology: "Next Js",
      role: "Front-end Developer",
      responsibilities: [
        "Implemented user interfaces using Next Js, ensuring a responsive, dynamic, and intuitive experience. Handled state management and created reusable components.",
        "Translated design specifications into responsive, pixel-perfect code, implementing styles using CSS to accurately match the designer's vision.",
      ],
    },
    {
      id: 5,
      title: "Appetit",
      imageCover:
        "https://lh3.googleusercontent.com/d/1bDtlmeYdDvrHNhAmotVwHnMoBC54yQXJ",
      imageLink:
        "https://lh3.googleusercontent.com/d/1eRuBb0DbmWT16Vg52sWl5G0kTI2QFesV",
      description:
        "A platform designed where customers go to book a table or place an order at their favorite restaurants. With the most comprehensive and user-friendly platform, appétit will always help you find the right place to suit your taste buds.",
      technology: "MongoDB, React Js,React Native, Express, NodeJS",
      role: "Fullstack Developer",
      responsibilities: [
        "Designed and implemented new application features and upgrades,  working with teams to ensure enhanced functionality, and improved user experience across the platforms.",
        "Maintained and optimized system performance, conducting updates, troubleshooting, and applying best practices to ensure stability.",
      ],
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
            margin="-10px 0px 50px 0px"
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
            width={windowScreenSize.tablet <= windowSize ? "50%" : "100%"}
            widthTablet="100%"
            padding="0px 10px 0px 0px"
            marginTop="10px"
            borderright={
              windowScreenSize.tablet <= windowSize ? "1px solid" : ""
            }
          >
            {/*-----------------Dummy Photo START----------------- */}
            <CommonFlexContainer
              margin="10px 0px 10px 0px"
              isobjectfitcover
              isColumn
              iscolumntablet
              gap="5px"
              align="left"
            >
              <MaskedCursor />
              <ImageDescription>
                (Hover across the page to find the optimal spot to see photo)
              </ImageDescription>
            </CommonFlexContainer>
            {/*-----------------Dummy Photo END----------------- */}
            <CommonOblongContainer bordercolor="yellow">
              <CommonText
                isTitleFont
                fontSize="xSmall"
                color="yellow"
                lineHeight={0.5}
              >
                ABOUT ME
              </CommonText>
            </CommonOblongContainer>
            <CommonText fontSize="small" isTitleFont>
              Discovered my passion for coding in late 2021. My curiosity and
              love for learning led me to find coding as a perfect fit. Now,
              with two years of experience as a developer, I continue to thrive
              and enjoy every project and the continuous growth it brings.
            </CommonText>
            <CommonText fontSize="small" isTitleFont>
              When I'm away from my computer, I’m usually training in Brazilian
              Jiu-Jitsu at the gym, working out, or playing music.
            </CommonText>
          </CommonFlexContainer>
          {/* ------------------- Column 2 -------------------- */}
          <CommonFlexContainer
            padding={
              windowScreenSize.tablet <= windowSize ? "20px 0px 0px 10px" : ""
            }
            justify="space-between"
            align="start"
            width={windowScreenSize.tablet <= windowSize ? "50%" : "100%"}
            isColumn
            iscolumntablet
            marginTopTablet="50px"
            height="100%"
          >
            <CommonOblongContainer bordercolor="yellow">
              <CommonText
                isTitleFont
                fontSize="xSmall"
                color="yellow"
                lineHeight={0.5}
              >
                WORK EXPERIENCE
              </CommonText>
            </CommonOblongContainer>
            {dummyData.map((item, index) => {
              return <WorkExperienceCard key={index} {...item} />;
            })}
            <a
              onClick={() => window.open("https://google.com", "_blank")}
              style={{
                marginTop: windowScreenSize.laptop <= windowSize ? "15%" : "7%",
              }}
            >
              <NorthEastArrowIcon
                text={"View Full Résumé"}
                width="16"
                height="16"
                hoverTextColor="yellow"
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
          marginTopTablet="50px"
        >
          <CommonDivider margin="20px 0px" isHideTablet />
          <CommonOblongContainer bordercolor="yellow">
            <CommonText
              isTitleFont
              fontSize="xSmall"
              color="yellow"
              lineHeight={0.5}
            >
              WORK PROJECTS
            </CommonText>
          </CommonOblongContainer>

          <CommonFlexContainer marginTop="20px" justify="center" align="center">
            <CommonGridContainer>
              {ProjectData.map((item, index) => {
                return <ProjectCard key={index} {...item} />;
              })}
            </CommonGridContainer>
          </CommonFlexContainer>
        </CommonFlexContainer>

        {/* ------------BLOGS----------------- */}
        <CommonDivider margin="25px 0px 20px" isHideTablet />
        <CommonFlexContainer iscolumntablet align="start">
          <CommonFlexContainer
            isColumn
            iscolumntablet
            width={windowScreenSize.tablet <= windowSize ? "50%" : "100%"}
            widthTablet="100%"
            align="start"
            padding="0px 7px 0px 0px"
            justify="center"
            marginTopTablet="50px"
          >
            <CommonOblongContainer bordercolor="yellow">
              <CommonText
                isTitleFont
                fontSize="xSmall"
                color="yellow"
                lineHeight={0.5}
              >
                BLOGS
              </CommonText>
            </CommonOblongContainer>

            <CommonFlexContainer
              isColumn
              gap="10px"
              marginTop="10px"
              marginTopTablet="10px"
              justify="center"
              align="start"
              iscolumntablet
            >
              <SwipeCarousel />
            </CommonFlexContainer>
          </CommonFlexContainer>

          {/* ------------------ LINKS-------------------- */}
          <CommonFlexContainer
            justify="start"
            align="start"
            isColumn
            iscolumntablet
            height="320px"
            marginTopTablet="20px"
            width={windowScreenSize.tablet <= windowSize ? "50%" : "100%"}
            widthTablet="100%"
            borderLeft={
              windowScreenSize.tablet <= windowSize ? "1px solid" : ""
            }
            // margin="0px 0px 0px 20px"
            padding={
              windowScreenSize.tablet <= windowSize ? "0px 0px 0px 30px" : ""
            }
          >
            <CommonText fontSize="titleS" align="center">
              We all have the ability to come from nothing to something.
            </CommonText>
            <CommonFlexContainer justify="end" width="100%">
              - D. Goggins
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
