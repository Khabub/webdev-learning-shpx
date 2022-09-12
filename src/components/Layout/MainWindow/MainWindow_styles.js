import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: auto;
  margin-top: 50px;
  overflow-x: hidden;

  img {
    max-width: 100%;
    height: auto;
    border-bottom-left-radius: 15%;
    object-position: 80px;
    padding: 1rem 0;

  }

  @media (min-width: 700px) {
    justify-content: flex-end;
    img {
      max-height: 370px;
      
    }
  }
`;

export const HeadlineBox = styled.div`
  width: 55vw;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  position: absolute;
  top: 100px;
  left: 15px;
  padding: 0.5rem 1rem;

  h1 {
    font-size: 1.4rem;
    line-height: 0.5rem;
    max-width: 100%;
  }

  p {
    margin-top: 1.5rem;
    font-size: 0.7rem;
  }

  @media (min-width: 700px) {
    width: 40vw;
    left: 50px;
  }
`;
