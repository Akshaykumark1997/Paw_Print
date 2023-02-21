import React, { useState } from "react";
import axois from "../../../Axios/Axios";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    axois
      .post("/employee/login", formValues)
      .then((response) => {
        console.log(response);
        localStorage.setItem("employeeToken", response.data.token);
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="../../../../Images/employee_login.jpg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                />
                {errors && <p style={{ color: "red" }}>{errors.email}</p>}
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                />
                {errors && <p style={{ color: "red" }}>{errors.password}</p>}
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
