import React from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";
import { CommonText } from "../../Atoms/CommonText";
import { WorkExperienceCardProps } from "../../../types/types";

const WorkExperienceCard = (props: WorkExperienceCardProps) => {
  const {
    companyName,
    startDate,
    endDate,
    description,
    technologies,
    position,
  } = props;
  return (
    <CommonFlexContainer isColumn isColumnTablet>
      <CommonFlexContainer
        margin="0px 0px -10px 0px"
        justify="space-between"
        align="center"
      >
        <CommonFlexContainer isColumn isColumnTablet align="left" width="50%">
          <CommonText fontSize="small" fontWeight={800}>
            {companyName}
          </CommonText>
          <CommonText fontSize="xxSmall" margin="-15px 0px 0px 0px">{position}</CommonText>
        </CommonFlexContainer>

        <CommonFlexContainer width="50%" justify="end">
          <CommonText fontSize="xSmall" align="right">
            {startDate} - {endDate}
          </CommonText>
        </CommonFlexContainer>

      </CommonFlexContainer>
      <CommonFlexContainer margin="20px 0px">
        <CommonText fontSize="xSmall">{description}</CommonText>
      </CommonFlexContainer>
    </CommonFlexContainer>
  );
};

export default WorkExperienceCard;
