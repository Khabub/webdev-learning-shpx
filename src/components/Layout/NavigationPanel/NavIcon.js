import * as S from "./NavIcon.styles";
import hamIcon from "../../../assets/hamMenu_icon.png";

const NavIcon = (props) => {
  return (
    <S.Img onClick={props.onShow}>
      <img src={hamIcon} alt="ham icon"></img>
    </S.Img>
  );
};

export default NavIcon;
