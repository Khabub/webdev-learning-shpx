import * as S from "./Contact.styles";
import Button from "../../UI/Button/Button";
import React from "react";
import { InView } from "react-intersection-observer";

const Contact = () => {
  return (
    <InView>
      {({inView, ref, entry}) => (
        <div ref={ref}>
          {inView &&
    <S.Container>
      <h1 id="contact">Get your quotation today</h1>
      <Button bgcolor={"grey"} textcolor={"white"}>
        Quote me
      </Button>
      <Button bgcolor={"white"} textcolor={"black"}>
        Contact Sales
      </Button>
    </S.Container>
    }
    </div>
  )}
    
    </InView>
  );
};

export default Contact;
