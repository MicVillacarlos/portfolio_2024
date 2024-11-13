import React from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";
import { CommonText } from "../../Atoms/CommonText";
import { WorkExperienceCardTypes } from "../../../types/types";

const WorkExperienceCard = (props: WorkExperienceCardTypes ) => {
  const { companyName, startDate, endDate, description, position } = props;
  return (
    <CommonFlexContainer isColumn iscolumntablet>
      <CommonFlexContainer
        margin="0px 0px -10px 0px"
        justify="space-between"
        align="center"
        gap="5px"
      >
        <CommonFlexContainer isColumn iscolumntablet align="left" width="55%">
          <CommonText fontSize="large">
            {companyName}
          </CommonText>
          <CommonText
            fontSize="xSmall"
            margin="-15px 0px 0px 0px"
            isTitleFont
          >
            {position}
          </CommonText>
        </CommonFlexContainer>

        <CommonFlexContainer width="45%" justify="end">
          <CommonText fontSize="xSmall" align="right" isTitleFont>
            {startDate} - {endDate}
          </CommonText>
        </CommonFlexContainer>
      </CommonFlexContainer>
      <CommonFlexContainer margin="20px 0px">
        <CommonText fontSize="small" isTitleFont>
          {description}
        </CommonText>
      </CommonFlexContainer>
    </CommonFlexContainer>
  );
};

export default WorkExperienceCard;
