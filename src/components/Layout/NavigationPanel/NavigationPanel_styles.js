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

  h1 {
    margin-left: 1rem;
  }

  img {
    margin-right: 1rem;
  }
`;
