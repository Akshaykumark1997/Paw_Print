import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import validate from "./Validation";

function EditGrooming() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    standardPrice: "",
    premiumPrice: "",
    description: "",
    image: null,
  });
  const [error, setError] = useState({});
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
    data.append("id", formValues._id);
    data.append("name", formValues.name);
    data.append("standardPrice", formValues.standardPrice);
    data.append("premiumPrice", formValues.premiumPrice);
    data.append("description", formValues.description);
    data.append("image", formValues.image);
    const errors = validate(formValues);
    if (Object.keys(errors).length != 0) {
      setError(errors);
    } else {
      axios
        .post("/admin/editService", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        })
        .then(() => {
          navigate("/admin/grooming");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    axios
      .get(`/admin/editService/${location.state.id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setFormValues(response.data.service);
      })
      .catch((error) => {
        console.log(error);
        navigate("/admin");
      });
  }, []);
  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-9">
              <h2 className="mb-4">Edit Service</h2>
              <form onSubmit={handleSubmit}>
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Name</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          name="name"
                          value={formValues.name}
                          onChange={onChangeHandle}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p className="error">{error.name}</p>
                    </div>

                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Price Standard</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="tel"
                          name="standardPrice"
                          value={formValues.standardPrice}
                          onChange={onChangeHandle}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p className="error">{error.standardPrice}</p>
                    </div>

                    <hr className="mx-n3" />
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Price Premium</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="tel"
                          name="premiumPrice"
                          value={formValues.premiumPrice}
                          onChange={onChangeHandle}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p className="error">{error.premiumPrice}</p>
                    </div>

                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Description</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <textarea
                          className="form-control"
                          name="description"
                          value={formValues.description}
                          onChange={onChangeHandle}
                          rows="3"
                        ></textarea>
                        <p className="error">{error.description}</p>
                      </div>
                    </div>

                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Image</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          className="form-control form-control-lg"
                          id="formFileLg"
                          type="file"
                          name="image"
                          onChange={handleFileChange}
                        />
                      </div>
                      <p className="error">{error.image}</p>
                    </div>

                    <hr className="mx-n3" />

                    <div className="px-5 py-4">
                      <button
                        type="submit"
                        className="btn btn-lg"
                        style={{ backgroundColor: "#354b60", color: "#fff" }}
                      >
                        Add Service
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditGrooming;
