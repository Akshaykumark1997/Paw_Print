import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";

export default function AppointmentDetails() {
  const token = localStorage.getItem("token");
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    axios
      .get("/appointmentDetails", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setAppointments(response.data.appointments);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <div className="container mt-5">
      {appointments.map((obj) => {
        return (
          <div
            className="col-md-12 p-3"
            key={obj._id}
            style={{ border: "1px solid" }}
          >
            <div className="row">
              <div className="col-md-3 justify-content-center d-flex flex-column align-item-center">
                <div>
                  <b>Order Id: </b>
                  <br />#{obj._id}
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column">
                <b>Payment:</b>&nbsp;{obj.paymentStatus}
                <br />
                <b>Service:</b>
                {obj.service}
              </div>
              <div className="col-md-3 d-flex flex-column">
                <strong>Order Status: </strong>
                <small className="text-warning">{obj.employeeStatus}</small>
                {/* <br />
            <small className="text-danger">gh</small>
            <br />
            <small className="text-success">bb</small>
            <br /> */}
                <b>delivery expected: </b>
                {obj.date}
              </div>
              <div className="col-md-3 justify-content-center d-flex flex-row align-items-center">
                <button
                  type="button"
                  className="btn btn-danger btn-sm mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
