import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 10;
`;


export const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 160px;
  height: auto;
  top: 65px;
  left: 100px;
  background-color: rgba(134, 117, 117, 1);
  border-bottom-left-radius: 25px;
  animation: slideMenu 0.5s ease-out;

  @keyframes slideMenu {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  
  100% {
    transform: translateX(0);
  }
}
`;

