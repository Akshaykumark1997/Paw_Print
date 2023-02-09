import React from "react";

function Pets() {
  return (
    <div className="container">
      <h1 className="center-heading mt-5">Pet Adoption Process</h1>
      <div className="card-main mt-5">
        <div className="cards">
          <img src="../../../../Images/D-2.jpg" alt="Card 1 Image" />
          <h2>Denise</h2>
          <p>
            We understand the bond between a pet and its owner, which is why we
            strive to provide you with accurate and up-to-date information on
            pet care, nutrition, behavior, and more.
          </p>
        </div>
        <div className="cards">
          <img src="../../../../Images/D-3.jpg" alt="Card 2 Image" />
          <h2>Charlie</h2>
          <p>
            {" "}
            where we provide comprehensive information and resources to help you
            understand and care for your furry friend. Our team of experienced
            pet professionals is dedicated to helping pet owners learn about
            their pets behavior, health, and wellness, and to providing tips
            advice on how to best care for your pet.
          </p>
        </div>
        <div className="cards">
          <img src="../../../../Images/D-4.jpg" alt="Card 3 Image" />
          <h2>Kevin</h2>
          <p>
            where our mission is to connect loving pet owners with their perfect
            furry friend. We believe that every pet deserves a loving and caring
            home, and we re dedicated to making the adoption process as seamless
            and enjoyable as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pets;
