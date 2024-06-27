// import "./index.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Layout } from "./components/Layout.jsx";
// import ErrorPage from "./pages/error-page.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
// import { ScrollRestoration } from "react-router-dom";
// const router = createBrowserRouter([
  
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         lazy: () => import("./components/OnlyAuthenticated"),
//         children: [
//           {
//             path: "/",
//             lazy: () => import("./pages/home"),
//           },
//           {
//             path: "/cart",
//             lazy: () => import("./pages/cart"),
//           },
//           {
//             path: "/categories/:category",
//             lazy: () => import("./pages/category"),
//           },
//         ],
//       },
//       {
//         path: "/",
//         lazy: () => import("./components/OnlyUnAuthenticated"),
//         children: [
//           {
//             path: "/",
//             lazy: () => import("./pages/home.jsx"),
//           },
//           {
//             path: "/login",
//             lazy: () => import("./pages/login"),
//           },
//           {
//             path: "/register",
//             lazy: () => import("./pages/register"),
//           },
//           {
//             path: "/forgot-password",
//             async lazy() {
//               let { ForgotPassword } = await import("./pages/forgot-password");
//               return { Component: ForgotPassword };
//             },
//           },
//           {
//             path: "/reset-password",
//             async lazy() {
//               let { ResetPassword } = await import("./pages/forgot-password");
//               return { Component: ResetPassword };
//             },
//           },
//           {
//             path: "/confirm-otp",
//             lazy: () => import("./pages/confirm-otp"),
//           },
//         ],
//       },
//       {
//         path: "/account-creation-success",
//         lazy: () => import("./pages/success"),
//       },
//     ],
//   },
 
 
// ]);

// export const App = () =>
// <ScrollRestoration > 
//   <RouterProvider router={router} />
// </ScrollRestoration>
// ;

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import ErrorPage from "./pages/error-page.jsx";
import { ScrollRestoration } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { CategoryProvider } from "./CategoryContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        lazy: () => import("./components/OnlyAuthenticated"),
        children: [
          {
            path: "/",
            lazy: () => import("./pages/home"),
          },
          {
            path: "/cart",
            lazy: () => import("./pages/cart"),
          },
          {
            path: "/categories/:category",
            lazy: () => import("./pages/category"),
          },
        ],
      },
      {
        path: "/",
        lazy: () => import("./components/OnlyUnAuthenticated"),
        children: [
          {
            path: "/",
            lazy: () => import("./pages/home.jsx"),
          },
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
      {
        path: "/account-creation-success",
        lazy: () => import("./pages/success"),
      },
    ],
  },
]);

export const App = () => (

  <CategoryProvider>
      {/* <ScrollToTop> */}
    <RouterProvider router={router}/>
    {/* </ScrollToTop> */}
    </CategoryProvider>
    
  
);
