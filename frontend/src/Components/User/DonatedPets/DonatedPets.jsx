import React, { useState, useEffect } from "react";
import "./DonatedPets.css";
import axios from "../../../Axios/Axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../../../State/Index";
import Spinner from "../../Spinner/Spinner";

function DonatedPets() {
  const spinner = useSelector((state) => state);
  const dispatch = useDispatch();
  const { startSpinner, stopSpinner } = bindActionCreators(
    actionCreaters,
    dispatch
  );
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    startSpinner(true);
    axios
      .get(`/donatedPets`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        stopSpinner(false);
        setDonations(response.data.donatedPets);
      })
      .catch((error) => {
        stopSpinner(false);
        if (error.response.blocked) {
          navigate("/login");
          message.error("You have been Blocked");
        } else if (!error.response.data.token) {
          navigate("/login");
        } else if (!error.response.data.success) {
          message.error("!Ooops something went wrong");
        }
      });
  }, []);
  return (
    <div className="container mt-5 mb-5" id="donatedPets">
      {spinner.spinner.spinner && <Spinner />}
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
                      <div className="mt-4 mb-3">
                        <h5 className="text-uppercase">{obj.petName}</h5>
                      </div>
                      <p className="about">{obj.description}</p>
                      <div className="cart mt-4 align-items-center">
                        <Link to="/editDonatedPets" state={{ id: obj._id }}>
                          <button
                            className="btn text-uppercase mr-2 px-4"
                            style={{
                              backgroundColor: "#354b60",
                              color: "#fff",
                            }}
                          >
                            Edit
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {donations.length <= 0 && (
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center mt-5">
              <h6 className="display-6 fw-bold">No Data to Show</h6>
              <p className="lead">You didnt donated any pets.</p>
              <Link to="/profile">
                <button
                  className="btn btn-primary mb-5"
                  style={{
                    backgroundColor: "#354b60",
                    color: "#fff",
                  }}
                >
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonatedPets;
