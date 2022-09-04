import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";
import Products from "./components/Layout/Products/Products";
import ProductsFilter from "./components/Layout/ProductsFilter/ProductsFilter";
import Showcase from "./components/Layout/Showcase/Showcase";
import Contact from "./components/Layout/Contact/Contact";
import { ProdFilterProvider } from "./store/context";
import { useState } from "react";
import MenuHam from "./components/Layout/NavigationPanel/MenuHam";

const App = () => {
  // Main window with components

  const [toggleMenu, setToggleMenu] = useState(false);

  const hamMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <S.Container>
      {toggleMenu && <MenuHam onClose={closeMenu} />}
      <NavigationPanel onShow={hamMenu} />
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
