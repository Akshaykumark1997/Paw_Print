import React from "react";
import "./Adoption.css";
import { Link } from "react-router-dom";

function Adoption() {
  const token = localStorage.getItem("token");
  return (
    <div
      className="hero mt-3"
      style={{ backgroundImage: "url(../../../../../../Images/slide01.jpg)" }}
    >
      <div className="hero-left">
        <h1 className="heading">READY TO ADOPT!</h1>
        <p className="content">
          We understand that adopting a pet is a big decision, which is why we
          provide detailed information on each pet up for adoption, including
          their personality, behavior, and any special needs they may have. Our
          website also provides resources and support for pet owners, including
          information on pet care, nutrition, and training.
        </p>
        <Link to={token ? "/pets" : "/login"}>
          <button className="btn btn-primary" id="button">
            VIEW
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Adoption;
