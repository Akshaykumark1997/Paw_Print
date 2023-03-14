import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AppointmentDetails() {
  const token = localStorage.getItem("token");
  const [appointments, setAppointments] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleCancel = (id) => {
    axios
      .post(
        "/cancelAppointment",
        { id: id },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setShow(false);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
        console.log(error.response.data);
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
                  <b>Order Id: </b>
                  <br />#{obj._id}
                </div>
              </div>
              <div className="col-md-3 d-flex flex-column">
                <b>Payment:</b>&nbsp;{obj.paymentStatus}
                <br />
                <b>Service:</b>
                {obj.service}
              </div>
              <div className="col-md-3 d-flex flex-column">
                <strong>Order Status: </strong>
                <small className="text-warning">{obj.employeeStatus}</small>
                {/* <br />
            <small className="text-danger">gh</small>
            <br />
            <small className="text-success">bb</small>
            <br /> */}
                <b>delivery expected: </b>
                {obj.date}
              </div>
              <div className="col-md-3 justify-content-center d-flex flex-row align-items-center">
                <Button variant="danger" onClick={handleShow}>
                  Cancel
                </Button>

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
                        <Form.Control type="name" autoFocus name="name" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="num" name="bank" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="num" name="accountNumber" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Repeat Account Number</Form.Label>
                        <Form.Control type="num" name="accountNumber" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control type="num" name="ifscCode" />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleCancel(obj._id)}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
