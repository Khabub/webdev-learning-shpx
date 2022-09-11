import * as S from "./Showcase.styles";
import showcaseImage from "../../../assets/showcase_image.png";
import React from "react";

const Showcase = () => {
  return (
    <S.Container>
      <span></span>
      <img src={showcaseImage} alt="showcase"></img>
      <S.ShowcaseText>
        <h1>Showcase</h1>
        <p>
          Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
          dolor Lorem ipsum dolor Lorem ipsum dolor
        </p>
        <S.SVG>
          <button>
            <svg width="3rem" height="3rem" viewBox="1 1 14 14">
              <path
                fill="#FEECDF"
                d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"
              ></path>
            </svg>
          </button>
          <button>
            <svg width="3rem" height="3rem" viewBox="1 1 14 14">
              <path
                fill="#E9DCD2"
                d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"
              />
            </svg>
          </button>
        </S.SVG>
      </S.ShowcaseText>
    </S.Container>
  );
};

export default Showcase;
