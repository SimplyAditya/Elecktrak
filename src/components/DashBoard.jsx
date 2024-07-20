import React from "react";
import { NavbarSide } from "./Navbar/Navbar-side";
import { NavbarTop } from "./Navbar/Navbar-top";
import { DashBoardOutlet } from "./Outlets/DashboardOutlet";



export const Dashbaord =()=>{
    return (
        <>
        <div className="w-full h-full flex bg-dashboardBlue">
        <NavbarSide/>
        <div className="h-screen flex-grow flex flex-col">  
            <NavbarTop/>
            <div className="flex-grow bg-white me-2 mb-4 rounded-2xl">
            <DashBoardOutlet/>
            </div>
        </div>
        </div>
        
        </>
    )
}