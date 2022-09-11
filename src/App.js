import React, { useEffect } from "react";
import * as S from "./App_styles";
import MainWindow from "./components/Layout/MainWindow/MainWindow";
import NavigationPanel from "./components/Layout/NavigationPanel/NavigationPanel";
import Products from "./components/Layout/Products/Products";
import ProductsFilter from "./components/Layout/ProductsFilter/ProductsFilter";
import { useState, useContext, useRef } from "react";
import MenuHam from "./components/Layout/NavigationPanel/MenuHam";
import ProdFilterContext from "./store/context";
import Contact from "./components/Layout/Contact/Contact";
import Showcase from "./components/Layout/Showcase/Showcase";
import { animComp, animComponent } from "./store/components-list";
import Fade from "./Fade";

const App = () => {
  // Main window with components

  const [toggleMenu, setToggleMenu] = useState(false);
  const ctx = useContext(ProdFilterContext);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const hamMenu = () => {
    setToggleMenu((prev) => !prev);
    ctx.toggleModalMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
    ctx.toggleModalMenu(false);
  };

  // Prý může pomoct, ale nefungovalo to
  // triggerOnce={process.env.NODE_ENV === "production"}>

  /*   const callbackEntries = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }; */

  /*   useEffect(() => {
    const observer = new IntersectionObserver(callbackEntries, {
      threshold: 1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, [containerRef]); */

  return (
    <S.Container>
      {toggleMenu && <MenuHam onClose={closeMenu} />}
      <NavigationPanel onShow={hamMenu} />
      <MainWindow />
      <ProductsFilter />
      <Products />
      {animComponent.map((val) => (
        <Fade
          key={val.id}          
        ></Fade>
      ))}
    </S.Container>
  );
};

export default App;
