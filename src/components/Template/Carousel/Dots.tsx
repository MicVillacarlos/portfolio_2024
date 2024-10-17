import React, { Dispatch, SetStateAction } from "react";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";
import { StyledDotsButton } from "../StyledCommonTemplateComponents";

interface DotsProps {
  objIndex: number;
  setObjIndex: Dispatch<SetStateAction<number>>;
  objectData: any;
}
export const Dots = ({ objIndex, setObjIndex, objectData }: DotsProps) => {
  const onClickHandler = (index: number) => {
    setObjIndex(index);
  };
  return (
    <CommonFlexContainer>
      {objectData.map((_: any, index: number) => (
        <StyledDotsButton
          color={objIndex === index ? "text" : "gray"}
          key={index}
          onClick={() => onClickHandler(index)}
        />
      ))}
    </CommonFlexContainer>
  );
};
