import React from "react";

function About() {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us page</h1>
              <p className="lead text-muted mb-0">
                Welcome to our pet clinic! We are a team of dedicated and
                experienced veterinarians who are passionate about providing the
                best care for your beloved pets. Our clinic is equipped with
                state-of-the-art facilities and technology to ensure that your
                pets receive the highest quality of medical care. From routine
                vaccinations and preventive care to complex surgeries and
                emergency treatments, we are committed to providing
                comprehensive and compassionate care for all pets. Our team
                consists of highly skilled and compassionate veterinarians,
                technicians, and support staff who are dedicated to creating a
                comfortable and stress-free environment for your pets. We
                understand that pets are cherished members of your family, and
                we treat them with the same care and attention that we would
                give to our own pets.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src="/Images/about.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light">Contact Us</h2>
              <p className="font-italic text-muted mb-4">
                +91 9999999999 Vytilla,
                <br /> Ernakulam,
                <br /> cochin 673027 <br /> chocolatecafe112@gmail.com
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
