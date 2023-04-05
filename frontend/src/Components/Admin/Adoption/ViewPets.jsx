import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ViewPets() {
  const token = localStorage.getItem("adminToken");
  const [donations, setDonations] = useState([]);
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
          .delete(`/admin/deleteAdoption/${id}`, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            console.log(response);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
  useEffect(() => {
    axios
      .get("/admin/getAdoption", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDonations(response.data.donations);
      })
      .catch((error) => {
        if (!error.response.data.token) {
          navigate("/admin");
        }
      });
  }, [donations]);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-item-center">
        <div>
          <h1>Pets</h1>
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
              <th className="text-center">Pet Name</th>
              <th className="text-center">Age</th>
              <th className="text-center">Breed</th>
              <th className="text-center">Vaccinated</th>
              <th className="text-center">Description</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((obj, index) => {
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
                  <td className="text-center">{obj.petName}</td>
                  <td className="text-center">{obj.age}</td>
                  <td className="text-center">{obj.breed}</td>
                  <td className="text-center">{obj.vaccinated}</td>
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
                    <Link to="/admin/editAdoption" state={{ id: obj._id }}>
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
        {donations.length <= 0 && (
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

export default ViewPets;
