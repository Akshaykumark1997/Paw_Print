import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#354b60" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h1 className="text-white">My Main Heading</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg mt-4">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <Card className="h-100">
              <Card.Header>
                <h4>User Profile</h4>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <ListGroup>
                      <ListGroupItem action>Donate Pet</ListGroupItem>
                      <ListGroupItem action>View Donated Pet</ListGroupItem>
                      <ListGroupItem action>Edit Profile</ListGroupItem>
                      <ListGroupItem action>Change Password</ListGroupItem>
                    </ListGroup>
                  </div>
                  <div className="col-sm-12 col-md-8">
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        readOnly
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
