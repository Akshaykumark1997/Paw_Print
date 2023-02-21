import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Grooming.css";
import Swal from "sweetalert2";

function ViewGrooming() {
  const [service, setService] = useState([]);
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
  const handleDelete = (id) => {
    console.log("delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`/admin/deleteService/${id}`, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            console.log(response);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            // location.reload();
          });
      }
    });
  };
  useEffect(() => {
    axios
      .get("/admin/services", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      })
      .then((response) => {
        setService(response.data.services);
      })
      .catch(() => {
        navigate("/admin");
      });
  }, [service]);
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
              <th className="text-center">Sl.No</th>
              <th className="text-center">Image</th>
              <th className="text-center">Name</th>
              <th className="text-center">Premium Amount</th>
              <th className="text-center">Standard Amount</th>
              <th className="text-center">Description</th>
              <th className="text-center">Options</th>
            </tr>
          </thead>
          <tbody>
            {service.map((obj, index) => {
              return (
                <tr key={obj._id}>
                  <td className="text-center">{index + 1}</td>
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
                  <td className="text-center" style={{ width: "300px" }}>
                    <div
                      style={{
                        height: "100px",
                        overflowY: "scroll",
                      }}
                    >
                      {obj.description}
                    </div>
                  </td>
                  <td className="text-center">
                    <Link to="/admin/editGrooming" state={{ id: obj._id }}>
                      <button className="btn  mx-1">
                        <img
                          src="../../../../Images/edit.svg"
                          style={{ width: "1rem" }}
                          alt=""
                        />
                      </button>
                    </Link>
                    <button
                      className="btn"
                      onClick={() => handleDelete(obj._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                      </svg>
                    </button>
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
