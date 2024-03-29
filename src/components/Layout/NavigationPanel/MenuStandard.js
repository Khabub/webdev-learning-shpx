import * as S from "./MenuStandard.styles";

const MenuStandard = () => {
  return (
    <S.Container>
      <S.MenuStandardList>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </S.MenuStandardList>      
    </S.Container>
  );
};

export default MenuStandard;
