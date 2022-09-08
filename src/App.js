import React from "react";
import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";
import Products from "./components/Layout/Products/Products";
import ProductsFilter from "./components/Layout/ProductsFilter/ProductsFilter";
import Showcase from "./components/Layout/Showcase/Showcase";
import Contact from "./components/Layout/Contact/Contact";
import { useState, useContext, useEffect } from "react";
import MenuHam from "./components/Layout/NavigationPanel/MenuHam";
import ProdFilterContext from "./store/context";
import { useInView } from "react-intersection-observer";

const App = () => {
  // Main window with components

  const [toggleMenu, setToggleMenu] = useState(false);
  const ctx = useContext(ProdFilterContext);
  /* const myRef = useRef(); */
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

 
/*   const [myElementVisible, setMyElementVisible] = useState(false); */

  const hamMenu = () => {
    setToggleMenu((prev) => !prev);
    ctx.toggleModalMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
    ctx.toggleModalMenu(false);
  };

  useEffect(() => {
    ctx.modalMenuVal = true;

  }, [ctx]);
/*   useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        setMyElementVisible(entry.isIntersecting);
      });      
    });
    observer.observe(myRef.current);
    ctx.modalMenuVal = true;
   
  }, [myElementVisible, ctx]); */

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
