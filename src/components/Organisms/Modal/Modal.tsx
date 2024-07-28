import React, { Dispatch, SetStateAction } from "react";
import Backdrop from "./Backdrop";

interface ModalProps {
    isShow: boolean;
    setIsShow: Dispatch<SetStateAction<number|string>>;
}

const Modal: React.FC<ModalProps> = ({ isShow, setIsShow }) => {
  return isShow ? (
    <Backdrop
      onClick={() => {
        setIsShow("");
      }}
    >
      <div></div>
    </Backdrop>
  ) : null;
};

export default Modal;
