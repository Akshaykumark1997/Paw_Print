import React, { useState, useEffect } from "react";
import "./DonatedPets.css";
import axios from "../../../Axios/Axios";

function DonatedPets() {
  const token = localStorage.getItem("token");
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    axios
      .get(`/donatedPets`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setDonations(response.data.donatedPets);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container mt-5 mb-5" id="donatedPets">
      <div className="row d-flex justify-content-center">
        {donations.map((obj) => {
          return (
            <div className="col-md-10 mt-2" key={obj._id}>
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="images p-3">
                      <div className="text-center p-4">
                        <img id="main-image" src={obj.image.path} width="250" />
                      </div>
                      <div className="thumbnail text-left">
                        <p>Breed: {obj.breed}</p>
                        <p>Age: {obj.age}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="fa fa-long-arrow-left"></i>
                          <span className="ml-1">Back</span>
                        </div>
                      </div>
                      <div className="mt-4 mb-3">
                        <h5 className="text-uppercase">{obj.petName}</h5>
                      </div>
                      <p className="about">{obj.description}</p>
                      <div className="cart mt-4 align-items-center">
                        <button
                          className="btn text-uppercase mr-2 px-4"
                          style={{ backgroundColor: "#354b60", color: "#fff" }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DonatedPets;
