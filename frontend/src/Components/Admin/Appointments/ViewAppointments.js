import React, { useState, useEffect } from "react";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import "./ViewAppointment.css";
import { message } from "antd";

function ViewAppointments() {
  const [appointment, setAppointment] = useState([]);
  const [employee, setEmployee] = useState([]);
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();

  const handleEmployee = (e, id) => {
    axios
      .get(`/admin/employeeAssign/${id}/${e.target.value}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        message.success(response.data.message);
      })
      .catch((error) => {
        if (error.response.data.message === "invalid token") {
          navigate("/admin");
        }
      });
  };
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
      .catch((error) => {
        if (!error.response.data.token) {
          navigate("/admin");
        }
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-item-center">
        <div>
          <h1>Appointments</h1>
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
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Service</th>
              <th className="text-center">employeeStatus</th>
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
                  <td className="text-center">{obj.date}</td>
                  <td className="text-center">{obj.time}</td>
                  <td className="text-center">{obj.service}</td>
                  <td className="text-center">{obj.employeeStatus}</td>
                  <td className="text-center">
                    <select
                      id="select"
                      disabled={
                        obj.employeeStatus === "Confirm" ||
                        obj.employeeStatus === "Cancelled"
                          ? true
                          : false
                      }
                      onChange={(e) => handleEmployee(e, obj._id)}
                    >
                      {employee.map((employee) => {
                        return (
                          <option
                            selected={
                              obj.employee == employee._id ? true : false
                            }
                            value={employee._id}
                            key={employee._id}
                          >
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
