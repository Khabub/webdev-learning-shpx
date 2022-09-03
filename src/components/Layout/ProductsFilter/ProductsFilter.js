import * as S from "./ProductsFilter.styles";
import Select from "react-select";

// Contents of Select menu
const options = [
  { value: "all", label: "All" },
  { value: "produkt1", label: "Produkt 1" },
  { value: "produkt2", label: "Produkt 2" },
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
  return (
    <S.Container>
      <h1>Products</h1>
      <S.Select>
        <Select
          options={options}
          placeholder={"All"}
          styles={customStyles}
          isSearchable={false}          
        />
      </S.Select>
    </S.Container>
  );
};

export default ProductsFilter;
