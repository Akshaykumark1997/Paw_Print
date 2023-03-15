import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavBar() {
  const user = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };
  return (
    <div className="container">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">PaW Print</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 mx-5" navbarScroll>
              <Nav.Link href="/" className="mx-4">
                HOME
              </Nav.Link>
              <Nav.Link href="#action2" className="mx-4">
                ABOUT
              </Nav.Link>
              {user && (
                <NavDropdown
                  title="SERVICE"
                  id="navbarScrollingDropdown"
                  className="mx-4"
                >
                  <Link to="/grooming" className="text-decoration-none">
                    <NavDropdown.Item href="#action3">
                      Pet Grooming
                    </NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item href="/pets">Pet Adoption</NavDropdown.Item>
                  <NavDropdown.Item href="/clinics">Clinic</NavDropdown.Item>
                </NavDropdown>
              )}
              <Nav.Link href="#" className="mx-4">
                CONTACT
              </Nav.Link>
            </Nav>
            {user ? (
              <NavDropdown
                title="NAME"
                id="navbarScrollingDropdown"
                className="me-5"
              >
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4" onClick={handleLogout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to="/login">
                <button
                  className="btn"
                  style={{ backgroundColor: "#354b60", color: "#fff" }}
                >
                  Login
                </button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
