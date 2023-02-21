import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/User/Login/SignIn";
import Registration from "./Pages/User/SignUp/Registration";
import UserHome from "./Pages/User/Home/UserHome";
import OtpVarification from "./Pages/User/Otp/OtpVarification";
import Login from "./Components/Admin/Login/Login";
import Grooming from "./Pages/Admin/Grooming/Grooming";
import AddService from "./Pages/Admin/AddService/AddService";
import Employees from "./Pages/Admin/Employees/Employees";
import NewEmployee from "./Pages/Admin/NewEmployee/NewEmployee";
import Appointment from "./Pages/Admin/Appointments/Appointment";
import GroomingService from "./Pages/User/Grooming/GroomingService";
import AppointmentBooking from "./Pages/User/Appointment/AppointmentBooking";
import ViewClinics from "./Pages/User/Clinics/ViewClinics";
import EditService from "./Pages/Admin/EditService/EditService";
import EmployeeLogin from "./Pages/Employee/Login/EmployeeLogin";
import EmployeeHome from "./Pages/Employee/Appointments/EmployeeAppointments";

function App() {
  // const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/grooming" element={<GroomingService />} />
          <Route path="/clinics" element={<ViewClinics />} />
          <Route path="/appointment" element={<AppointmentBooking />} />
          <Route path="/otp" element={<OtpVarification />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/grooming" element={<Grooming />} />
          <Route path="/admin/addGrooming" element={<AddService />} />
          <Route path="/admin/editGrooming" element={<EditService />} />
          <Route path="/admin/employees" element={<Employees />} />
          <Route path="/admin/addEmployee" element={<NewEmployee />} />
          <Route path="/admin/appointments" element={<Appointment />} />
          <Route path="/employee/login" element={<EmployeeLogin />} />
          <Route path="/employee/appointments" element={<EmployeeHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
