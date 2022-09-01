import * as S from "./ProductsFilter.styles";
import Select from "react-select";


const options = [
  { value: "all", label: "All" },
  { value: "produkt1", label: "Produkt 1" },
  { value: "produkt2", label: "Produkt 2" },
];

const customStyles = {  
  container: (provided, state) => ({
    ...provided,
    width: 150,    
  }),   
  
}

const ProductsFilter = () => {
  return (
    <S.Container>
      <h1>Products</h1>
      <S.Select>
        <Select options={options} styles={customStyles} isSearchable={false}/>
      </S.Select>
    </S.Container>
  );
};

export default ProductsFilter;
