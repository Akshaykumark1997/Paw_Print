import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import "./ViewAppointment.css";

function ViewAppointments() {
  const [appointment, setAppointment] = useState([]);
  const [employee, setEmployee] = useState([]);
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/admin/appointments", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setAppointment(response.data.appointments);
        setEmployee(response.data.employees);
      })
      .catch(() => {
        navigate("/admin");
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-item-center">
        <div>
          <h1>Appointments</h1>
        </div>
        <div className="align-self-center">
          <NavLink to="/admin/addGrooming">
            <button
              className="btn"
              style={{ backgroundColor: "#354b60", color: "#fff" }}
            >
              Add Services
            </button>
          </NavLink>
        </div>
      </div>

      <div className="table-responsive mt-5">
        <table
          className="table text-start align-middle table-bordered table-hover mb-0"
          id="table"
        >
          <thead>
            <tr>
              <th className="text-center">Sl.No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Pet Name</th>
              <th className="text-center">Mobile</th>
              <th className="text-center">Pet Details</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Employee</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((obj, index) => {
              return (
                <tr key={obj._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{obj.name}</td>
                  <td className="text-center">{obj.petName}</td>
                  <td className="text-center">{obj.mobile}</td>
                  <td className="text-center" style={{ width: "200px" }}>
                    <div
                      style={{
                        height: "80px",
                        overflowY: "scroll",
                      }}
                    >
                      {obj.petDetails}
                    </div>
                  </td>
                  <td className="text-center">{obj.date}</td>
                  <td className="text-center">{obj.time}</td>
                  <td className="text-center">
                    <select id="select">
                      {employee.map((employee) => {
                        return (
                          <option value="option2" key={employee._id}>
                            {employee.firstName + employee.lastName}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAppointments;
