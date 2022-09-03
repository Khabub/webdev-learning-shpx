import Card from "../../UI/Card/Card";
import { productsList } from "../../../store/product-list";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Products.styles.css";
import { Navigation } from "swiper";

// Make list from productsList and then use it in <Swiper>
const list = productsList.map((val) => (
  // Swiper module
  <SwiperSlide key={val.id}>
    <Card
      key={val.id}
      name={val.name}
      price={val.price}
      image={val.image}
      type={val.type}
      positiony={val.positiony}
    ></Card>
  </SwiperSlide>
));

const Products = () => {
  // Products - swiper
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      centeredSlides={true}
      grabCursor={true}
      navigation={true}
      modules={[Navigation]}
    >
      {list}
    </Swiper>
  );
};

export default Products;
