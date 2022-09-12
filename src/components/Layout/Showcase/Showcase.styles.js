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
    img {
      max-width: 50%;
    }

    span {
      top: 830px;
      left: 250px;
      width: 300px;
      height: 50px;
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
    position: absolute;
    top: 830px;
    left: 0;

    p {
      width: 250px;
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
