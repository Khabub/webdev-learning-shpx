import Modal from "../../UI/Modal/HamMenuModal";
import * as S from "./MenuHam.styles";

const MenuHam = (props) => {
  

  return (
    <Modal onClose={props.onClose}>
      <S.MenuHamList>
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
      </S.MenuHamList>
    </Modal>
  );
};

export default MenuHam;
