import React, { useState } from "react";
import "./Application.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Applications() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section style={{ backgroundColor: "#eee" }}>
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
                          <b>Name:</b> Akshay Kumar K
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>Mobile:</b> 9755453456
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>Email:</b> akshayajith40@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h6>Address</h6>
                    <div className="d-flex flex-row justify-content-evenly mt-3">
                      <div>
                        <p>
                          <b>House Name:</b> Koyiloth
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>Street Name:</b> Naduvattam
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>City:</b> Kozhikode
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>State:</b> Kerala
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly">
                      <div>
                        <p>
                          <b>Country:</b> India
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>Pincode:</b> 673015
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
                          <b>Pet Name:</b> Denise
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Button
                        style={{ backgroundColor: "#354b60", color: "#fff" }}
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
                                <b>Name:</b> Alkha
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row">
                            <div>
                              <p>
                                <b>Breed:</b> Pomeranian
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row">
                            <div>
                              <p>
                                <b>Description:</b>
                                Alkha is a good dog, we care her a lot and its
                                behaviour towards other pets are really good.
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
      </div>
    </section>
  );
}

export default Applications;
