import * as S from "./Contact.styles";
import Button from "../../UI/Button/Button";
import React from "react";

const Contact = () => {
  return (
    <S.Container>
      <h1 id="contact">Get your quotation today</h1>
      <div>
        <Button bgcolor={"grey"} textcolor={"white"}>
          Quote me
        </Button>
        <Button bgcolor={"white"} textcolor={"black"}>
          Contact Sales
        </Button>
      </div>
    </S.Container>
  );
};

export default Contact;
