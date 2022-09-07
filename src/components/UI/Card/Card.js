import { useEffect } from "react";
import * as S from "./Card.styles";

const Card = (props) => {
  // Template for products list

  useEffect(() => {
    // Reset css animation because after selecting All -> no animation
    const el = document.getElementById("animated");
    el.style.display = "none";
    setTimeout(() => {
      el.style.animation = "";
      el.style.display = "initial";
    }, [10]);
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
