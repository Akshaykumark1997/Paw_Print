import React from "react";
import "./OnlineConsultation.css";

function OnlineConsultation() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="../../../../Images/appoinment.jpg"
            alt="Image Description"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 className="heading mt-3">
            We Always Focus On Help Your Pet Have A Better Life & Health
          </h2>
          <p className="content">
            With our online consultations, you can get the expert veterinary
            care you need, wherever you are. To schedule an online consultation
            with one of our veterinarians, simply visit our website and click
            the `Schedule Online Consultation` button. We look forward to
            helping you and your pet stay healthy!
          </p>
          <div className="d-flex justify-content-evenly mt-5">
            <div>
              <p className="clinic-appointment-p">1,200 +</p>
              <p className="content">Pets Treated</p>
            </div>
            <div>
              <p className="clinic-appointment-p">3,250 +</p>
              <p className="content">Happy Clients</p>
            </div>
            <div>
              <p className="clinic-appointment-p">420 +</p>
              <p className="content">Trusted Partner</p>
            </div>
          </div>
          <button
            className="btn mt-5"
            style={{
              backgroundColor: "#354b60",
              color: "#fff",
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineConsultation;
