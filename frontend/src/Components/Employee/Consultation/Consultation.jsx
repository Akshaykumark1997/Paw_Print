import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Consultation() {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);
  return (
    // <div>
    //   <input
    //     type="text"
    //     value={value}
    //     onChange={(e) => setValue(e.target.value)}
    //   />
    //   <button onClick={handleJoinRoom}>Join Room</button>
    // </div>
    // <div className="d-flex flex-column mt-5">
    //   <div>
    //     <h1>Start Online Consultation</h1>
    //   </div>
    //   <div>
    //     <p>start the online consultation when you ready.</p>
    //   </div>
    //   <div>
    //     <input
    //       type="text"
    //       value={value}
    //       onChange={(e) => setValue(e.target.value)}
    //     />
    //     <button onClick={handleJoinRoom}>Join Room</button>
    //   </div>
    // </div>
    <div className="container mt-5 mb-5">
      <div className="card p-4">
        <div className="row justify-content-center">
          <div className="col-10">
            <h2 className="text-center mb-4 mt-5 font-weight-bold join-h1">
              <b> Start Your Online Consultation Now</b>
            </h2>
            <div className="text-center">
              <div>
                <input
                  className="mt-4"
                  style={{
                    width: "300px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  onClick={handleJoinRoom}
                  className="btn join-consultation-button btn-primary mb-4 mt-3"
                >
                  Create Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
