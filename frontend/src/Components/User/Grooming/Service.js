import React, { useEffect, useState } from "react";
import "./Service.css";
import axios from "../../../Axios/Axios";
import { Link, useNavigate } from "react-router-dom";

function Service() {
  const token = localStorage.getItem("token");
  const [servie, setService] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/services", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setService(response.data.services);
      })
      .catch((error) => {
        if (!error.response.data.token) {
          navigate("/login");
        }
      });
  }, []);

  return (
    <div className="container">
      <h1 className="center-heading mt-5">Services Available</h1>
      <div className="card-main mt-5">
        {servie.map((obj) => {
          return (
            <div className="cards" key={obj._id}>
              <img src={obj.image.path} alt="Card 1 Image" />
              <h3>{obj.name}</h3>
              <p>
                where our mission is to connect loving pet owners with their
                perfect furry friend. We believe that every pet.
              </p>
              <Link to="/appointment" state={{ id: obj._id }}>
                <button className="btn btn-primary" id="btn">
                  Read More
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
