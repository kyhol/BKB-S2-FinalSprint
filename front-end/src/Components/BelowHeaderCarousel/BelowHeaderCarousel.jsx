import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BelowHeaderCarousel.css";
import belowHeaderImage1 from "../../Assets/BelowHeaderCarousel/BelowHeaderCarousel1.png";
import belowHeaderImage2 from "../../Assets/BelowHeaderCarousel/BelowHeaderCarousel2.png";
import belowHeaderImage3 from "../../Assets/BelowHeaderCarousel/BelowHeaderCarousel3.png";
import belowHeaderButtonArrowRight from "../../Assets/BelowHeaderCarousel/belowHeaderButtonSlide1.svg";
import Slide2Button from "../../Assets/BelowHeaderCarousel/belowHeaderButtonSlide2.svg";
import { Link } from "react-router-dom";
const CarouselComponent = () => {
  const slides = [
    {
      image: belowHeaderImage1,
      button: belowHeaderButtonArrowRight,
      buttonStyle: "buttonRightPointing",
    },
    {
      image: belowHeaderImage2,
      button: Slide2Button,
      buttonStyle: "Slide2Button",
    },
    {
      image: belowHeaderImage3,
      button: Slide2Button,
      buttonStyle: "Slide3Button",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="carousel-image"
            />
            <div className="carousel-content">
              <Link to="/records">
                <button className={`${slide.buttonStyle}`}>
                  <img src={slide.button} alt="button" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
