import React from "react";
import "./ServiceCards.css";

function ServicesCards() {
  return (
    <div className="mt-5">
      <div className="card-container">
        <div className="card-1">
          <img src="../../../../Images/icon2.png" alt="Image1" />
          <div className="card-text">
            <h3>Grooming</h3>
            <p>
              Welcome to our where we provide professional and compassionate
              grooming services for your furry friends.
            </p>
          </div>
        </div>
        <div className="card-1">
          <img src="../../../../Images/icon2.png" alt="Image2" />
          <div className="card-text">
            <h3>Clinic</h3>
            <p>
              Welcome to a full-service veterinary clinic dedicated to providing
              exceptional care for your pets
            </p>
          </div>
        </div>
        <div className="card-1">
          <img src="../../../../Images/icon2.png" alt="Image3" />
          <div className="card-text">
            <h3>Adoption</h3>
            <p>
              Our mission is to provide a safe and comfortable environment for
              pets in need of a loving home, and to support pet owners through
              the adoption process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
