import styled from "styled-components";

export const MenuHamList = styled.ul`
  list-style-type: none;
  font-size: 1.3rem;
  padding: 1rem;
  margin: 0;

  a {
    text-decoration: none;
    color: rgb(199, 199, 199);
    padding: 0 1rem;
    text-shadow: 3px 3px 3px black;
  }

  a:hover,
  a.active,
  a:active {
    border-left: 3px solid rgb(1, 1, 34);
    color: rgb(189, 192, 0);
    text-shadow: 2px 2px 10px rgb(0, 0, 0);
  }
`;
