import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`;

export const MenuStandardList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;

  a {
    color: black;
    margin-right: 3rem;
    text-decoration: none;
  }

  a:hover,
  a.active,
  a:active {
    border-bottom: 3px solid rgb(182, 182, 216);
    color: blue;
    text-shadow: 0px 0px 15px white;
  }
`;
