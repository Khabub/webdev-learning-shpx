import { Fragment } from "react";
import ReactDOM from "react-dom";
import * as S from "./HamMenuModal.styles";

const Backdrop = (props) => {
  return <S.Backdrop onClick={props.onClose}></S.Backdrop>;
};

const HamMenu = (props) => {
  return <S.Container>{props.children}</S.Container>;
};

const Modal = (props) => {
  const portal = document.getElementById("modal");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(<HamMenu>{props.children}</HamMenu>, portal)}
    </Fragment>
  );
};

export default Modal;
