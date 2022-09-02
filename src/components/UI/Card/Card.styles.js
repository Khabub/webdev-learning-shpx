import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(233, 220, 210);
  
  border-bottom-left-radius: 15%;
  height: 200px;
  

  h1 {
    position: absolute;
    font-size: 1rem;
    top: 20px;
    left: 20px;   
  }

  p {
    position: absolute;
    top: 40px;
    left: 20px;
    font-size: 0.8rem;
  }

  img {
    position: absolute;
    width: 80%;
    height: auto;
    top: 95px;
    left: 20px;
    z-index: 50;
  }
`;
