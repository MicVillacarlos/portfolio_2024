import React from "react";
import { BackdropContainer } from "../StyledComponents";

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({
  children,
  onClick,
}: BackdropProps) => (
  <BackdropContainer
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </BackdropContainer>
);

export default Backdrop;
