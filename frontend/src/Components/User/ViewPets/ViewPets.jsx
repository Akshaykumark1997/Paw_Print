import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";

function ViewPets() {
  const token = localStorage.getItem("token");
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("/pets", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setPets(response.data.donations);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#354b60" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h1 className="text-white">Pets</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {pets.map((obj) => {
              return (
                <div className="col mb-5" key={obj._id}>
                  <div className="card h-100">
                    <a className="text-decoration-none text-dark" href="">
                      <img
                        className="card-img-top"
                        src={obj.image.path}
                        style={{ height: "192px" }}
                        alt="..."
                      />
                    </a>
                    <div className="card-body p-4">
                      <div className="text-center">
                        <a className="text-decoration-none text-dark" href="">
                          <h5 className="fw-bolder"> {obj.petName} </h5>
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <p className="fw-bolder">Breed: {obj.breed}</p>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="fw-bolder">Age: {obj.age} Months</h5>
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a href="">
                          <button className="btn btn-outline-dark mt-auto">
                            view Details
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewPets;
