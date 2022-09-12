import { createContext, useState } from "react";

const ProdFilterContext = createContext({
  setValue: Function,
  state: String,
  toggleModalMenu: () => {},
  modalMenuVal: Boolean,
  setSlidesValue: Function,
  slides: Number,
});

export const ProdFilterProvider = (props) => {
  const [value, setValue] = useState("all");
  const [toggleVal, setToggleVal] = useState(false);
  const [slides, setSlides] = useState(1);

  const valueHandler = (val) => {
    // Set products - All or one name
    setValue(val);
  };

  const toggleHandler = (val) => {
    // Set true if mobile menu is active
    // true = no product animation
    setToggleVal(val);
  };

  const slidesHandler = (val) => {
    setSlides(val);
  };

  const prodFilter = {
    setValue: valueHandler,
    state: value,
    toggleModalMenu: toggleHandler,
    modalMenuVal: toggleVal,
    slides,
    setSlidesValue: slidesHandler,
  };

  return (
    <ProdFilterContext.Provider value={prodFilter}>
      {props.children}
    </ProdFilterContext.Provider>
  );
};

export default ProdFilterContext;
