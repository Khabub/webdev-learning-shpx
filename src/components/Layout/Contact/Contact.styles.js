import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 320px;
  margin: 5rem 0 1rem 0;
  background-color: rgb(233, 220, 210);
  border-top-right-radius: 25px;

  h1 {
    padding: 2rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-bottom: 0;
    text-align: center;
  }

  @media (min-width: 700px) {
    height: 240px;
  }
`;
