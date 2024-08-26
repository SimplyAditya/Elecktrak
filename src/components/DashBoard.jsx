import React, { useState } from "react";
import { NavbarSide } from "./Navbar/Navbar-side";
import { NavbarTop } from "./Navbar/Navbar-top";
import { Outlet, useNavigate } from "react-router-dom";
import { NavbarSideLong } from "./Navbar/Navbar-side-detailed";
import LogOutBox from "./LogOutBox";

export const Dashboard = () => {
  const [navbar, setNavbar] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigator=useNavigate();
  const handleMouseEnter = () => {
    if (!navbar) {
      setNavbar(true);
    }
  };

  const handleMouseExit = () => {
    setNavbar(false);
  };
  console.log(localStorage.getItem("jwt"))
  if(localStorage.getItem("jwt")!=="aabcd"){
    return(

      navigator("/")
    )
  }
  else{
    return (
      <>
        <div className="w-full h-full flex bg-dashboardBlue">
          {showLogout && <LogOutBox handleClick={setShowLogout} />}
          {navbar && (
            <NavbarSideLong
              changeOnHover={handleMouseExit}
              logoutBox={setShowLogout}
            />
          )}
          <NavbarSide changeOnHover={handleMouseEnter} />
          <div className="h-screen flex-grow flex flex-col">
            <NavbarTop />
            <div className="flex-grow overflow-auto bg-white me-2 mb-4 rounded-2xl">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
};
