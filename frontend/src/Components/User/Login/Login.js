import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", {
        email: formValues.email,
        password: formValues.password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrors(error.response.data);
      });
  };
  return (
    <div>
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <form onSubmit={handleSubmit}>
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChangeHandle}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Email
                      </label>
                      {errors && <p style={{ color: "red" }}>{errors.email}</p>}
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={onChangeHandle}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                      </label>
                      {errors && (
                        <p style={{ color: "red" }}>{errors.password}</p>
                      )}
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#354b60", color: "#fff" }}
                      type="submit"
                    >
                      Login
                    </button>

                    <hr className="my-4" />

                    {/* <button
                    className="btn btn-lg btn-block"
                    style={{ backgroundColor: "#354b60", color: "#fff" }}
                    type="submit"
                  >
                    Sign in with google
                  </button> */}
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
