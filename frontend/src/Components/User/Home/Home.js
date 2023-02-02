import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="hero d-flex justify-content-start ps-md-5 px-2">
        <div className="content text-white d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start">
          <h1 id="content-h">
            Every Pet Deserves <br />{" "}
            <span className="hero-content">Celebrity Care</span>
          </h1>
          <div
            className=" w-100 mx-auto d-flex justify-content-center justify-content-md-start"
            style={{ position: "relative, z-index: 1" }}
          >
            <button className="button mt-2">SERVICES</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
