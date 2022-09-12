import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80vw;
  height: 320px;
  margin: 5rem 0 1rem 0;
  background-color: rgb(233, 220, 210);
  border-top-right-radius: 25px;
  padding: 0;

  h1 {
    padding: 2rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-bottom: 0;
  }

  @media (min-width: 700px) {
    height: 240px;

    h1 {
      font-size: 2.6rem;
    }
  }
`;
