import React, { Dispatch, SetStateAction } from "react";
import Backdrop from "./Backdrop";
import {
  DetailsModalContainer,
  ImageModalContainer,
  ModalContainer,
} from "../StyledComponents";
import { CommonText } from "../../Atoms/CommonText";
import { ProjectDataTypes } from "../../../types/types";
import {
  CommonFlexContainer,
  CommonUl,
} from "../../Atoms/CommonAtomComponents";

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps & ProjectDataTypes> = ({
  closeModal,
  title,
  description,
  technology,
  responsibilities,
  role,
  imageLink,
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
        <ImageModalContainer>
          <img src={imageLink} alt={"project_image"} />
        </ImageModalContainer>

        <DetailsModalContainer>
          <CommonText fontSize="xLarge" fontWeight={600}>
            {title}
          </CommonText>

          <CommonText fontSize="small" isTitleFont>
            {description}
          </CommonText>

          <CommonFlexContainer justify="start">
            <CommonText fontSize="small" isTitleFont align="start">
              Role: {role}
            </CommonText>
          </CommonFlexContainer>

          <CommonFlexContainer justify="start">
            <CommonText fontSize="small" isTitleFont>
              Technologies Used: {technology}
            </CommonText>
          </CommonFlexContainer>

          <CommonText fontSize="small" isTitleFont>
            Responsibilities:
            <br />
            <CommonUl>
              {responsibilities.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </CommonUl>
          </CommonText>
        </DetailsModalContainer>

      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
