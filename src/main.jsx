import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/Layout.jsx";
import { Auth } from "./contexts/Auth.jsx";
import { Cart } from "./contexts/Cart.jsx";
import ErrorPage from "./pages/error-page.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  LayoutLoader,
  categoriesLoader,
  homeLoader,
  productLoader,
} from "./utils/loaders.js";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    loader:LayoutLoader(queryClient),
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        children: [
          {
            path: "/",
            lazy: () => import("./pages/home"),
            loader: homeLoader(queryClient),
          },
          {
            path: "/search",
            lazy: () => import("./pages/search"),
            loader: homeLoader(queryClient),
          },
          {
            path: "/cart",
            lazy: () => import("./pages/cart"),
          },
          {
            path: "/account-creation-success",
            lazy: () => import("./pages/success"),
          },
          {
            path: "/products/:productId",
            lazy: () => import("./pages/select-product.jsx"),
            loader: productLoader(queryClient),
          },
          {
            path: "/categories/:category",
            lazy: () => import("./pages/category"),
            loader: categoriesLoader(queryClient),
          },
        ],
      },
      {
        path: "/",
        lazy: () => import("./components/OnlyAuthenticated"),
        children: [
          {
            path: "/checkout",
            lazy: () => import("./pages/checkout"),
          },
          {
            path: "/account",
            lazy: () => import("./pages/account"),
          },
          {
            path: "/account/profile",
            lazy: () => import("./pages/profile"),
          },
          {
            path: "/payment-callback",
            lazy: () => import("./pages/checkout-success"),
          },
          {
            path: "/account/order-history",
            lazy: () => import("./pages/order-history"),
          },
        ],
      },
      {
        path: "/",
        lazy: () => import("./components/OnlyUnAuthenticated"),
        children: [
          {
            path: "/login",
            lazy: () => import("./pages/login"),
          },
          {
            path: "/register",
            lazy: () => import("./pages/register"),
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
            lazy: () => import("./pages/confirm-otp"),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Auth>
          <Cart>
            <RouterProvider router={router} />
          </Cart>
        </Auth>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);