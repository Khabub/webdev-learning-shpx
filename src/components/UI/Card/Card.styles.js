import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(233, 220, 210);
  border-bottom-left-radius: 35px;
  height: 270px;
  width: 80vw;
  margin: 0 auto;


  h1 {
    position: absolute;
    font-size: 1.4rem;
    top: 30px;
    left: 60px;

  }

  p {
    position: absolute;
    top: 60px;
    left: 60px;
    font-size: 1.2rem;
  }

  img {
    position: absolute;
    width: 80%;
    height: auto;
    top: ${(props) => props.positiony || "80px"};
    left: 40px;
    transform: scale(70%);
    animation: animProduct 1s ease-in;
  }

  @keyframes animProduct {
    100% {
      transform: scale(70%);
    }

    0% {
      transform: scale(10%);
    }
  }

  @media (min-width: 768px) {
    height: 200px;
    width: 35vw;    

    h1 {
      top: 0;
      left: 30px;
    }

    p {
      top: 50px;
      left: 30px;
    }

    img {
      width: 200%;
    }
  }
`;
