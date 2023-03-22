import React, { useState, useEffect } from "react";
import axios from "../../../Axios/Axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Users() {
  const token = localStorage.getItem("adminToken");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleBlock = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Block!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`/admin/block/${id}`, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            navigate("/admin/users");
            message.success(response.data.message);
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    });
  };
  const handleUnBlock = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Unblock!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`/admin/unBlock/${id}`, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            navigate("/admin/users");
            message.success(response.data.message);
          })
          .catch((error) => {
            if (!error.response.data.token) {
              navigate("/admin");
            }
          });
      }
    });
  };
  useEffect(() => {
    axios
      .get("/admin/users", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [users]);
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
              <th className="text-center">User Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Mobile</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((obj, index) => {
              return (
                <tr key={obj._id}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{obj.userName}</td>
                  <td className="text-center">{obj.email}</td>
                  <td className="text-center">{obj.mobile}</td>
                  <td className="text-center">
                    {obj.blocked ? (
                      <button
                        className="btn btn-success"
                        onClick={() => handleUnBlock(obj._id)}
                      >
                        unblock
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => handleBlock(obj._id)}
                      >
                        block
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {users.length <= 0 && (
          <>
            <div className="d-flex justify-content-center mt-4">
              <h5 className="text-center">No data to show</h5>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Users;
