import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  animation: animShowcase 2s ease-in;

  @keyframes animShowcase {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      
    }
  }

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
