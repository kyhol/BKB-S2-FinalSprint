import React from "react";
import FigmaTest from "../Components/figmaTest/figmaTest";
import BelowHeaderCarousel from "../Components/BelowHeaderCarousel/BelowHeaderCarousel";
import DeliveryServiceMoneyBack from "../Components/DeliveryServiceMoneyBack/deliveryServiceMoneyBack";
import FlashSale from "../Components/FlashSale/FlashSale";
import Testimonials from "../Components/Testimonials/Testimonials";
import BottomRecordPicture from "../Components/BottomRecordPicture/BottomRecordPicture";
import GenreYank from "../Components/GenreYank/GenreYank";
import GenreText from "../Components/GenreText/GenreText";
const Home = () => {
  return (
    <div>
      <BelowHeaderCarousel />
      <FigmaTest />
      <GenreText />
      <GenreYank />
      <Testimonials />
      <BottomRecordPicture />
      <DeliveryServiceMoneyBack />
    </div>
  );
};

export default Home;
