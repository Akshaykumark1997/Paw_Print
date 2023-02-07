import React, { useState } from "react";
import axios from "../../../Axios/Axios";
import validate from "./Validation";

function AddEmployee() {
  const token = localStorage.getItem("adminToken");
  const initialValues = {
    firstName: "",
    lastName: "",
    position: "",
    genter: "",
    email: "",
    mobile: "",
    image: null,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [error, setErrors] = useState({});
  const handleFileChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.files[0],
    });
  };
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log(formValues);

    data.append("firstName", formValues.firstName);
    data.append("lastName", formValues.lastName);
    data.append("position", formValues.position);
    data.append("genter", formValues.genter);
    data.append("email", formValues.email);
    data.append("mobile", formValues.mobile);
    data.append("image", formValues.image);

    const errors = validate(formValues);
    console.log(errors);
    if (Object.keys(errors).length != 0) {
      setErrors(errors);
    } else {
      console.log(data);
      console.log(token);
      axios
        .post("/admin/addEmployee", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                          <p className="error">{error.firstName}</p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                          <p className="error">{error.lastName}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="position"
                            name="position"
                            value={formValues.position}
                            onChange={onChangeHandle}
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Position
                          </label>
                          <p className="error">{error.position}</p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="femaleGender"
                            value="female"
                            name="genter"
                            onChange={onChangeHandle}
                            checked={formValues === "female"}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="maleGender"
                            value="male"
                            name="genter"
                            onChange={onChangeHandle}
                            checked={formValues === "male"}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="otherGender"
                            value="other"
                            name="genter"
                            onChange={onChangeHandle}
                            checked={formValues === "other"}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                        <p className="error">{error.genter}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            name="email"
                            value={formValues.email}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                          <p className="error">{error.email}</p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="mobile"
                            value={formValues.mobile}
                            onChange={onChangeHandle}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                          <p className="error">{error.mobile}</p>
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

export default AddEmployee;
