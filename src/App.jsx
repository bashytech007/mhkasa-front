import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import PhoneRegistrationPage from "./pages/PhoneRegistrationPage";
import PhoneOtpPage from "./pages/PhoneOtpPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/phoneregistration" element={<PhoneRegistrationPage />} />
        <Route path="/phoneotp" element={<PhoneOtpPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
