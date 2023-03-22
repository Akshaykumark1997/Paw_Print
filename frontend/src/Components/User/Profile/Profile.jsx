import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "../../../Axios/Axios";
import { useNavigate, Link } from "react-router-dom";
import { message } from "antd";

function Profile() {
  const [disabled, setDisabled] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    mobile: "",
  });

  const handleDisable = () => {
    setDisabled(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/editUser", formValues, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        message.success(response.data.message);
        setDisabled(false);
        localStorage.setItem("otpToken", response.data.data.token);
        navigate("/otp", {
          state: {
            id: response.data.data.id,
            email: response.data.data.email,
            token: response.data.data.token,
          },
        });
      })
      .catch((error) => {
        if (!error.response.data.token) {
          navigate("/login");
        }
      });
  };
  useEffect(() => {
    axios
      .get("/userDetails", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setFormValues(response.data.user);
      })
      .catch((error) => {
        if (error.response.blocked) {
          navigate("/login");
          message.error("You have been Blocked");
        } else if (!error.response.data.token) {
          navigate("/login");
        }
      });
  }, []);
  return (
    <div className="container mt-5 mb-5" id="userProfile">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <ul className="list-group list-group-flush align-items-center">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Link to="/donate" className="text-decoration-none">
                      <h6 className="mb-0">Donate Pets</h6>
                    </Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Link to="/donatedPets" className="text-decoration-none">
                      <h6 className="mb-0">View Donted Pets</h6>
                    </Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Link to="/applications" className="text-decoration-none">
                      <h6 className="mb-0">Applications</h6>
                    </Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Link
                      to="/applicationStatus"
                      className="text-decoration-none"
                    >
                      <h6 className="mb-0">Application Status</h6>
                    </Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <Link
                      to="/appointmentDetails"
                      className="text-decoration-none"
                    >
                      <h6 className="mb-0">Appointments</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8" id="userDetails">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">User Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      disabled={disabled ? false : true}
                      type="text"
                      name="userName"
                      className="form-control"
                      value={formValues.userName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      disabled={disabled ? false : true}
                      type="text"
                      name="email"
                      className="form-control"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      name="mobile"
                      disabled={disabled ? false : true}
                      className="form-control"
                      value={formValues.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    {disabled ? (
                      <button
                        type="submit"
                        className="btn btn-primary px-4"
                        style={{
                          backgroundColor: "#354b60",
                          color: "#fff",
                        }}
                        onClick={handleSubmit}
                      >
                        Edit Profile
                      </button>
                    ) : (
                      <input
                        type="submit"
                        className="btn btn-primary px-4"
                        style={{
                          backgroundColor: "#354b60",
                          color: "#fff",
                        }}
                        onClick={handleDisable}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
