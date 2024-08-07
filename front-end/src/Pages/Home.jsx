import React from "react";
import FigmaTest from "../Components/figmaTest/figmaTest";
import BelowHeaderCarousel from "../Components/BelowHeaderCarousel/BelowHeaderCarousel";
import DeliveryServiceMoneyBack from "../Components/DeliveryServiceMoneyBack/deliveryServiceMoneyBack";
import FlashSale from "../Components/FlashSale/FlashSale";
import Testimonials from "../Components/Testimonials/Testimonials";
import BottomRecordPicture from "../Components/BottomRecordPicture/BottomRecordPicture";
const Home = () => {
  return (
    <div>
      <BelowHeaderCarousel />
      <FigmaTest />
      <Testimonials />
      <BottomRecordPicture />
      <DeliveryServiceMoneyBack />
    </div>
  );
};

export default Home;
