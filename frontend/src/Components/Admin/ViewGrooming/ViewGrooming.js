import React from "react";
import { NavLink } from "react-router-dom";

function ViewGrooming() {
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
              <th className="text-center">Name</th>
              <th className="text-center">Premium Amount</th>
              <th className="text-center">Standard Amount</th>
              <th className="text-center">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">hh</td>
              <td className="text-center">hh</td>
              <td className="text-center">hh</td>
              <td className="text-center">hh</td>
              <td className="text-center">hi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewGrooming;
