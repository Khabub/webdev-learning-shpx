import { useEffect, useContext } from "react";
import * as S from "./Card.styles";
import ProdFilterContext from "../../../store/context";

const Card = (props) => {
  // Template for products list

  const ctx = useContext(ProdFilterContext);

  useEffect(() => {
    // Reset css animation because after selecting All -> no animation
    if (!ctx.modalMenuVal) {
      // Do only if mobile menu is closed (modalMenuVal = false)
      const el = document.getElementById("animated");
      el.style.display = "none";
      setTimeout(() => {
        el.style.animation = "";
        el.style.display = "initial";
      }, [10]);

      return () => {
        clearTimeout();
      };
    }
  });

  return (
    <S.Container positiony={props.positiony}>
      <h1>{props.name}</h1>
      <p>{`$${props.price}`}</p>
      <img src={props.image} alt="product" id="animated" />
    </S.Container>
  );
};

export default Card;
