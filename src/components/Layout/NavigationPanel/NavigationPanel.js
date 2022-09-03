import * as S from "./NavigationPanel_styles";
import hamIcon from "../../../assets/hamMenu_icon.png";

const NavigationPanel = () => {
  // Navigation panel
  return (
    <S.Container>
      <h1>SHPX</h1>
      <img src={hamIcon} alt="ham icon"></img>
    </S.Container>
  );
};

export default NavigationPanel;
