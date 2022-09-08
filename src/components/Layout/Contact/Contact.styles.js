import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 320px;
  margin: 5rem auto;
  background-color: rgb(233, 220, 210);
  border-top-right-radius: 25px;
  animation: animContact 3s ease-in;

  h1 {
    padding: 2rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-bottom: 0;
  }

  @keyframes animContact {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
`;