import Card from "../../UI/Card/Card";
import { productsList } from "../../../store/product-list";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Products.styles.css";


const list = productsList.map((val) => (
  <SwiperSlide key={val.id}>
    <Card
      key={val.id}
      name={val.name}
      price={val.price}
      image={val.image}
      type={val.type}
    ></Card>
  </SwiperSlide>
));

const Products = () => {
  return (
    <>
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      centeredSlides={true}      
      pagination={{
        clickable: true,
      }}
      
      
    >
      {list}
    </Swiper>
    </>
  );
};

export default Products;
