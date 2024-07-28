import React, { useState } from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";
import { ProjectCardContainer, ProjectCardImageContainer } from "./StyledComponents";
import { AnimatePresence } from "framer-motion";
import { NorthEastArrowIcon } from "../../Icons/Icons";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageLink?:string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  id,
  description,
  imageLink
}) => {
  const [selectedCardId, setSlectedCardId] = useState<number | string>();
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  return (
    <>
      <ProjectCardContainer
        height="200px"
        width="200px"
        bordercolor="text"
        padding="10px"
        isColumn
        iscolumntablet
        whileHover={{
          scale: 1.04,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        }}
        onClick={() => setSlectedCardId(id)}
        onMouseOver={() => setIsMouseHover(true)}
        onMouseOut={() => setIsMouseHover(false)}
      >
        <ProjectCardImageContainer isMouseOver={isMouseHover}>
          {isMouseHover && (
            <a onClick={() => window.open("https://google.com", "_blank")}>
              <NorthEastArrowIcon
                text={"View Details"}
                width="16"
                height="16"
                hoverTextColor="blue"
                marginBottom="10px"
                isTransformX
              />
            </a>
          )}
          <img src={imageLink} alt={`${title}_img`} />
        </ProjectCardImageContainer>
        <CommonFlexContainer marginTop="5px" justify="start">
          {title}
        </CommonFlexContainer>
      </ProjectCardContainer>
    </>
  );
};

export default ProjectCard;
