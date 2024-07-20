import React from "react";
import { CommonFlexContainer } from "../Atoms/CommonAtomComponents";
import { GatsbyIcon } from "../Icons/Icons";
import { CommonText } from "../Atoms/CommonText";

const StyledFooterComponent = () => {
  return (
    <CommonFlexContainer
      marginTop="50px"
      width="100%"
      height="40px"
      align="center"
      justify="center"
      gap="5px"
    >
      <CommonText isTitleFont fontSize="xSmall">
        coded and built by your truly in Gatsby
      </CommonText>
      <GatsbyIcon isNoHover width="20" color="#581845" />
      <CommonText isTitleFont fontSize="xSmall">
        2024
      </CommonText>
    </CommonFlexContainer>
  );
};

export default StyledFooterComponent;
