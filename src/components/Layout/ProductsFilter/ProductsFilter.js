import * as S from "./ProductsFilter.styles";
import Select from "react-select";
import { useContext, useEffect, useState, useCallback } from "react";
import ProdFilterContext from "../../../store/context";

// Contents of Select menu
const options = [
  { value: "all", label: "All" },
  { value: "lamp", label: "Lamp" },
  { value: "chair", label: "Chair" },
  { value: "table", label: "Table" },
  { value: "sofa", label: "Sofa" },
];

// Settings for Select menu
const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: 150,
  }),
};

const ProductsFilter = () => {
  // Filter of products
  const [icon, setIcon] = useState(false);
  const ctx = useContext(ProdFilterContext);

  const valueHandler = (choice) => {
    ctx.setValue(choice.value);
  };

  const valueHandlerNames = (event) => {   
    ctx.setValue(event.target.value);   
  };

  const handleWindowSize = useCallback(() => {
    window.innerWidth >= 700 ? setIcon(false) : setIcon(true);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 700) {
      setIcon(false);
    } else {
      setIcon(true);
    }

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize, ctx]);

  const select = (
    <S.Select>
      <Select
        options={options}
        placeholder={"All"}
        styles={customStyles}
        isSearchable={false}
        onChange={valueHandler}
      />
    </S.Select>
  );

  const selectNames = (
    <S.SelectNames>
      <li>
        <button onClick={valueHandlerNames} value="all">All</button>
      </li>
      <li>
        <button onClick={valueHandlerNames} value="lamp">Lamp</button>
      </li>
      <li>
        <button onClick={valueHandlerNames} value="chair">Chair</button>
      </li>
      <li>
        <button onClick={valueHandlerNames} value="table">Table</button>
      </li>
      <li>
        <button onClick={valueHandlerNames} value="sofa">Sofa</button>
      </li>
    </S.SelectNames>
  );

  return (
    <S.Container>
      <h1 id="products">Products</h1>
      {icon === true ? select : selectNames}
    </S.Container>
  );
};

export default ProductsFilter;
