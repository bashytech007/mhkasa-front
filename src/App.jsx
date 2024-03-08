import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { ForgotPassword, ResetPassword } from "./pages/ForgotPassword.jsx";
import { PhoneOtpPage } from "./pages/PhoneOtpPage.jsx";
import { Home } from "./components/Home.jsx";
import { OnlyAuthenticated } from "./components/OnlyAuthenticated.jsx";
import { OnlyUnAuthenticated } from "./components/OnlyUnAuthenticated.jsx";
import { Success } from "./pages/Success.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <OnlyAuthenticated />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/test",
            element: <div>Tect</div>,
          },
        ],
      },
      {
        path: "/",
        element: <OnlyUnAuthenticated />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "/reset-password",
            element: <ResetPassword />,
          },
          {
            path: "/confirm-otp",
            element: <PhoneOtpPage />,
          },
        ],
      },
      {
        path: "/account-creation-success",
        element: <Success />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
