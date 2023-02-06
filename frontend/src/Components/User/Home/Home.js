import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="hero d-flex justify-content-start ps-md-5 px-2 col-sm-12">
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
      <section className="container d-flex flex-row mt-5">
        <div className="card mb-3 mx-5 border-0" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4 align-self-center">
              <img
                src="../../../../Images/icon1.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Grooming Service</h5>
                <p className="card-text">
                  Pamper your furry friend with our professional pet grooming
                  services. Love, care, and attention guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 mx-5 border-0" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4 align-self-center">
              <img
                src="../../../../Images/icon2.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 border-0" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4 align-self-center">
              <img
                src="../../../../Images/icon3.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
