import * as S from "./Contact.styles";
import Button from "../../UI/Button/Button";

const Contact = () => {
  return (
    <S.Container>
      <h1 id="contact">Get your quotation today</h1>
      <Button bgcolor={"grey"} textcolor={"white"}>Quote me</Button>
      <Button bgcolor={"white"} textcolor={"black"}>Contact Sales</Button>
    </S.Container>
  );
};

export default Contact;
