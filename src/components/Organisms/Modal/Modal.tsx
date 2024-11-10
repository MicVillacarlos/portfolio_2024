import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import { windowScreenSize } from "../../../utils/media_query";

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
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      >
        {windowSize <= windowScreenSize.tablet ? null : (
          <ImageModalContainer>
            <img src={imageLink} alt={"project_image"} />
          </ImageModalContainer>
        )}

        <DetailsModalContainer
          iswidthfull={windowSize <= windowScreenSize.tablet ? true : false}
        >
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
