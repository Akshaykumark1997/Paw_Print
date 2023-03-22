import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "../../../Axios/Axios";

function ApplicationStatus() {
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios
      .get("/applicationStatus", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <section>
      <div className="container py-5">
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 mt-4">
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>Name:</b> obj.firstName obj.lastName
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>Mobile:</b> obj.mobile
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>Email:</b> obj.email
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h6>Address</h6>
                    <div className="d-flex flex-row justify-content-evenly mt-3">
                      <div>
                        <p>
                          <b>House Name:</b> obj.houseName
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>Street Name:</b> obj.streetName
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>City:</b> obj.city
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>State:</b> obj.state
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>Country:</b> obj.country
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>Pincode:</b> obj.pincode
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h6 className="mb-1 me-1">Pet Details</h6>
                    </div>
                    <div className="d-flex flex-row">
                      <div>
                        <p>
                          <b>Pet Name:</b> obj.petName
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Button
                        style={{
                          backgroundColor: "#354b60",
                          color: "#fff",
                        }}
                        onClick={handleShow}
                      >
                        Current Pet Details
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Current Pet Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="d-flex flex-row">
                            <div>
                              <p>
                                <b>Name:</b> obj.pet
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row">
                            <div>
                              <p>
                                <b>Breed:</b> obj.breed
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row">
                            <div>
                              <p>
                                <b>Description:</b>
                                obj.description
                              </p>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          {/* <Button variant="primary" onClick={handleClose}>
                            Save Changes
                          </Button> */}
                        </Modal.Footer>
                      </Modal>
                      <button
                        className="btn btn-sm mt-2"
                        id="applicationButton"
                        type="button"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {applications.length <= 0 && (
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center mt-5">
              <h6 className="display-6 fw-bold">No Data to Show</h6>
              <p className="lead">
                No one applied for your pets for adoption. when someone make a
                application it will appear hear
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
        )} */}
      </div>
    </section>
  );
}

export default ApplicationStatus;
