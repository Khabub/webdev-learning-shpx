import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";
import Products from "./components/Layout/Products/Products";
import ProductsFilter from "./components/Layout/ProductsFilter/ProductsFilter";
import Showcase from "./components/Layout/Showcase/Showcase";
import Contact from "./components/Layout/Contact/Contact";
import { useState, useContext } from "react";
import MenuHam from "./components/Layout/NavigationPanel/MenuHam";
import ProdFilterContext from "./store/context";

const App = () => {
  // Main window with components

  const [toggleMenu, setToggleMenu] = useState(false);
  const ctx = useContext(ProdFilterContext);

  const hamMenu = () => {
    setToggleMenu((prev) => !prev);
    ctx.toggleModalMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
    ctx.toggleModalMenu(false);
  };

  return (
    <S.Container>
      {toggleMenu && <MenuHam onClose={closeMenu} />}
      <NavigationPanel onShow={hamMenu} />
      <MainWindow />
      <ProductsFilter />
      <Products />
      <Showcase />
      <Contact />
    </S.Container>
  );
};

export default App;
