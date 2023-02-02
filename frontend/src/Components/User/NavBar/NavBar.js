import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavBar() {
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
              <Nav.Link href="#action1" className="mx-4">
                HOME
              </Nav.Link>
              <Nav.Link href="#action2" className="mx-4">
                ABOUT
              </Nav.Link>
              <NavDropdown
                title="SERVICE"
                id="navbarScrollingDropdown"
                className="mx-4"
              >
                <NavDropdown.Item href="#action3">
                  Pet Grooming
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Pet Adoption
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Pet Insurance
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" className="mx-4">
                CONTACT
              </Nav.Link>
            </Nav>
            <NavDropdown
              title="NAME"
              id="navbarScrollingDropdown"
              className="me-5"
            >
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={handleLogout}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
