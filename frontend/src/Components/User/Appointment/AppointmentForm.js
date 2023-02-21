import React, { useState } from "react";
import "./Appointment.css";
import validate from "./Validation";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
  const initialValues = {
    name: "",
    petName: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
  };
  const token = localStorage.getItem("token");
  const minDate = new Date().toISOString().slice(0, 10);
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
          location.reload();
        })
        .catch((err) => {
          console.log(err.response.data);
          navigate("/login");
        });
    }
  };
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
      <section className="appointment-section mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="../../../../Images/b-2.jpg"
                alt="Left Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div className="row">
                <h2 className="text-center mb-4">My Form Heading</h2>
                <div className="col-lg-8 offset-lg-2">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={onChangeHandle}
                      />
                      <p className="error">{error.name}</p>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="pet-name">Pet Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="pet-name"
                        name="petName"
                        value={formValues.petName}
                        onChange={onChangeHandle}
                      />
                      <p className="error">{error.petName}</p>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChangeHandle}
                      />
                      <p className="error">{error.email}</p>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="mobile">Mobile</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={formValues.mobile}
                        onChange={onChangeHandle}
                      />
                    </div>
                    <p className="error">{error.mobile}</p>
                    <div className="row mb-3">
                      <div className="col-sm-6">
                        <label htmlFor="date">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          name="date"
                          min={minDate}
                          value={formValues.date}
                          onChange={onChangeHandle}
                        />
                        <p className="error">{error.date}</p>
                      </div>
                      <div className="col-sm-6">
                        <label htmlFor="time">Time</label>
                        <select
                          className="form-control"
                          id="appointmentTime"
                          name="time"
                          onChange={onChangeHandle}
                        >
                          <option>9:00 AM - 11:00 AM</option>
                          <option>10:00 AM - 12:00 PM</option>
                          <option>11:00 AM - 1:00 PM</option>
                          <option>2:00 PM - 4:00 PM</option>
                          <option>3:00 PM - 5:00 PM</option>
                        </select>
                        <p className="error">{error.time}</p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#354b60", color: "#fff" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-lg-10 offset-lg-1  my-5">
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
export default AppointmentForm;
