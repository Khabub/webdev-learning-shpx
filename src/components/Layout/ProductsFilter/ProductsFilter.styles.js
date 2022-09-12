import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;

  h1 {
    font-size: 1.1rem;
    margin-left: 2rem;
  }

  @media (min-width: 768px) {
    h1 {
      margin-left: 8rem;
    }
  }
`;

export const Select = styled.div`
  margin-right: 2rem;
  height: auto;

  @media (min-width: 768px) {
    margin-right: 8rem;
  }
`;
