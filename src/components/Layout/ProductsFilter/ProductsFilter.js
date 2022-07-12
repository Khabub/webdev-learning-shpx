import * as S from "./ProductsFilter.styles";

const ProductsFilter = () => {

  return (
    <S.Container>
      <h1>Products</h1>
      <select>
        <option>All</option>
        <option>Test 1</option>
        <option>Test 2</option>
      </select>
    </S.Container>
  );
};

export default ProductsFilter;