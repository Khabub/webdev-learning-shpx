import Card from "../../UI/Card/Card";
import { productsList } from "../../../store/product-list";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Products.styles.css";
import { Navigation } from "swiper";
import { useContext, useEffect, useCallback } from "react";
import ProdFilterContext from "../../../store/context";
import { useState } from "react";

const Products = () => {
  const ctx = useContext(ProdFilterContext);
  const [slides, setSlides] = useState(1);
 
  // Filter select menu, all or category
  const filterCheck = (val) => {
    if (ctx.state === "all" || ctx.state === val.type) {
      return val.type;
    }
  };

  const handleWindowSize = useCallback(() => {
    if (window.innerWidth <= 700) {
      setSlides(1);
    } else {
      setSlides(3);
    }
    if (window.innerWidth >= 1400) {
      setSlides(6);
    }
  }, []);

  // Make list from productsList and then use it in <Swiper>
  const list = productsList.filter(filterCheck).map((val) => (
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

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setSlides(1);
    } else {
      setSlides(3);
    }
    if (window.innerWidth >= 1400) {
      setSlides(6);
    }

    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize, ctx]);

  return (
    <Swiper
      slidesPerView={slides}
      spaceBetween={200}
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
