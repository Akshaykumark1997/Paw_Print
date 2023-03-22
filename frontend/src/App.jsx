import "./App.css";
// import { Navigate } from "react-router-dom";
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
import UserProfile from "./Pages/User/Profile/UserProfile";
import DonatePet from "./Pages/User/Donate/DonatePet";
import AdoptionDetails from "./Pages/Admin/Adoption/AdoptionDetails";
import EditAdoptionDetails from "./Pages/Admin/EditAdoption/EditAdoptionDetails";
import Pets from "./Pages/User/Pets/Pets";
import UserAuthorization from "./Components/Authorization/UserAuthorization";
import AdminAutorization from "./Components/Authorization/AdminAutorization";
import EmployeeAuthorization from "./Components/Authorization/EmployeeAuthorization";
import DonatePetDetails from "./Pages/User/PetDetails/DonatePetDetails";
import ApplyForm from "./Pages/User/Adoption/ApplyForm";
import OnlineConsultation from "./Pages/Employee/VideoCall/OnlineConsultation";
import VideoCall from "./Components/Employee/VideoCall/VideoCall";
import Appointments from "./Pages/User/AppointmentDetails/Appointments";
import DonatedPetDetails from "./Pages/User/DonatedPets/DonatedPetDetails";
import ViewApplications from "./Pages/User/Applications/ViewApplications";
import Consultation from "./Components/User/AppointmentDetails/Consultation";
import JoinConsultation from "./Components/User/AppointmentDetails/JoinConsultation";
import ViewUsers from "./Pages/Admin/Users/ViewUsers";
import EditDonatedPetDetails from "./Pages/User/EditDonatedPets/EditDonatedPetDetails";
import ViewStatus from "./Pages/User/ApplicationStatus/ViewStatus";

function App() {
  // const user = localStorage.getItem("token");
  // const admin = localStorage.getItem("adminToken");
  // const employee = localStorage.getItem("employeeToken");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/otp" element={<OtpVarification />} />
          <Route element={<UserAuthorization />}>
            <Route path="/" element={<UserHome />} />
            <Route path="/grooming" element={<GroomingService />} />
            <Route path="/clinics" element={<ViewClinics />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/donate" element={<DonatePet />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/petDetails" element={<DonatePetDetails />} />
            <Route path="/adoption" element={<ApplyForm />} />
            <Route path="/appointmentDetails" element={<Appointments />} />
            <Route path="/donatedPets" element={<DonatedPetDetails />} />
            <Route
              path="/editDonatedPets"
              element={<EditDonatedPetDetails />}
            />
            <Route path="/applications" element={<ViewApplications />} />
            <Route path="/consultation" element={<JoinConsultation />} />
            <Route path="/joinRoom" element={<Consultation />} />
            <Route path="/applicationStatus" element={<ViewStatus />} />
          </Route>
          <Route path="/admin" element={<Login />} />
          <Route path="/admin" element={<AdminAutorization />}>
            <Route path="/admin/grooming" element={<Grooming />} />
            <Route path="/admin/addGrooming" element={<AddService />} />
            <Route path="/admin/editGrooming" element={<EditService />} />
            <Route path="/admin/employees" element={<Employees />} />
            <Route path="/admin/addEmployee" element={<NewEmployee />} />
            <Route path="/admin/adoption" element={<AdoptionDetails />} />
            <Route path="/admin/users" element={<ViewUsers />} />
            <Route
              path="/admin/editAdoption"
              element={<EditAdoptionDetails />}
            />
            <Route path="/admin/appointments" element={<Appointment />} />
          </Route>
          <Route path="/employee" element={<EmployeeLogin />} />
          <Route path="/employee" element={<EmployeeAuthorization />}>
            <Route path="/employee/appointments" element={<EmployeeHome />} />
            <Route
              path="/employee/consultation"
              element={<OnlineConsultation />}
            />
          </Route>
          <Route path="/room/:roomId" element={<VideoCall />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
