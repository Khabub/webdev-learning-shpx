import * as S from "./Card.styles";

const Card = (props) => {
  return (
    <S.Container positiony={props.positiony}>
      <h1>{props.name}</h1>
      <p>{`$${props.price}`}</p>
      <img src={props.image} alt="product"/>
    </S.Container>
  );
};

export default Card;
