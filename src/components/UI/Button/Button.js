import { Fragment } from "react";
import * as S from "./Button.styles";

const Button = (props) => {

  return (
    <Fragment>
    <S.Button bgcolor={props.bgcolor} textcolor={props.textcolor}>
      {props.children}
    </S.Button>
    </Fragment>
  );
};

export default Button;