import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div
      className="hero-1 img-fluid"
      style={{ backgroundImage: "url(../../../../../../Images/slide03.jpg)" }}
    >
      <div className="heros-left">
        <h1 className="heading-1">We Care Your Pet .!</h1>
        <p className="content-1">We help to groom your pet</p>
        <button className="btn btn-primary" id="button-1">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Hero;
