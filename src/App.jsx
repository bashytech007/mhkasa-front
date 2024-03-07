import "./index.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { ForgotPassword, ResetPassword } from "./pages/ForgotPassword.jsx";
import { PhoneOtpPage } from "./pages/PhoneOtpPage.jsx";
import { Home } from "./components/Home.jsx";
import { useAxiosPrivate } from "./hooks/useAxiosPrivate.js";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth.js";
import { OnlyAuthenticated } from "./components/OnlyAuthenticated.jsx";
import { OnlyUnAuthenticated } from "./components/OnlyUnAuthenticated.jsx";
import { Success } from "./pages/Success.jsx";

const Root = () => {
  const location = useLocation();
  const { user, setUser } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    const abortController = new AbortController();
    const getUser = async () => {
      try {
        const response = await axiosPrivate.get(
          `${import.meta.env.VITE_BASE_URL}/user-info`,
          { signal: abortController.signal }
        );
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    };
    !user && getUser();
    return () => {
      abortController.abort();
    };
  }, [location]);
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <OnlyAuthenticated />,
            children: [
              {
                path: "/",
                element: <Home />,
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
    ],
  },
]);

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
};
