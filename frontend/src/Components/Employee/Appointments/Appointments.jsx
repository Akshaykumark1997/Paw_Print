import React from "react";

function Appointments() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-item-center">
        <div>
          <h1>Appointments</h1>
        </div>
      </div>

      <div className="table-responsive mt-5">
        <table
          className="table text-start align-middle table-bordered table-hover mb-0"
          id="table"
        >
          <thead>
            <tr>
              <th className="text-center">Sl.No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Pet Name</th>
              <th className="text-center">Mobile</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {appointment.map((obj, index) => {
              return ( */}
            <tr>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center"></td>
              <td className="text-center">
                <select id="select">
                  {/* {employee.map((employee) => {
                        return (
                          <option value="option2" key={employee._id}>
                            {employee.firstName + employee.lastName}
                          </option>
                        );
                      })} */}
                </select>
              </td>
            </tr>
            {/* );
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointments;
