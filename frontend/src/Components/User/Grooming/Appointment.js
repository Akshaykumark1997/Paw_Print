import React from "react";
import "./Appointment.css";
import { Link } from "react-router-dom";

function Appointment() {
  return (
    <div className="container mt-5">
      <div className="hero-section">
        <div className="hero-section-left">
          <img src="../../../../Images/mission.png" alt="hero image" />
        </div>
        <div className="hero-section-right">
          <h1 className="heading">We care your pet As you care</h1>
          <p className="content">
            We understand the bond between a pet and its owner, which is why we
            strive to provide you with accurate and up-to-date information on
            pet care, nutrition, behavior, and more. Our team of experts is
            dedicated to researching and testing products to help you make
            informed decisions for your pet. Whether you re looking for
            information on a specific breed, tips on training, or the best
            products for your pet, you ll find it all here.
          </p>

          <Link to="/about">
            <button className="btn btn-primary" id="button">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
