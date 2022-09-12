import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100vw;
  position: fixed;
  top: 0;
  color: #555;
  background-color: #fff;
  z-index: 10;
`;

export const Icons = styled.div`
  display: flex;
  margin-right: 2rem;

  img {
    width: 50%;
    margin-left: 1rem;
    transform: scale(70%);
  }

  @media (min-width: 1000px) {
    margin-right: 3rem;
  }
`;
