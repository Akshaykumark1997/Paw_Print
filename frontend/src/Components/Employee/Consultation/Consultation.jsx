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
    <div className="d-flex flex-column mt-5">
      <div>
        <h1>Start Online Consultation</h1>
      </div>
      <div>
        <p>start the online consultation when you ready.</p>
      </div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleJoinRoom}>Join Room</button>
      </div>
    </div>
  );
}

export default Consultation;
