import React from "react";

function AddGrooming() {
  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-9">
              <h2 className="mb-4">Add Service</h2>

              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center pt-4 pb-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Price Standard</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>

                  <hr className="mx-n3" />
                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Price Premium</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Description</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <textarea className="form-control" rows="3"></textarea>
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="row align-items-center py-3">
                    <div className="col-md-3 ps-5">
                      <h6 className="mb-0">Image</h6>
                    </div>
                    <div className="col-md-9 pe-5">
                      <input
                        className="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                      />
                    </div>
                  </div>

                  <hr className="mx-n3" />

                  <div className="px-5 py-4">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      style={{ backgroundColor: "#354b60", color: "#fff" }}
                    >
                      Add Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddGrooming;
