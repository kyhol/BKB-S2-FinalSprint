import React from "react";
import "./FlashSale.css";

const FlashSale = ({ className, ...props }) => {
  return (
    <div className={"group-1000005951 " + className}>
      <div className="today-s">Today’s </div>
      <div className="flash-sales">Flash Sales </div>
      <div className="group-1000005936">
        <div className="frame-580">
          <div className="days">Days </div>
          <div className="_03">03 </div>
        </div>
        <div className="frame-581">
          <div className="hours">Hours </div>
          <div className="_23">23 </div>
        </div>
        <div className="frame-582">
          <div className="minutes">Minutes </div>
          <div className="_19">19 </div>
        </div>
        <div className="frame-583">
          <div className="seconds">Seconds </div>
          <div className="_56">56 </div>
        </div>
      </div>
    </div>
  );
};
export default FlashSale;
