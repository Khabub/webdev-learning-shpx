import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  span {
    position: absolute;
    left: 0;
    top: 840px;
    background-color: rgb(233, 220, 210);
    width: 100px;
    height: 70px;
    z-index: -1;
  }

  img {
    max-width: 90%;
    height: auto;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
    img {
      max-width: 30%;
      margin-left: 5rem;
    }

    span {
      top: 670px;
      left: 0;
      width: 300px;
      height: 40px;
    }
  }

  @media (min-width: 1000px) {
    img {
      max-width: 50%;
    }
    span {
      top: 1200px;
      left: 0;
      width: 300px;
      height: 80px;
    }
  }

  @media (min-width: 1400px) {
    img {
      max-width: 100%;
    }
    span {
      top: 1400px;
      left: 0;
      width: 300px;
      height: 80px;
    }
  }
`;

export const ShowcaseText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-left: 2.5rem;
    margin-bottom: 0;
  }

  p {
    margin-left: 2.5rem;
    font-size: 1.3rem;
    line-height: 2rem;
    padding-right: 2.5rem;
  }

  @media (min-width: 700px) {    
    p {
      width: 370px;
      font-size: 1.1rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1000px) {
    margin-top: 6rem;
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 1400px) {
    margin-left: 5rem;

    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 2rem;
      width: 500px;
    }
  }
`;

export const SVG = styled.div`
  margin-left: 2.5rem;
  background-color: white;
  border: 1px solid white;

  button {
    background-color: transparent;
    border: none;
  }

  svg {
    background-color: black;
    margin-right: 1rem;

    &:hover {
      background-color: grey;
      cursor: pointer;
    }
  }
`;
