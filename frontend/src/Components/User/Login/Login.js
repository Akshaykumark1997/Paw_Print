/* eslint-disable react/no-unescaped-entities */
import axios from "../../../Axios/Axios";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const token = localStorage.getItem("token");
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
      .post("/login", {
        email: formValues.email,
        password: formValues.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  };
  useLayoutEffect(() => {
    axios
      .get("/validateLogin", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.data.token) {
          navigate("/");
        }
      });
  }, []);
  return (
    <div>
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ms-2">
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
                    {errors && (
                      <p className="mt-2" style={{ color: "red" }}>
                        {errors.blocked}
                      </p>
                    )}
                    <hr className="my-4" />

                    <p className="btn btn-lg btn-block" type="submit">
                      Don't have an Account?{" "}
                      <Link
                        to="/signup"
                        className="text-decoration-none text-danger"
                      >
                        Sign up
                      </Link>
                    </p>
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
