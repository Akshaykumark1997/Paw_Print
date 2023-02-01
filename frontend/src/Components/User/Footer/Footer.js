/* eslint-disable prettier/prettier */
import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-muted mt-4"
        style={{ backgroundColor: "black"}}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact Us
                </h6>
                <p>
                  +91 9999999999 <br />
                  Vytilla, Ernakulam, cochin 673027 chocolatecafe112@gmail.com
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Our Services
                </h6>
                <p>
                  <a className="text-muted" style={{ textDecoration: "none"}}>
                    Clinic
                  </a>
                </p>
                <p>
                  <a className="text-muted" style={{ textDecoration: "none"}}>
                    Pet Grooming
                  </a>
                </p>
                <p>
                  <a className="text-muted" style={{ textDecoration: "none"}}>
                    Pet Adoption
                  </a>
                </p>
                <p>
                  <a className="text-muted" style={{ textDecoration: "none"}}>
                    Pet Insurance
                  </a>
                </p>
                <p>
                  <a className="text-muted" style={{ textDecoration: "none"}}>
                    Pet Lost and Found
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  My Account
                </h6>
                <p>
                  <a className="text-muted" style={{ textDecoration: "none"}}>
                    Login
                  </a>
                </p>
                <p>
                  <a className="text-muted" style={{ textDecoration: "none"}}>
                    Log Out
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <a
                  className="btn btn-primary btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee"}}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{backgroundColor: "#ac2bac"}}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2025 Copyright: <br />
          <a className="text-muted" style={{ textDecoration: "none"}} href="">
            All Rights Reserved Terms and conditions Privacy Policy Shipping &
            Payment Info Report abuse
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
