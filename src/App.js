import React from "react";
import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";
import Products from "./components/Layout/Products/Products";
import ProductsFilter from "./components/Layout/ProductsFilter/ProductsFilter";
import { useState, useContext, useEffect } from "react";
import MenuHam from "./components/Layout/NavigationPanel/MenuHam";
import ProdFilterContext from "./store/context";
import { InView } from "react-intersection-observer";
import { animComponent } from "./store/components-list";

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
/*
  useEffect(() => {

    // Do not start product animation
    ctx.modalMenuVal = true;
  }, [ctx]);
*/
  const list = animComponent.map((val) => (
        <InView as="div" key={val.id}>
           {({inView, ref}) => (
            <div ref={ref}>
              {inView && val.component}
            </div>
          )}>
        </InView>
      ));

  return (
    <S.Container>
      {toggleMenu && <MenuHam onClose={closeMenu} />}
      <NavigationPanel onShow={hamMenu} />
      <MainWindow />
      <ProductsFilter />
      <Products />
      {list}
      ;
    </S.Container>
  );
};

export default App;
