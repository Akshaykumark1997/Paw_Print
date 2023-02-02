import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Otp() {
  const location = useLocation();
  console.log(location.state);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  console.log(otp);
  const otpSubmit = (e) => {
    console.log("function called");
    e.preventDefault();
    axios
      .post("http://localhost:8000/verifyOtp", {
        userId: location.state.userId,
        email: location.state.email,
        otp: otp,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <div>
      <section className="wrapper mt-5">
        <div className="container">
          <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 text-center rounded bg-white shadow p-5">
            <h3 className="text-dark fw-bolder fs-4 mb-2">
              Email Verification
            </h3>

            <div className="fw-normal text-muted mb-4">
              Enter the verification code we sent to your email
            </div>

            <div className="d-flex align-items-center justify-content-center fw-bold mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-asterisk"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
              {/* <span>{user && user.email.slice(-12)}</span> */}
            </div>
            <form onSubmit={otpSubmit}>
              <div className="otp_input text-start mb-2">
                <label htmlFor="digit">Type your 4 digit security code</label>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="otp"
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit_btn my-4">
                Submit
              </button>
            </form>
            <div className="fw-normal text-muted mb-2">
              Didn t get the code ?{" "}
              <p className="text-primary fw-bold text-decoration-none">
                Resend
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Otp;
