import React, { useEffect, useState } from "react";
import "./Appointment.css";
import validate from "./Validation";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import { message } from "antd";
import { razorpayId } from "../../../Constance/Constance";
import { useLocation } from "react-router-dom";

function AppointmentForm() {
  const location = useLocation();
  const Razorpay = useRazorpay();
  const token = localStorage.getItem("token");
  const minDate = new Date().toISOString().slice(0, 10);
  const [service, setService] = useState({});
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [error, setErrors] = useState({});
  const [allService, setAllService] = useState([]);
  const [employee, setEmployee] = useState([]);
  const initialValues = {
    name: "",
    petName: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    service: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
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
            navigate("/appointment");
          });

          rzp1.open();
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
        navigate("/appointment");
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
        navigate("/appointment");
      });
  };
  const initialTimes = [
    "9:00 AM - 11:00 AM",
    "10:00 AM - 12:00 PM",
    "11:00 AM - 1:00 PM",
    "2:00 PM - 4:00 PM",
    "3:00 PM - 5:00 PM",
  ];
  const [availableAppointmentTimes, setAvailableAppointmentTimes] =
    useState(initialTimes);
  const onChangeHandleDate = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    employee.some((item) => {
      item.dates.some((date) => {
        if (date._id.date === event.target.value) {
          setAvailableAppointmentTimes(
            availableAppointmentTimes.filter((item) => {
              return item !== date._id.time;
            })
          );
        } else {
          setAvailableAppointmentTimes(initialTimes);
        }
      });
    });
  };
  useEffect(() => {
    console.log(location.state.id);
    axios
      .get(`/serviceDetails/${location.state.id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setService(response.data.service);
        setImage(response.data.service.image.path);
        setEmployee(response.data.employee);
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
  }, []);
  useEffect(() => {
    if (service.name) {
      axios
        .get("/services", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(employee);
          setAllService(response.data.services);
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
  }, [service]);
  return (
    <div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#354b60" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h1 className="text-white">{service.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="appointment-section mt-5">
        <div className="container">
          <div className="row align-items-center ms-2">
            <div className="col-md-6">
              <img src={image} alt="Left Image" className="img-fluid" />
            </div>
            <div className="col-md-6 mt-4">
              <div className="row">
                <h2 className="text-center ">Make Appointment</h2>
                <div className="col-lg-8 offset-lg-2">
                  <form onSubmit={handleSubmit} className="mx-auto">
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
                        <option>Select Service</option>
                        {allService.map((obj) => {
                          return <option key={obj._id}>{obj.name}</option>;
                        })}
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
                    <div className="row  mb-3 mx-auto">
                      <div className="col-sm-6 form-group">
                        <label htmlFor="date">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          name="date"
                          min={minDate}
                          value={formValues.date}
                          onChange={onChangeHandleDate}
                        />
                        <p className="error">{error.date}</p>
                      </div>
                      <div className="col-sm-6 form-group ">
                        <label htmlFor="time">Time</label>
                        <select
                          className="form-control"
                          id="appointmentTime"
                          name="time"
                          onChange={onChangeHandle}
                        >
                          {availableAppointmentTimes.map((time) => (
                            <option key={time}>{time}</option>
                          ))}
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
        <h1>About</h1>
        <p className="lead text-center container">{service.description}</p>
      </div>
    </div>
  );
}
export default AppointmentForm;
