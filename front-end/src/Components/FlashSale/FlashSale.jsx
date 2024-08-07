import React, { useEffect, useState } from "react";
import "./FlashSale.css";

const FlashSale = ({ onSaleEnd }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(timer);
        onSaleEnd();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onSaleEnd]);

  function calculateTimeLeft() {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const difference = endOfDay - now;

    return {
      total: difference,
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="wrapperOfFlashSale">
      <div className="flashSaleContainer">
        <p className="flashSaleText">Flash Sale!</p>
        <p className="flashSaleTextEndsIn">Buy before it's too late!</p>
        <div className="countdown">
          {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
