import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  overflow-x: hidden;  
  height: 400px;
  position: relative;

  img {
    position: fixed;    
    border-bottom-left-radius: 50px;
    transform: translateX(140px) translateY(-180px) scale(0.4);
    
  }

`;