import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";

import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SessionCreation from "./pages/SessionCreation";
import SessionsList from "./pages/SessionsList";
import Session from "./pages/Session";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/session",
        element: <SessionCreation />,
      },
      {
        path: "/sessions",
        element: <SessionsList />,
      },
      {
        path: "/sessions/:id",
        element: <Session />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <ToastContainer className="toast-position" />
    <RouterProvider router={router} />
  </UserProvider>
);
