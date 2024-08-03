import React from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";
import { BlogCardType } from "../../../types/types";
import { CommonText } from "../../Atoms/CommonText";
import { MediumIcon, NorthEastArrowIcon } from "../../Icons/Icons";

const BlogCard = ({ title, description }: BlogCardType) => {
  return (
    <CommonFlexContainer
      isColumn
      iscolumntablet
      flexshrink={0}
      height="200px"
      width="100%"
      align="top"
      padding="5px"
    >
      <MediumIcon isNoHover height="10px" />
      <CommonText fontSize="large">{title}</CommonText>
      <a onClick={() => window.open("https://google.com", "_blank")}>
        <NorthEastArrowIcon
          text={"View Full Article"}
          width="16"
          height="16"
          hoverTextColor="yellow"
          marginBottom="10px"
          isTransformX
          fontSize="xxSmall"
        />
      </a>
    </CommonFlexContainer>
  );
};

export default BlogCard;
