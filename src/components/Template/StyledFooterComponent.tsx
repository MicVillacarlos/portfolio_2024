import React from "react";
import { CommonFlexContainer } from "../Atoms/CommonAtomComponents";
import { FramerIcon, GatsbyIcon } from "../Icons/Icons";
import { CommonAnchor, CommonText } from "../Atoms/CommonText";

const StyledFooterComponent = () => {
  return (
    <CommonFlexContainer
      marginTop="50px"
      width="100%"
      height="40px"
      align="center"
      justify="center"
    >
      <CommonText fontSize="xSmall" isTitleFont>
        coded and built with{" "}
        <CommonAnchor fontWeight={600} href="https://www.gatsbyjs.com/">
          Gatsby{" "}
        </CommonAnchor>{" "}
        and{" "}
        <CommonAnchor fontWeight={600} href="https://www.framer.com/motion/">
          Framer Motion{" "}
        </CommonAnchor>
        by yours truly © 2024
      </CommonText>
    </CommonFlexContainer>
  );
};

export default StyledFooterComponent;
