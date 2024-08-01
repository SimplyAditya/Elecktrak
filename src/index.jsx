import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./styles/index.css";
import App from "./App";
import { Dashboard } from "./components/DashBoard";
import AdminLogin from "./components/AdminLogin";
import { DashBoardOutlet } from "./components/Outlets/DashboardOutlet";
import FloorOutlet from "./components/Outlets/FloorOutlet";
import { RealTimeMonitorOutlet } from "./components/Outlets/RealTImeMonitorOutlet";
import { DeviceTwinningOutlet } from "./components/Outlets/DeviceTwinningOutlet";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path:"/",
        element:<Navigate to="/login"/>
      },
      {
        path: "/login",
        element: <AdminLogin />,
      },
    ],
  },
  {
    path: "",
    element: <Dashboard />,
    children: [
      {
        path: "/home",
        element: <DashBoardOutlet />,
      },
      {
        path: "/floor",
        element: <FloorOutlet />,
      },
      {
        path: "/devicemonitoring",
        element: <RealTimeMonitorOutlet />,
      },
      {
        path: "/twinning",
        element: <DeviceTwinningOutlet />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <AdminLogin/> */}
  </React.StrictMode>
);

