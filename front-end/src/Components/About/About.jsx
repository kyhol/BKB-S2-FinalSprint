import React from "react";
import "./About.css";

const about = () => {
    return (
      <div className="about">
        <div className="aboutText">
        <h1>About Us</h1>
        <p>Vinyl Tap was founded in 2024 by three guys with a vision to unite you with the records you want to listen to. Sure, we all love Spotify when we’re out and about. But when you’re sitting at home with a neat whiskey and want to feel some music, it’s pretty simple: nothing compares to the sound of vinyl.</p>
        <p>From chart-topping pop gems to indie diamonds in the rough, if we don’t have what you’re looking for it probably doesn't exist.</p>
        <p>Don’t have a record player yet? Click here and our 90-second quiz will find the machine that aligns with your expectations.</p>
        </div>
        <button>Back to Site</button>
      </div>
    );
  };
  
  export default about;