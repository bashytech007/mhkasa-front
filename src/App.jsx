import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import PhoneRegistrationPage from "./pages/PhoneRegistrationPage";
import PhoneOtpPage from "./pages/PhoneOtpPage";
import { Layout } from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/phoneregistration"
            element={<PhoneRegistrationPage />}
          />
          <Route path="/phoneotp" element={<PhoneOtpPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
