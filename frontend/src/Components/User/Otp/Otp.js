import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../../Axios/Axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../../../State/Index";
import Spinner from "../../Spinner/Spinner";

function Otp() {
  const spinner = useSelector((state) => state);
  const dispatch = useDispatch();
  const { startSpinner, stopSpinner } = bindActionCreators(
    actionCreaters,
    dispatch
  );
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const otpSubmit = (e) => {
    const token = localStorage.getItem("otpToken");
    e.preventDefault();
    startSpinner(true);
    axios
      .post(
        "/verifyOtp",
        {
          id: location.state.id,
          email: location.state.email,
          otp,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        stopSpinner(false);
        if (response.data.success) {
          message.success("registered successfully");
          navigate("/login");
        } else {
          setError(response.data);
        }
      })
      .catch((error) => {
        stopSpinner(false);
        if (error.response.blocked) {
          navigate("/login");
          message.error("You have been Blocked");
        } else if (!error.response.data.token) {
          navigate("/login");
        } else if (!error.response.data.success) {
          message.error("!Ooops something went wrong");
        }
      });
  };
  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
    startSpinner(true);
    axios
      .post("/resendOtp", {
        userId: location.state.userId,
        email: location.state.email,
      })
      .then((response) => {
        stopSpinner(false);
        console.log(response);
        localStorage.setItem("otpToken", response.data.data.token);
      })
      .catch((error) => {
        stopSpinner(false);
        if (error.response.blocked) {
          navigate("/login");
          message.error("You have been Blocked");
        } else if (!error.response.data.token) {
          navigate("/login");
        } else if (!error.response.data.success) {
          message.error("!Ooops something went wrong");
        }
      });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  return (
    <div>
      {spinner.spinner.spinner && <Spinner />}
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
                <p className="error">{error.message}</p>
              </div>

              <button type="submit" className="btn btn-primary submit_btn my-4">
                Submit
              </button>
            </form>
            <div className="countdown-text">
              {seconds > 0 || minutes > 0 ? (
                <p>
                  Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              ) : (
                <p>Didn t recieve code?</p>
              )}

              <button
                disabled={seconds > 0 || minutes > 0}
                style={{
                  color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                }}
                onClick={resendOTP}
              >
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Otp;
