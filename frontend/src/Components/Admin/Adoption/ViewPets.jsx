import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";

function ViewPets() {
  const token = localStorage.getItem("adminToken");
  const [donations, setDonations] = useState([]);
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
      });
  });
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
              <th className="text-center">Image</th>
              <th className="text-center">Pet Name</th>
              <th className="text-center">Age</th>
              <th className="text-center">Breed</th>
              <th className="text-center">Vaccinated</th>
              <th className="text-center">Description</th>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewPets;
