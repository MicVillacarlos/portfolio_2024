import React, { useState } from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";
import { ProjectCardContainer, ProjectCardImageContainer } from "./StyledComponents";
import { AnimatePresence } from "framer-motion";

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
          scale: 1.02,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        }}
        onClick={() => setSlectedCardId(id)}
      >
        <ProjectCardImageContainer>
          <img src={imageLink} alt={`${title}_img`} />
        </ProjectCardImageContainer>
        <CommonFlexContainer marginTop="5px" justify="start">
          {title}
        </CommonFlexContainer>
      </ProjectCardContainer>
      {/* {selectedCardId && (
        <AnimatePresence>
          <CommonFlexContainer>{description}</CommonFlexContainer>
        </AnimatePresence>
      )} */}
    </>
  );
};

export default ProjectCard;
