import React from "react";
import { NavbarSide } from "./Navbar/Navbar-side";
import { NavbarTop } from "./Navbar/Navbar-top";
import { Outlet } from "react-router-dom";



export const Dashboard =()=>{
    return (
        <>
        <div className="w-full h-full flex bg-dashboardBlue">
        <NavbarSide/>
        <div className="h-screen flex-grow flex flex-col">  
            <NavbarTop/>
            <div className="flex-grow overflow-auto bg-white me-2 mb-4 rounded-2xl">
            <Outlet/>
            </div>
        </div>
        </div>
        
        </>
    )
}