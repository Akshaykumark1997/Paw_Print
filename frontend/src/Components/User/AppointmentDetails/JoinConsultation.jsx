import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinConsultation.css";
import NavBar from "../../../Components/User/NavBar/NavBar";
import Footer from "../../../Components/User/Footer/Footer";

function JoinConsultation() {
  const [value, setValue] = useState("akshay@123");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <div className="card p-4">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-between mt-5 join-image-div">
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div className="d-flex justify-content-evenly join-image-div">
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                  <div className="col-1">
                    <img
                      src="../../../../Images/1.jpg"
                      className="img-fluid rounded-circle join-consultation-image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-center mb-4 mt-5 font-weight-bold join-h1">
                <b> Start Your Online Consultation Now</b>
              </h2>
              <div className="text-center">
                <div>
                  <input
                    type="hidden"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button
                    onClick={handleJoinRoom}
                    className="btn join-consultation-button btn-primary mt-4"
                  >
                    Join Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JoinConsultation;
