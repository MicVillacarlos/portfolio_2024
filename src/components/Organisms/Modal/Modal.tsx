import React, { Dispatch, SetStateAction } from "react";
import Backdrop from "./Backdrop";
import { ModalContainer } from "../StyledComponents";
import { CommonText } from "../../Atoms/CommonText";
import { ProjectCardProps } from "../../../types/types";
import { CommonFlexContainer } from "../../Atoms/CommonAtomComponents";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps & ProjectCardProps> = ({
  closeModal,
  title,
  description,
  technology,
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
          Technologies Used:
          <br />
          {technology}
        </CommonText>
        <CommonText fontSize="small" isTitleFont>
          Responsibilities:
          <br />
          {technology}
        </CommonText>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
