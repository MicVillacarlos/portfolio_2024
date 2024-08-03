import React, { useState } from "react";
import { CommonFlexContainer } from "../Atoms/CommonAtomComponents";
import {
  ProjectCardContainer,
  ProjectCardImageContainer,
} from "./StyledComponents";
import { AnimatePresence } from "framer-motion";
import { NorthEastArrowIcon } from "../Icons/Icons";
import Modal from "./Modal/Modal";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, id, imageLink }) => {
  const [isViewDetails, setIsViewDetails] = useState<boolean>(false);
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  const onOpenModal = () => {
    setIsViewDetails(true);
  }

  const onCloseModal = () => {
    setIsViewDetails(false);
  }
  return (
    <>
      <ProjectCardContainer
        height="220px"
        width="220px"
        bordercolor="text"
        padding="10px"
        isColumn
        iscolumntablet
        whileHover={{
          scale: 1.05,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
          borderRadius: "0px",
        }}
        onMouseOver={() => setIsMouseHover(true)}
        onMouseOut={() => setIsMouseHover(false)}
        onClick={onOpenModal}
      >
        <ProjectCardImageContainer isMouseOver={isMouseHover}>
          <img src={imageLink} alt={`${title}_img`} />
        </ProjectCardImageContainer>
        <CommonFlexContainer marginTop="5px" justify="start">
          {title}
        </CommonFlexContainer>
      </ProjectCardContainer>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isViewDetails && <Modal title={title} closeModal={onCloseModal} />}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
