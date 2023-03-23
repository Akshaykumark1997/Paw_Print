import React, { useLayoutEffect, useState } from "react";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();
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
      .post("/admin", formValues)
      .then((response) => {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin/employees");
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  };
  useLayoutEffect(() => {
    axios
      .get("/admin/check", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.data.token) {
          navigate("/admin/employees");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <div>
      <section className="bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="px-5 ms-xl-4">
              <i className="me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
              <span className="h1 fw-bold mb-0" style={{ color: "#354b60" }}>
                Admin
              </span>
            </div>
          </nav>
        </div>
      </section>
      <section>
        <div className="container py-5 h-100 mt-5">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-12 col-lg-4">
              <img
                src="../../../../Images/pet2.jpg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-12 col-lg-4 offset-xl-1 mt-5">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    id="form1Example13"
                    value={formValues.email}
                    onChange={onChangeHandle}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="password"
                    id="form1Example23"
                    value={formValues.password}
                    onChange={onChangeHandle}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                  <p style={{ color: "red" }}>{errors.password}</p>
                </div>
                <button
                  type="submit"
                  value="login"
                  className="btn btn-lg btn-block"
                  style={{ backgroundColor: "#354b60", color: "#fff" }}
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
