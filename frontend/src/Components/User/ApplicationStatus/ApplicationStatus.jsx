import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "../../../Axios/Axios";
import { useNavigate, Link } from "react-router-dom";
import { message, Modal } from "antd";

function ApplicationStatus() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    axios
      .get("/applicationStatus", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setApplications(response.data.applications);
      })
      .catch((error) => {
        if (!error.response.data.token) {
          navigate("/login");
        }
        if (!error.response.data.success) {
          message.error("!Ooops something went wrong");
        }
      });
  }, []);
  return (
    <section>
      <div className="container py-5">
        {applications.length > 0 &&
          applications.map((obj) => {
            return (
              <div className="row justify-content-center mb-3" key={obj._id}>
                <div className="col-md-12 col-xl-10">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 mt-4">
                          <div className="d-flex flex-row justify-content-evenly">
                            <div>
                              <p>
                                <b>Name:</b>{" "}
                                {obj.firstName + " " + obj.lastName}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-evenly">
                            <div>
                              <p>
                                <b>Mobile:</b> {obj.mobile}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-evenly">
                            <div>
                              <p>
                                <b>Email:</b> {obj.email}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <h6>Address</h6>
                          <div className="d-flex flex-row justify-content-evenly mt-3">
                            <div>
                              <p>
                                <b>House Name:</b> {obj.houseName}
                              </p>
                            </div>
                            <div>
                              <p>
                                <b>Street Name:</b> {obj.streetName}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-evenly">
                            <div>
                              <p>
                                <b>City:</b> {obj.city}
                              </p>
                            </div>
                            <div>
                              <p>
                                <b>State:</b> {obj.state}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-evenly">
                            <div>
                              <p>
                                <b>Country:</b> {obj.country}
                              </p>
                            </div>
                            <div>
                              <p>
                                <b>Pincode:</b> {obj.pincode}
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
                                <b>Pet Name:</b> {obj.petName}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex flex-column mt-4">
                            <Button
                              style={{
                                backgroundColor: "#354b60",
                                color: "#fff",
                              }}
                              onClick={showModal}
                            >
                              Current Pet Details
                            </Button>

                            <Modal
                              title="Pet Details"
                              open={isModalOpen}
                              onOk={handleOk}
                              onCancel={handleCancel}
                            >
                              <div className="d-flex flex-row">
                                <div>
                                  <p>
                                    <b>Name:</b> {obj.pet}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex flex-row">
                                <div>
                                  <p>
                                    <b>Breed:</b> {obj.breed}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex flex-row">
                                <div>
                                  <p>
                                    <b>Description:</b>
                                    {obj.description}
                                  </p>
                                </div>
                              </div>
                            </Modal>
                            {obj.adoptionStatus == "Pending" ? (
                              <button
                                className="btn btn-danger mt-2"
                                id="applicationStatusButton"
                                type="button"
                              >
                                Pending
                              </button>
                            ) : (
                              <>
                                <button
                                  className="btn btn-success mt-2"
                                  id="applicationStatusButton"
                                  type="button"
                                >
                                  Confirmed
                                </button>
                                <button
                                  className="btn btn-primary mt-2"
                                  id="applicationStatusButton"
                                  type="button"
                                >
                                  Contact
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {applications.length <= 0 && (
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
        )}
      </div>
    </section>
  );
}

export default ApplicationStatus;
