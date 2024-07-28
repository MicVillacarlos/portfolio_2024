import React from "react";
import { BackdropContainer } from "../StyledComponents";

interface BackdropProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Backdrop : React.FC<BackdropProps> = ({children, onClick}) => {
    return (
        <BackdropContainer onClick={onClick}>
            {children}
      </BackdropContainer>
  );
};

export default Backdrop;
