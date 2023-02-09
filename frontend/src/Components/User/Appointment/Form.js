import React, { useState } from "react";
import "./Form.css";
import validate from "./Validation";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";

function Form() {
  const initialValues = {
    name: "",
    petName: "",
    email: "",
    mobile: "",
    petDetails: "",
    date: "",
    time: "",
  };
  const token = localStorage.getItem("token");
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();
  const [error, setErrors] = useState({});
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    const errors = validate(formValues);
    if (Object.keys(errors).length != 0) {
      setErrors(errors);
    } else {
      axios
        .post("/appointment", formValues, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response.data);
          navigate("/login");
        });
    }
  };
  return (
    <div className="container mt-5">
      <div className="appointment-form">
        <form onSubmit={handleSubmit} id="main-form">
          <div className="form-group">
            <label htmlFor="first-name" className="label">
              Name
            </label>
            <input
              type="text"
              id="first-name"
              name="name"
              value={formValues.name}
              onChange={onChangeHandle}
              className="form-control"
            />
          </div>
          <p className="error">{error.name}</p>
          <div className="form-group">
            <label htmlFor="pet-name" className="label">
              Pet Name
            </label>
            <input
              type="text"
              id="pet-name"
              name="petName"
              value={formValues.petName}
              onChange={onChangeHandle}
              className="form-control"
            />
          </div>
          <p className="error">{error.petName}</p>
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={onChangeHandle}
              className="form-control"
            />
          </div>
          <p className="error">{error.email}</p>
          <div className="form-group">
            <label htmlFor="mobile" className="label">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formValues.mobile}
              onChange={onChangeHandle}
              className="form-control"
            />
          </div>
          <p className="error">{error.mobile}</p>
          <div className="form-group">
            <label htmlFor="pet-details" className="label">
              Pet Details
            </label>
            <textarea
              id="pet-details"
              className="form-control"
              rows="5"
              name="petDetails"
              value={formValues.petDetails}
              onChange={onChangeHandle}
            ></textarea>
            <p className="error">{error.petDetails}</p>
          </div>
          <label htmlFor="appointment-date" className="label">
            Appointment Date:
          </label>
          <input
            type="date"
            id="appointment-date"
            name="date"
            value={formValues.date}
            onChange={onChangeHandle}
          />
          <p className="error">{error.date}</p>
          <div className="form-group">
            <label htmlFor="appointmentTime" className="label">
              Appointment Time
            </label>
            <select
              className="form-control"
              onChange={onChangeHandle}
              id="appointmentTime"
              name="time"
            >
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
            </select>
          </div>
          <p className="error">{error.time}</p>
          <div className="mt-5 mb-5">
            <button className="btn btn-primary" id="button">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
