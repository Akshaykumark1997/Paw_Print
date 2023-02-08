import React from "react";
import "./ServiceCards.css";

function ServicesCards() {
  return (
    <div className="mt-5">
      <div className="card-container">
        <div className="card">
          <img src="../../../../Images/icon1.png" alt="Image1" />
          <div className="card-text">
            <h3>Grooming</h3>
            <p>Content 1</p>
          </div>
        </div>
        <div className="card">
          <img src="../../../../Images/icon2.png" alt="Image2" />
          <div className="card-text">
            <h3>Clinic</h3>
            <p>Content 2</p>
          </div>
        </div>
        <div className="card">
          <img src="../../../../Images/icon2.png" alt="Image3" />
          <div className="card-text">
            <h3>Adoption</h3>
            <p>Content 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
