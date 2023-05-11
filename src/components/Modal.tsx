import styled from "styled-components";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
};

const ContainerDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Modal = ({ children }: ModalProps) => {
  const elRef = useRef<any>(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot?.appendChild(elRef.current);

    return () => modalRoot?.removeChild(elRef.current);
  }, []);

  return createPortal(
    <ContainerDiv onClick={(e) => console.log(e.currentTarget)}>
      {children}
    </ContainerDiv>,
    elRef.current
  );
};

export default Modal;
