import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea,faBell } from "@fortawesome/free-solid-svg-icons";
import circular_img from "../../assets/circular_img.png"

export const NavbarTop=()=>{
    return(
        <>
        <div className="w-full h-fit p-4 py-6 text-4xl flex justify-between items-center text-white">
        <div className="flex gap-5 items-center">
        <FontAwesomeIcon icon={faChartArea} />
        <h1 className="font-semibold outfit-font">DashBoard</h1>
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