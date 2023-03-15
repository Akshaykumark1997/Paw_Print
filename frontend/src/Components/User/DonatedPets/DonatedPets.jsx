import React from "react";

function DonatedPets() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img
                      id="main-image"
                      src="https://i.imgur.com/Dhebu4F.jpg"
                      width="250"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-long-arrow-left"></i>
                      <span className="ml-1">Back</span>
                    </div>
                  </div>
                  <div className="mt-4 mb-3">
                    <h5 className="text-uppercase">Men slim fit t-shirt</h5>
                  </div>
                  <p className="about">
                    Shop from a wide range of t-shirt from orianz. Pefect for
                    your everyday use, you could pair it with a stylish pair of
                    jeans or trousers complete the look.
                  </p>
                  <div className="cart mt-4 align-items-center">
                    <button className="btn btn-danger text-uppercase mr-2 px-4">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonatedPets;
