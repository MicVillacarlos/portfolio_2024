import React, { Dispatch, SetStateAction } from "react";
import Backdrop from "./Backdrop";
import { ModalContainer } from "../StyledComponents";
import { CommonText } from "../../Atoms/CommonText";
import { ProjectDataTypes } from "../../../types/types";
import { CommonFlexContainer, CommonUl } from "../../Atoms/CommonAtomComponents";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps & ProjectDataTypes> = ({
  closeModal,
  title,
  description,
  technology,
  responsibilities,
  role
}) => {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 80,
        stiffness: 800,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <Backdrop onClick={closeModal}>
      <ModalContainer
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <CommonFlexContainer>
          <CommonText fontSize="xLarge" fontWeight={600} lineHeight={0.1}>
            {title}
          </CommonText>
        </CommonFlexContainer>

        <CommonText fontSize="small" isTitleFont>
          {description}
        </CommonText>

        <CommonText fontSize="small" isTitleFont>
          Role:
          <br />
          {role}
        </CommonText>

        <CommonText fontSize="small" isTitleFont>
          Tools Technologies Used:
          <br />
          {technology}
        </CommonText>
        <CommonText fontSize="small" isTitleFont>
          Responsibilities:
          <br />
          <CommonUl>
            {responsibilities.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </CommonUl>
        </CommonText>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
