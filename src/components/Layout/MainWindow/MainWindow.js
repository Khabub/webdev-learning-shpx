import mainImage from "../../../assets/home_image.png";
import * as S from "./MainWindow_styles";

const MainWindow = () => {
  return (
    <S.Container>
      
        <img src={mainImage} alt="main"></img>
    
    </S.Container>
  );
};

export default MainWindow;
