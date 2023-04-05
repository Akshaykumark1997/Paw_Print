import React, { useEffect, useState } from "react";
import Validation from "./Validation";
import axios from "../../../Axios/Axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { message } from "antd";
import { useNavigate, Link } from "react-router-dom";

export default function AppointmentDetails() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    bank: "",
    accountNumber: "",
    rrepeatAccountNumber: "",
    ifscCode: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };
  const joinRoom = () => {
    navigate("/consultation");
  };
  const handleClose = () => setShow(false);
  const handleCancel = () => {
    console.log(id);
    const errors = Validation(formValues);
    console.log(errors);
    if (Object.keys(errors).length != 0) {
      setError(errors);
    } else {
      axios
        .patch(
          "/cancelAppointment",
          { id: id },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          setShow(false);
          message.success(response.data.message);
        })
        .catch((error) => {
          setShow(false);
          if (!error.response.data.token) {
            navigate("/login");
          }
          message.error(error.response.data.err.error.description);
          if (!error.response.data.error.success) {
            message.error("!Oops something went wrong");
          }
        });
    }
  };
  useEffect(() => {
    axios
      .get("/appointmentDetails", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setAppointments(response.data.appointments);
      })
      .catch((error) => {
        if (error.response.blocked) {
          navigate("/login");
          message.error("You have been Blocked");
        } else if (!error.response.data.token) {
          navigate("/login");
        } else if (!error.response.data.success) {
          message.error("!Ooops something went wrong");
        }
      });
  }, []);
  return (
    <div className="container mt-5">
      {appointments.map((obj) => {
        return (
          <div
            className="col-md-12 p-3"
            key={obj._id}
            style={{ border: "1px solid" }}
          >
            <div className="row">
              <div className="col-md-3 justify-content-center d-flex flex-column align-item-center">
                <div>
                  <b>Appointment Id: </b>
                  <br />#{obj._id}
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column">
                <b>Payment Status:</b>&nbsp;{obj.paymentStatus}
                <br />
                <b>Service:</b>
                {obj.service}
              </div>
              <div className="col-md-3 d-flex flex-column">
                <strong>Appointment Status: </strong>
                {obj.employeeStatus === "Pending" && (
                  <small className="text-warning">{obj.employeeStatus}</small>
                )}
                {obj.employeeStatus === "Cancelled" && (
                  <small className="text-danger">{obj.employeeStatus}</small>
                )}
                {obj.employeeStatus === "Confirm" && (
                  <small className="text-success">{obj.employeeStatus}</small>
                )}
                <b>Date and Time: </b>
                {obj.date} {obj.time}
              </div>
              <div className="col-md-3 justify-content-center d-flex flex-row align-items-center">
                {obj.paymentStatus !== "Refund" ? (
                  <Button variant="danger" onClick={() => handleShow(obj._id)}>
                    Cancel
                  </Button>
                ) : (
                  ""
                )}

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Account Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Account Holder Name</Form.Label>
                        <Form.Control
                          type="name"
                          autoFocus
                          name="name"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p className="error">{error.name}</p>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control
                          type="num"
                          name="bank"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p className="error">{error.bank}</p>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control
                          type="num"
                          name="accountNumber"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p className="error">{error.accountNumber}</p>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Repeat Account Number</Form.Label>
                        <Form.Control
                          type="num"
                          name="repeatAccountNumber"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p className="error">{error.repeatAccountNumber}</p>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control
                          type="num"
                          name="ifscCode"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p className="error">{error.ifscCode}</p>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleCancel}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                {obj.service === "Online Consultation" &&
                obj.employeeStatus !== "Refund" ? (
                  <Button
                    className="mx-2"
                    style={{ backgroundColor: "#354b60", color: "#fff" }}
                    onClick={joinRoom}
                  >
                    View Details
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        );
      })}
      {appointments.length <= 0 && (
        <div className="d-flex align-items-center justify-content-center">
          <div className="text-center mt-5">
            <h6 className="display-6 fw-bold">No Data to Show</h6>
            <p className="lead">
              You dont have any appointment details. Once you created one it
              will show here.
            </p>
            <Link to="/profile">
              <button
                className="btn btn-primary mb-5"
                style={{
                  backgroundColor: "#354b60",
                  color: "#fff",
                }}
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
