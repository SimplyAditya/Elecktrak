import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea,faBell, faBuilding, faGauge, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import circular_img from "../../assets/circular_img.png"
import { useLocation } from "react-router-dom";

export const NavbarTop=()=>{
    const location =useLocation();

    const getHeading=(pathname)=>{
        switch(pathname){
            case "/home":
                return "Dashboard";
            case "/floor":
                return "Floor Map";
            case "/devicemonitoring":
                return "Real Time Monitoring"
            case "/twinning":
                return "Device Twinning";
            default:
                return "Dashboard";
        }
    }
    const getIcon=(pathname)=>{
        switch(pathname){
            case "/home":
                return <FontAwesomeIcon icon={faChartArea} />;
            case "/floor":
                return <FontAwesomeIcon icon={faBuilding} />;
            case "/devicemonitoring":
                return <FontAwesomeIcon icon={faGauge} />;
            case "/twinning":
                return <FontAwesomeIcon icon={faWindowRestore} />;
            default:
                return "Dashboard";
        }
    }
    return(
        <>
        <div className="w-full h-fit p-4 py-6 text-4xl flex justify-between items-center text-white">
        <div className="flex gap-5 items-center">
        {getIcon(location.pathname)}
        <h1 className="font-semibold outfit-font">{getHeading(location.pathname)}</h1>
        </div>
        <div className="flex items-center gap-6">
        <input className="rounded-lg px-6 py-2 text-lg text-black focus:outline-none" placeholder="Search">
        </input>
        <FontAwesomeIcon icon={faBell} />
        <img src={circular_img} alt="avatar" className="w-10 ">
        </img>
        </div>
        </div>
        </>
    )
}