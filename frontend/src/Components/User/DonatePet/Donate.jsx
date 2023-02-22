import React, { useState } from "react";
import "./Donate.css";
import validate from "./Validation";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";

function Donate() {
  const [formValues, setFormValues] = useState({
    petName: "",
    age: "",
    breed: "",
    vaccinated: "",
    description: "",
    image: null,
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleFileChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.files[0],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("petName", formValues.petName);
    data.append("age", formValues.age);
    data.append("breed", formValues.breed);
    data.append("vaccinated", formValues.vaccinated);
    data.append("description", formValues.description);
    data.append("image", formValues.image);
    const errors = validate(formValues);
    if (Object.keys(errors).length != 0) {
      setError(errors);
    } else {
      axios
        .post("/donate", data, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          navigate("/profile");
        })
        .catch((error) => {
          if (!error.response.data.token) {
            navigate("/login");
          }
        });
    }
  };
  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Donate Pet</h3>
                  <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="petName"
                            name="petName"
                            value={formValues.petName}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="firstName">
                            Pet Name
                          </label>
                          <p className="error">{error.petName}</p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="age"
                            name="age"
                            value={formValues.age}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="lastName">
                            Age
                          </label>
                          <p className="error">{error.age}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="breed"
                            name="breed"
                            value={formValues.breed}
                            onChange={onChangeHandle}
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Breed
                          </label>
                          <p className="error">{error.breed}</p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Vaccinated: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="yes"
                            name="vaccinated"
                            onChange={onChangeHandle}
                            checked={formValues === "yes"}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Yes
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="no"
                            name="vaccinated"
                            onChange={onChangeHandle}
                            checked={formValues === "no"}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="vaccinated"
                          >
                            No
                          </label>
                        </div>
                        <p className="error">{error.vaccinated}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="">
                          <textarea
                            id="textArea"
                            name="description"
                            cols="60"
                            rows="5"
                            value={formValues.description}
                            onChange={onChangeHandle}
                            style={{}}
                          ></textarea>
                          <label className="form-label" htmlFor="phoneNumber">
                            Description
                          </label>
                          <p className="error">{error.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <input
                          className="form-control form-control-lg"
                          id="formFileLg"
                          type="file"
                          name="image"
                          onChange={handleFileChange}
                        />
                        <p className="error">{error.image}</p>
                        <label className="form-label select-label">Image</label>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
