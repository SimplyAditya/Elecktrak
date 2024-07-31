// import AdminLogin from './components/AdminLogin';
// import { Dashboard } from './components/DashBoard';
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import React from "react";
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
