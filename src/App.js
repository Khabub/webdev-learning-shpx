import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";


const App = () => {
  return (
    <S.Container>
      <NavigationPanel />
      <MainWindow />
      <div>PRODUCTS</div>
    </S.Container>
  );
}

export default App;
