import React from "react";
import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";
import Products from "./components/Layout/Products/Products";
import ProductsFilter from "./components/Layout/ProductsFilter/ProductsFilter";
import { useState, useContext, useEffect, useRef } from "react";
import MenuHam from "./components/Layout/NavigationPanel/MenuHam";
import ProdFilterContext from "./store/context";
import { useInView } from "react-intersection-observer";
/* import { animComponent } from "./store/components-list"; */
import Showcase from "./components/Layout/Showcase/Showcase";
import Contact from "./components/Layout/Contact/Contact";



const App = () => {
  // Main window with components

  const [toggleMenu, setToggleMenu] = useState(false);
  const ctx = useContext(ProdFilterContext);
  const [visible, setVisible] = useState(false);
  
  const { ref, inView, entry} = useInView({threshold: 0});

  const hamMenu = () => {
    setToggleMenu((prev) => !prev);
    ctx.toggleModalMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
    ctx.toggleModalMenu(false);
  };
  
  useEffect(() => {


    // Do not start product animation
    ctx.modalMenuVal = true;
  }, [ctx]);



  return (
    <S.Container>
      {toggleMenu && <MenuHam onClose={closeMenu} />}
      <NavigationPanel onShow={hamMenu} />
      <MainWindow />
      <ProductsFilter />
      <Products />        
  
      <div ref={ref}>{inView && <Showcase />}</div>
      <Contact />
     
   
    </S.Container>
  );
};

export default App;
