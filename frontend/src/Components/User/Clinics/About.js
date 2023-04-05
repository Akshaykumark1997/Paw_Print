import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

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
      <div className="card-clinic-container mt-5">
        <div className="card-clinic">
          <img
            src="../../../../Images/doctor-3552.png"
            alt="Image 1"
            className="mt-2"
          />
          <div className="card-clinic-info">
            <h2 className="heading">IT expertise</h2>
            <p className="content">
              Our team of veterinary experts has years of experience providing
              top-notch care for pets of all kinds. From routine check-ups to
              complex surgical procedures, we have the expertise and knowledge
              needed to keep your furry friends happy and healthy.
            </p>
          </div>
        </div>

        <div className="card-clinic">
          <img
            src="../../../../Images/24-7-support-10894.png"
            alt="Image 2"
            className="mt-2"
          />
          <div className="card-clinic-info">
            <h2 className="heading">24/7 Support</h2>
            <p className="content">
              We understand that emergencies can happen at any time. Thats why
              we offer 24/7 support to ensure that your pet gets the care they
              need when they need it most. Our team of veterinary professionals
              is available around the clock to answer your questions and provide
              guidance in emergency situations.
            </p>
          </div>
        </div>

        <div className="card-clinic">
          <h4 className="mt-5 heading">Online Consultation</h4>
          <div className="card-clinic-info">
            <p className="mt-3 content">
              we understand that it can be challenging to bring your pet into
              the clinic for every health concern. Thats why we offer online
              consultations to provide you with a convenient way to get expert
              advice and guidance from our veterinary professionals from the
              comfort of your own home.
            </p>
            <Link to="/about">
              <button
                className="btn mt-4"
                style={{
                  backgroundColor: "#354b60",
                  color: "#fff",
                }}
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
