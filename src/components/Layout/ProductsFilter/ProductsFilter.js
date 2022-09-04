import * as S from "./ProductsFilter.styles";
import Select from "react-select";
import { useContext } from "react";
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
  const ctx = useContext(ProdFilterContext);   
  
  const valueHandler = (choice) => {
    ctx.setValue(choice.value);    
  } 

  return (
    
    <S.Container>
      <h1 id="products">Products</h1>
      <S.Select>
        <Select
          options={options}
          placeholder={"All"}
          styles={customStyles}
          isSearchable={false}  
          onChange={valueHandler}        
        />
      </S.Select>
    
    </S.Container>
   
  );
};

export default ProductsFilter;
