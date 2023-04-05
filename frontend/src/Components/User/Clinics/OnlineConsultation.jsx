import React, { useState } from "react";
import "./OnlineConsultation.css";
import validate from "./Validation";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useRazorpay from "react-razorpay";
import { message } from "antd";
import { razorpayId } from "../../../Constance/Constance";

function OnlineConsultation() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const Razorpay = useRazorpay();
  const [show, setShow] = useState(false);
  const minDate = new Date().toISOString().slice(0, 10);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    petName: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    service: "",
  });
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
        .then((res) => {
          console.log(res.data);
          const options = {
            key: razorpayId,
            amount: "50000",
            currency: "INR",
            name: "Paw Print",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: res.data.id,
            handler: function (response) {
              verifyPayment(response, res.data);
            },
            prefill: {
              name: "Paw Print",
              email: "pawprint@gmail.com",
              contact: "9999999999",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          const rzp1 = new Razorpay(options);

          rzp1.on("payment.failed", function () {
            message.error("payment failed");
            setFormValues({
              name: "",
              petName: "",
              email: "",
              mobile: "",
              date: "",
              time: "",
              service: "",
            });
            setShow(false);
          });

          rzp1.open();
        })
        .catch((err) => {
          console.log(err);
          if (!error.response.data.token) {
            navigate("/login");
          }
        });
    }
  };
  const verifyPayment = (payment, details) => {
    axios
      .post(
        "/verifyPayment",
        { payment, details },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data.message);
        message.success("payment completed successfully");
        setFormValues({
          name: "",
          petName: "",
          email: "",
          mobile: "",
          date: "",
          time: "",
          service: "",
        });
        navigate("/clinics");
      })
      .catch(() => {
        message.error("Payment failed");
        setFormValues({
          name: "",
          petName: "",
          email: "",
          mobile: "",
          date: "",
          time: "",
          service: "",
        });
        navigate("/clinics");
      });
  };
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
          <Button
            className="mt-5"
            variant="primary"
            onClick={handleShow}
            style={{
              backgroundColor: "#354b60",
              color: "#fff",
            }}
          >
            Book Appointment
          </Button>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Make Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                  <label htmlFor="name">Service</label>
                  <select
                    className="form-control"
                    id="appointmentTime"
                    name="service"
                    onChange={onChangeHandle}
                  >
                    <option></option>
                    <option>Online Consultation</option>
                  </select>
                  <p className="error">{error.service}</p>
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
                <div className="d-flex justify-content-end">
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    className="mx-2"
                    style={{ backgroundColor: "#354b60", color: "#fff" }}
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default OnlineConsultation;
