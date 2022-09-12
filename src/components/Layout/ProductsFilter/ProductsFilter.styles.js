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

  @media (min-width: 700px) {
    h1 {
      margin-left: 6rem;
    }
  }

  @media (min-width: 1000px) {
    justify-content: center;

    h1 {
      font-size: 1.7rem;
      margin-right: 6rem;
      margin-bottom: 6rem;
    }
  }
`;

export const Select = styled.div`
  margin-right: 2rem;
  height: auto;
`;

export const SelectNames = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;

  button {
    border: none;
    background-color: transparent;
    font-size: 1rem;
    margin-right: 2.5rem;
    cursor: pointer;
  }

  a:hover,
  a.active,
  a:active,
  button:hover,
  button:active,
  button.active {
    border-bottom: 3px solid rgb(182, 182, 216);
    color: blue;
    text-shadow: 0px 0px 15px white;
  }

  @media (min-width: 1000px) {
    button {
      font-size: 1.5rem;
    }
  }
`;
