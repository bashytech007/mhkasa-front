import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import ErrorPage from "./pages/error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        lazy: () => import("./components/OnlyAuthenticated.jsx"),
        children: [
          {
            path: "/",
            lazy: () => import("./pages/home.jsx"),
          },
          {
            path: "/cart",
            lazy: () => import("./pages/cart.jsx"),
          },
          {
            path: "/categories/:category",
            lazy: () => import("./pages/category.jsx"),
          },
        ],
      },
      {
        path: "/",
        lazy: () => import("./components/OnlyUnAuthenticated.jsx"),
        children: [
          {
            path: "/login",
            lazy: () => import("./pages/login.jsx"),
          },
          {
            path: "/register",
            lazy: () => import("./pages/register.jsx"),
          },
          {
            path: "/forgot-password",
            async lazy() {
              let { ForgotPassword } = await import("./pages/forgot-password");
              return { Component: ForgotPassword };
            },
          },
          {
            path: "/reset-password",
            async lazy() {
              let { ResetPassword } = await import("./pages/forgot-password");
              return { Component: ResetPassword };
            },
          },
          {
            path: "/confirm-otp",
            lazy: () => import("./pages/confirm-otp.jsx"),
          },
        ],
      },
      {
        path: "/account-creation-success",
        lazy: () => import("./pages/success.jsx"),
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
