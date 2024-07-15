import React from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";

const ProjectCard = () => {
  return (
    <CommonFlexContainer
      height="220px"
      width="220px"
      borderColor="text"
      padding="10px"
      isColumn
      isColumnTablet
    >
      <CommonFlexContainer width="100%" height="100%" background="text" />
      <CommonFlexContainer marginTop="5px" justify="start">Growerstats</CommonFlexContainer>
    </CommonFlexContainer>
  );
};

export default ProjectCard;
