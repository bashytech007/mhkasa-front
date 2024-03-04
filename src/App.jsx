import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { ForgotPassword } from "./pages/ForgotPassword.jsx";
import { PhoneOtpPage } from "./pages/PhoneOtpPage.jsx";
import { Home } from "./components/Home.jsx";
import { useAxiosPrivate } from "./hooks/useAxiosPrivate.js";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "/confirm-otp",
        element: <PhoneOtpPage />,
      },
    ],
  },
]);

export const App = () => {
  const { setUser } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user && user.email && user.username) {
      return setUser(user);
    }
    const abortController = new AbortController();
    const getUser = async () => {
      try {
        const response = await axiosPrivate.get(
          `${import.meta.env.VITE_BASE_URL}/user-info`,
          { signal: abortController.signal }
        );
        if (response.status === 200) {
          setUser(response.data);
          sessionStorage.setItem("user", JSON.stringify(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUser();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
};
