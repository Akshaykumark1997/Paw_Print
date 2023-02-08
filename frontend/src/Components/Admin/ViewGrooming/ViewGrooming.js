import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import "./Grooming.css";

function ViewGrooming() {
  const [service, setService] = useState([]);
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/admin/services", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data.services);
        setService(response.data.services);
        console.log(service);
      })
      .catch((error) => {
        console.log(error.response.data);
        navigate("/admin");
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-item-center">
        <div>
          <h1>Grooming Services</h1>
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
              <th className="text-center">Id</th>
              <th className="text-center">Image</th>
              <th className="text-center">Name</th>
              <th className="text-center">Premium Amount</th>
              <th className="text-center">Standard Amount</th>
              <th className="text-center">Description</th>
            </tr>
          </thead>
          <tbody>
            {service.map((obj) => {
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
                  <td className="text-center">{obj.name}</td>
                  <td className="text-center">{obj.standardPrice}</td>
                  <td className="text-center">{obj.premiumPrice}</td>
                  <td className="text-center">
                    <div style={{ height: "100px", overflowY: "scroll" }}>
                      {obj.description}
                    </div>
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

export default ViewGrooming;
