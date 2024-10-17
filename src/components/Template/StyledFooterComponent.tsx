import React from "react";
import { CommonFlexContainer } from "../Atoms/CommonAtomComponents";
import { CommonAnchor, CommonText } from "../Atoms/CommonText";
import { LinksSection } from "./LinksSection";

const StyledFooterComponent = () => {
  return (
    <CommonFlexContainer marginTop="20px" marginTopTablet="20px" isColumn iscolumntablet>
      <LinksSection />
      <CommonFlexContainer
        height="35px"
        width="100%"
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
    </CommonFlexContainer>
  );
};

export default StyledFooterComponent;
