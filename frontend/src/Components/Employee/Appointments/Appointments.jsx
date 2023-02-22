import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("employeeToken");
    axios
      .get("/employee/appointments", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setAppointments(response.data.appointments);
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
              <th className="text-center">Email</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((obj, index) => {
              return (
                <tr key={obj._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{obj.name}</td>
                  <td className="text-center">{obj.petName}</td>
                  <td className="text-center">{obj.email}</td>
                  <td className="text-center">{obj.date}</td>
                  <td className="text-center">{obj.time}</td>
                  <td className="text-center">
                    <select id="select">
                      {/* {employee.map((employee) => {
                        return (
                          <option value="option2" key={employee._id}>
                            {employee.firstName + employee.lastName}
                          </option>
                        );
                      })} */}
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

export default Appointments;
