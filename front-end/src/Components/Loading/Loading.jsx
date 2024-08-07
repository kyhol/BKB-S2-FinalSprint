import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <svg className="loader-svg" viewBox="0 0 400 400">
      <g id="record">
        <circle r="200" cx="200" cy="200" />
        <circle className="line" r="180" cx="200" cy="200" />
        <circle className="line" r="160" cx="200" cy="200" />
        <circle className="line" r="140" cx="200" cy="200" />
        <circle id="label" cx="200" cy="200" r="65" />
        <text y="180" x="165" className="text">
          Vinyl Tap
        </text>
        <text y="230" x="150" className="text">
          Vinyl Resale
        </text>
        <circle id="dot" cx="200" cy="200" r="6" />
      </g>
    </svg>
  );
};

export default Loading;
