import { createContext, useState } from "react";

const ProdFilterContext = createContext({
  setValue: () => {},

  state: "",
});

export const ProdFilterProvider = (props) => {
  const [value, setValue] = useState("all");

  const valueHandler = (val) => {
    setValue(val);
  };

  const prodFilter = {
    setValue: valueHandler,

    state: value,
  };

  return (
    <ProdFilterContext.Provider value={prodFilter}>
      {props.children}
    </ProdFilterContext.Provider>
  );
};

export default ProdFilterContext;
