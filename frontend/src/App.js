import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/User/Login/SignIn";
import Registration from "./Pages/User/SignUp/Registration";
import UserHome from "./Pages/User/Home/UserHome";
import OtpVarification from "./Pages/User/Otp/OtpVarification";

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {user && <Route path="/" element={<UserHome />} />}
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/otp" element={<OtpVarification />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
