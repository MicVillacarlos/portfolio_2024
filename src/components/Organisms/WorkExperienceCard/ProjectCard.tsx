import React, { useState } from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";
import { ProjectCardContainer } from "./StyledComponents";
import { AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  id,
  description,
}) => {
  const [selectedCardId, setSlectedCardId] = useState<number | string>();

  return (
    <>
      <ProjectCardContainer
        height="200px"
        width="200px"
        borderColor="text"
        padding="10px"
        isColumn
        isColumnTablet
        whileHover={{
          scale: 1.02,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
        }}
        onClick={() => setSlectedCardId(id)}
      >
        <CommonFlexContainer width="100%" height="100%" background="text" />
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
