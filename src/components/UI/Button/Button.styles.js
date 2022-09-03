import styled from "styled-components";

export const Button = styled.button`

  width: 170px;
  padding: 0.5rem 0;
  margin-left: 2rem;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.textcolor};
  border: none;

  &:hover {
    cursor: pointer;
    color: brown;
    background-color: rgb(20, 220, 220);
  }
`;