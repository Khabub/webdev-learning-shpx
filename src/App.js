import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";
import Products from "./components/Layout/Products/Products";
import ProductsFilter from "./components/Layout/ProductsFilter/ProductsFilter";
import Showcase from "./components/Layout/Showcase/Showcase";
import Contact from "./components/Layout/Contact/Contact";
import { ProdFilterProvider } from "./store/context";

const App = () => {
  // Main window with components
  return (
    <S.Container>
      <NavigationPanel />
      <MainWindow />
      <ProdFilterProvider>
        <ProductsFilter />
        <Products />
      </ProdFilterProvider>
      <Showcase />
      <Contact />
    </S.Container>
  );
};

export default App;
