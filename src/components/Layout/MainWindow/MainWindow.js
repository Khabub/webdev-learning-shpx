import mainImage from "../../../assets/home_image.png";
import * as S from "./MainWindow_styles";

const MainWindow = () => {
  // Main window - headline with image
  return (
    <S.Container>
      <S.HeadlineBox>
        <h1>Modern Interior</h1>
        <h1>for your</h1>
        <h1>Dream House</h1>
        <p>We custom make design to suits your needs.</p>
      </S.HeadlineBox>
      <img id="home" src={mainImage} alt="main"></img>
    </S.Container>
  );
};

export default MainWindow;
