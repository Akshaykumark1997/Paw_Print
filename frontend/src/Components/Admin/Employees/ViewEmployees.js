import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";

function ViewEmployees() {
  const [employee, setEmployee] = useState([]);
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/admin/employees", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setEmployee(response.data.employees);
      })
      .catch((error) => {
        console.log(error.response.data);
        navigate("/admin");
      });
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-item-center">
          <div>
            <h1>Grooming Services</h1>
          </div>
          <div className="align-self-center">
            <NavLink to="/admin/addEmployee">
              <button
                className="btn"
                style={{ backgroundColor: "#354b60", color: "#fff" }}
              >
                Add Employee
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
                <th className="text-center">Id</th>
                <th className="text-center">Image</th>
                <th className="text-center">Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Position</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((obj) => {
                return (
                  <tr key={obj._id}>
                    <td className="text-center">{obj._id}</td>
                    <td className="text-center">
                      <img
                        src={obj.image.path}
                        alt="image"
                        style={{ width: "5rem" }}
                      />
                    </td>
                    <td className="text-center">
                      {obj.firstName + obj.lastName}
                    </td>
                    <td className="text-center">{obj.email}</td>
                    <td className="text-center">{obj.position}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployees;
