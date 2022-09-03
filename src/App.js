import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";
import Products from "./components/Layout/Products/Products";
import ProductsFilter from "./components/Layout/ProductsFilter/ProductsFilter";
import Showcase from "./components/Layout/Showcase/Showcase"

const App = () => {
  // Main window with components
  return (
    <S.Container>
      <NavigationPanel />
      <MainWindow />
      <ProductsFilter />
      <Products />
      <Showcase />
    </S.Container>
  );
};

export default App;
