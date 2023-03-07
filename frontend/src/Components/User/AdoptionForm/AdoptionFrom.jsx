import React from "react";
import "./AdoptionFrom.css";

function AdoptionFrom() {
  return (
    <div>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form>
                    <p id="adoptionHeadings">Perspective Pet Parent</p>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="mobile"
                            id="mobile"
                            name="mobile"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Mobile
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>
                    <p id="adoptionHeadings">Address</p>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="houseName"
                            id="houseName"
                            name="houseName"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            House Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="streetName"
                            name="streetName"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Street Name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="city"
                            id="city"
                            name="city"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            City
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="state"
                            name="state"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            State
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="country"
                            id="country"
                            name="country"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Country
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="pincode"
                            name="pincode"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Pincode
                          </label>
                        </div>
                      </div>
                    </div>
                    <p id="adoptionHeadings">Name of Pet You Wish to Adopt</p>
                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="description"
                            name="description"
                          />
                        </div>
                      </div>
                    </div>
                    <p id="adoptionHeadings">Do you own any pets?</p>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="petName"
                            id="petName"
                            name="petName"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Pet Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="breed"
                            name="breed"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Breed
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="description"
                            name="description"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Pets Behaviour towards other pets
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdoptionFrom;
