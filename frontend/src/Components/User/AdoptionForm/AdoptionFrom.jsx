import React, { useState } from "react";
import "./AdoptionFrom.css";
import Validate from "./Validation";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../../Axios/Axios";
import { message } from "antd";

function AdoptionFrom() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    houseName: "",
    streetName: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    petName: "",
    pet: "",
    breed: "",
    description: "",
    petId: location.state.id,
    userId: location.state.userId,
  });
  const [error, setError] = useState({});
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Validate(formValues);
    if (Object.keys(errors).length != 0) {
      setError(errors);
    } else {
      axios
        .post("/adoption", formValues, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          navigate("/pets");
        })
        .catch((error) => {
          if (error.response.blocked) {
            navigate("/login");
            message.error("You have been Blocked");
          } else if (!error.response.data.token) {
            navigate("/login");
          } else if (!error.response.data.success) {
            message.error("!Ooops something went wrong");
          }
        });
    }
  };
  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <p id="adoptionHeadings">Perspective Pet Parent</p>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <p className="error">{error.firstName}</p>
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <p className="error">{error.lastName}</p>
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="mobile"
                            id="mobile"
                            name="mobile"
                            value={formValues.mobile}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <p className="error">{error.mobile}</p>
                          <label className="form-label" htmlFor="emailAddress">
                            Mobile
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={onChangeHandle}
                          />
                          <p className="error">{error.email}</p>
                          <label htmlFor="birthdayDate" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>
                    <p id="adoptionHeadings">Address</p>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="houseName"
                            id="houseName"
                            name="houseName"
                            value={formValues.houseName}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <p className="error">{error.houseName}</p>
                          <label className="form-label" htmlFor="emailAddress">
                            House Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="streetName"
                            name="streetName"
                            value={formValues.streetName}
                            onChange={onChangeHandle}
                          />
                          <p className="error">{error.streetName}</p>
                          <label htmlFor="birthdayDate" className="form-label">
                            Street Name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="city"
                            id="city"
                            name="city"
                            value={formValues.city}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <p className="error">{error.city}</p>
                          <label className="form-label" htmlFor="emailAddress">
                            City
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="state"
                            name="state"
                            value={formValues.state}
                            onChange={onChangeHandle}
                          />
                          <p className="error">{error.state}</p>
                          <label htmlFor="birthdayDate" className="form-label">
                            State
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="country"
                            id="country"
                            name="country"
                            value={formValues.country}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <p className="error">{error.country}</p>
                          <label className="form-label" htmlFor="emailAddress">
                            Country
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="pincode"
                            name="pincode"
                            value={formValues.pincode}
                            onChange={onChangeHandle}
                          />
                          <p className="error">{error.pincode}</p>
                          <label htmlFor="birthdayDate" className="form-label">
                            Pincode
                          </label>
                        </div>
                      </div>
                    </div>
                    <p id="adoptionHeadings">Name of Pet You Wish to Adopt</p>
                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="petName"
                            name="petName"
                            value={formValues.petName}
                            onChange={onChangeHandle}
                          />
                          <p className="error">{error.petName}</p>
                        </div>
                      </div>
                    </div>
                    <p id="adoptionHeadings">Do you own any pets?</p>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="pet"
                            id="pet"
                            name="pet"
                            value={formValues.pet}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <p className="error">{error.pet}</p>
                          <label className="form-label" htmlFor="emailAddress">
                            Pet Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="breed"
                            name="breed"
                            value={formValues.breed}
                            onChange={onChangeHandle}
                          />
                          <p className="error">{error.breed}</p>
                          <label htmlFor="birthdayDate" className="form-label">
                            Breed
                          </label>
                        </div>
                      </div>
                    </div>
                    <p id="adoptionHeadings">
                      Pets Behaviour towards other pets
                    </p>
                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="description"
                            name="description"
                            value={formValues.description}
                            onChange={onChangeHandle}
                          />
                          <p className="error">{error.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdoptionFrom;
