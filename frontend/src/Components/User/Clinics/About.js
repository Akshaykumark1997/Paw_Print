import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container mt-5">
      <h1 className="heading">Why Paw Print</h1>
      <div className="content">
        <p>
          Welcome to our website where you can easily find nearby hospitals and
          clinics for pet care. We understand that finding the right healthcare
          provider for your pet is important, and we are here to help.You can
          browse through the list and make appointments.
        </p>
      </div>
      <div className="card-clinic-container">
        <div className="card-clinic">
          <img src="image1.jpg" alt="Image 1" />
          <div className="card-clinic-info">
            <h2>Heading 1</h2>
            <p>Content goes here...</p>
          </div>
        </div>

        <div className="card-clinic">
          <img src="image2.jpg" alt="Image 2" />
          <div className="card-clinic-info">
            <h2>Heading 2</h2>
            <p>Content goes here...</p>
          </div>
        </div>

        <div className="card-clinic">
          <img src="image3.jpg" alt="Image 3" />
          <div className="card-clinic-info">
            <h2>Heading 3</h2>
            <p>Content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
