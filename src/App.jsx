import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        lazy: () => import("./components/OnlyAuthenticated.jsx"),
        children: [
          {
            path: "/",
            lazy: () => import("./components/Home.jsx"),
          },
          {
            path: "/test",
            element: <div>Tect</div>,
          },
        ],
      },
      {
        path: "/",
        lazy: () => import("./components/OnlyUnAuthenticated.jsx"),
        children: [
          {
            path: "/login",
            lazy: () => import("./pages/Login.jsx"),
          },
          {
            path: "/register",
            lazy: () => import("./pages/Register.jsx"),
          },
          {
            path: "/forgot-password",
            async lazy() {
              let { ForgotPassword } = await import("./pages/ForgotPassword");
              return { Component: ForgotPassword };
            },
          },
          {
            path: "/reset-password",
            async lazy() {
              let { ResetPassword } = await import("./pages/ForgotPassword");
              return { Component: ResetPassword };
            },
          },
          {
            path: "/confirm-otp",
            lazy: () => import("./pages/PhoneOtpPage.jsx"),
          },
        ],
      },
      {
        path: "/account-creation-success",
        lazy: () => import("./pages/Success.jsx"),
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
