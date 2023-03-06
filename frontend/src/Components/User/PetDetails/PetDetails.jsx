import React, { useEffect, useState } from "react";
import "./PetDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../../Axios/Axios";

export default function PetDetails() {
  const token = localStorage.getItem("token");
  const [petDetails, setPetDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(location.state.id);
    axios
      .get(`/petDetails/${location.state.id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.petDetails);
        setPetDetails(response.data.petDetails);
      })
      .catch((error) => {
        if (!error.response.data.token) {
          navigate("/login");
        }
      });
  }, []);
  return (
    <div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#354b60" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h1 className="text-white">My Main Heading</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-5 mx-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="../../../../Images/b-2.jpg"
                alt="Left Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 align-self-center">
              <div className="row">
                <h2 className="text-center mb-4 mt-3">{petDetails.petName}</h2>
                <div className="col-lg-8 offset-lg-2 d-flex justify-content-between">
                  <ul className="petDetailsList">
                    <li>Name</li>
                    <li>Age</li>
                  </ul>
                  <ul className="petDetailsList">
                    <li>Breed</li>
                    <li>Vaccinated</li>
                  </ul>
                </div>
                <div className="contanier">
                  <p>
                    Adopting a pet is a wonderful way to add a furry friend to
                    your family and give a loving home to an animal in need.
                    When you adopt a pet, you are not only providing a home for
                    an animal, but also helping to reduce the number of animals
                    in shelters and rescues. Before adopting a pet, it s
                    important to consider your lifestyle and the type of pet
                    that would fit well with your family. You should also
                    research the breed and any potential health or behavioral
                    issues that may come with it.
                  </p>
                </div>

                <div className="d-flex justify-content-start mx-3 mt-3">
                  <button className="btn" id="petDetailsButton">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-lg-10 offset-lg-1  my-5">
        <h1>About</h1>
        <p className="lead text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget leo
          vel ipsum consectetur malesuada at eget turpis. Phasellus sit amet
          neque sapien. Vivamus tincidunt lectus mauris, ut facilisis justo
          tincidunt id. Etiam vitae consectetur ipsum. Aenean dignissim lacinia
          odio, non hendrerit quam ullamcorper in. Donec sit amet mi sapien.
          Nulla vitae felis lacus. Nam eget ligula nec odio eleifend
          consectetur.
        </p>
      </div>
    </div>
  );
}
