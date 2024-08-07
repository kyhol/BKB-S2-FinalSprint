import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Button from "../Button/Button";

const About = () => {
  const navigate = useNavigate();

  const handleBackToSiteClick = () => {
    navigate("/");
  };

  return (
    <div className="about">
      <div className="aboutText">
        <h1>About Us</h1>
        <p>Vinyl Tap was founded in 2024 by three guys with a vision to unite you with the records you want to listen to. Sure, we all love Spotify when we’re out and about. But when you’re sitting at home with a neat whiskey and want to feel some music, it’s pretty simple: nothing compares to the sound of vinyl.</p>
        <p>From chart-topping pop gems to indie diamonds in the rough, if we don’t have what you’re looking for it probably doesn't exist.</p>
        <p>Don’t have a record player yet? Reach out to us today for a free consultation to find the perfect machine to play the soundtrack to your memories.</p>
      </div>
      <div className="backToSite">
        <Button text="Back to Site" onClick={handleBackToSiteClick}/>
      </div>
    </div>
  );
};

export default About;