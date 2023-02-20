import React, { useState, useEffect } from "react";
import axios from "../../../Axios/Axios";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const initialValues = {
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post("/register", {
          userName: formValues.userName,
          email: formValues.email,
          mobile: formValues.mobile,
          password: formValues.password,
          confirmPassword: formValues.confirmPassword,
        })
        .then(function (response) {
          if (response.data.success) {
            console.log("registerd");
            localStorage.setItem("otpToken", response.data.data.token);
            navigate("/otp", {
              state: {
                id: response.data.data.id,
                email: response.data.data.email,
                token: response.data.data.token,
              },
            });
          }
        })
        .catch(function (error) {
          setFormErrors(error.response.data);
        });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.userName) {
      errors.userName = "Username is required";
    } else if (!/^[A-Za-z\s]*$/.test(values.userName)) {
      errors.userName = "Username should only contain alphabets and space";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "password is should atleast contain 4 characters";
    } else if (values.password.length >= 10) {
      errors.password = "password is should exceed 10 characters";
    }
    if (!values.mobile) {
      errors.mobile = "mobile number is required";
    }
    // else if (values.mobile.length !== 10) {
    //   errors.mobile = "Invalid mobile number";
    // }
    if (!values.email) {
      errors.email = "email is required";
    } else if (
      !String(values.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  return (
    <div>
      <div>
        <section>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign Up</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="username"
                          id="username"
                          name="userName"
                          className="form-control form-control-lg"
                          value={formValues.userName}
                          onChange={onChangeHandle}
                        />
                        <label className="form-label" htmlFor="typeEmailX-2">
                          User Name
                        </label>
                      </div>
                      <p className="error">{formErrors.userName}</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          value={formValues.email}
                          onChange={onChangeHandle}
                        />
                        <label className="form-label" htmlFor="typePasswordX-2">
                          Email
                        </label>
                      </div>
                      <p className="error">{formErrors.email}</p>
                      <div className="form-outline mb-4">
                        <input
                          type="mobile"
                          id="mobile"
                          name="mobile"
                          className="form-control form-control-lg"
                          value={formValues.mobile}
                          onChange={onChangeHandle}
                        />
                        <label className="form-label" htmlFor="typeEmailX-2">
                          Mobile
                        </label>
                      </div>
                      <p className="error">{formErrors.mobile}</p>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          value={formValues.password}
                          onChange={onChangeHandle}
                        />
                        <label className="form-label" htmlFor="typeEmailX-2">
                          Password
                        </label>
                      </div>
                      <p className="error">{formErrors.password}</p>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="form-control form-control-lg"
                          value={formValues.confirmPassword}
                          onChange={onChangeHandle}
                        />
                        <label className="form-label" htmlFor="typeEmailX-2">
                          Confirm Password
                        </label>
                      </div>
                      <p className="error">{formErrors.confirmPassword}</p>
                      <button
                        className="btn btn-primary btn-lg btn-block"
                        style={{ backgroundColor: "#354b60", color: "#fff" }}
                        type="submit"
                      >
                        Sign Up
                      </button>

                      <hr className="my-4" />

                      {/* <button
                        className="btn btn-lg btn-block"
                        style={{ backgroundColor: "#354b60", color: "#fff" }}
                        type="submit"
                      >
                        Sign up with google
                      </button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
