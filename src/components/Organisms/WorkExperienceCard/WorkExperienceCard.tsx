import React from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";
import { CommonText } from "../../Atoms/CommonText";
import { WorkExperienceCardProps } from "../../../types/types";

const WorkExperienceCard = (props: WorkExperienceCardProps) => {
  const { companyName, startDate, endDate, description, technologies } = props;
  return (
    <CommonFlexContainer isColumn>
      <CommonFlexContainer margin="0px 0px -10px 0px" justify="space-between">
        <CommonText fontSize="small" fontWeight={800}>{companyName}</CommonText>
        <CommonText fontSize="xSmall" fontWeight={800}>
          {startDate} - {endDate}
        </CommonText>
      </CommonFlexContainer>
      <CommonFlexContainer>
        <CommonText fontSize="xSmall">{description}</CommonText>
      </CommonFlexContainer>
    </CommonFlexContainer>
  );
};

export default WorkExperienceCard;
