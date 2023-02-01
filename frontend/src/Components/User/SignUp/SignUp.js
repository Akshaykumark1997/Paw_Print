import React from "react";

function SignUp() {
  return (
    <div>
      <div>
        <section style={{ backgroundColor: "#508bfc;" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "1rem;" }}
                >
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign Up</h3>

                    <div className="form-outline mb-4">
                      <input
                        type="name"
                        id="name"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        User Name
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="mobile"
                        id="mobile"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Mobile
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Password
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="confirmPassword"
                        id="confirmPassword"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Confirm Password
                      </label>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#354b60", color: "#fff" }}
                      type="submit"
                    >
                      Sign Up
                    </button>

                    <hr className="my-4" />

                    <button
                      className="btn btn-lg btn-block"
                      style={{ backgroundColor: "#354b60", color: "#fff" }}
                      type="submit"
                    >
                      Sign up with google
                    </button>
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
