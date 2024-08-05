import React from "react";
import "./figmaTest.css";
import heartSmall from "../Assets/Home/heart-small.png";
import groupSvg from "../Assets/Home/groupsvg.svg";
import vector0 from "../Assets/Home/Vector0.svg";
import vector1 from "../Assets/Home/Vector1.svg";
import vector2 from "../Assets/Home/Vector2.svg";
import vector3 from "../Assets/Home/Vector3.svg";
import starHalfFilled from "../Assets/Home/star-half-filled0.svg";
import centeredImage from "../Assets/Home/centered-image.png"; // Import the new image

const FigmaTest = () => {
  return (
    <div className="cart-with-flat-discount">
      <div className="frame-570">
        <div className="discount-percent">
          <div className="_35">-25%</div>
        </div>
        <div className="frame-575">
          <div className="fill-heart">
            <div className="ellipse-12"></div>
            <img className="heart-small" src={heartSmall} alt="heart small" />
          </div>
          <div className="fill-eye">
            <div className="ellipse-13"></div>
            <div className="quick-view">
              <img className="group" src={groupSvg} alt="group icon" />
            </div>
          </div>
        </div>
        <div className="frame-614">
          <img className="centered-image" src={centeredImage} alt="centered" />{" "}
          {/* Add the new image */}
        </div>
      </div>
      <div className="frame-569">
        <div className="s-series-comfort-chair">Vinyl Record</div>
        <div className="frame-567">
          <div className="_375">$375</div>
          <div className="_400">$400</div>
        </div>
        <div className="frame-566">
          <div className="four-half-star">
            <img className="vector" src={vector0} alt="star vector 0" />
            <img className="vector2" src={vector1} alt="star vector 1" />
            <img className="vector3" src={vector2} alt="star vector 2" />
            <img className="vector4" src={vector3} alt="star vector 3" />
            <img
              className="star-half-filled"
              src={starHalfFilled}
              alt="half-filled star"
            />
          </div>
          <div className="_99">(99)</div>
        </div>
      </div>
    </div>
  );
};

export default FigmaTest;
