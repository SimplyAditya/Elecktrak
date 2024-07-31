import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faEnvelope,
  faChartArea,
  faBuilding,
  faGauge,
  faWindowRestore,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const NavbarSideLong = ({ changeOnHover, logoutBox }) => {
  const naviagte = useNavigate();
  const redirect = (route) => {
    naviagte(`/${route}`);
  };

  const buttonClassString =
    "bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl flex items-center justify-start gap-2 hover:bg-[#056E6E] hover:shadow-md hover:shadow-black";
  return (
    <>
      <div
        onMouseLeave={changeOnHover}
        className="fixed z-30 h-screen w-fit p-4 px-2 pe-4 bg-dashboardBlue outfit-font drop-shadow-2xl shadow-2xl backdrop-blur-3xl backdrop-brightness-50 show-box"
      >
        <div className="h-full w-full flex flex-col gap-3 justify-around">
          <div className="text-white p-4 px-4 text-4xl rounded-2xl flex justify-center items-center">
            <FontAwesomeIcon className="text-blue-700" icon={faBolt} /> &nbsp;{" "}
            <h1 className="font-semibold hover:text-gray-300">Electrak</h1>
          </div>
          <div className="bg-white h-3/4 p-2 py-4  flex flex-col justify-between gap-2 text-xl items-center rounded-2xl">
            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={() => redirect("home")}
                className={buttonClassString}
              >
                <FontAwesomeIcon icon={faChartArea} /> &nbsp;{" "}
                <h1 className="font-semibold">Dashboard</h1>
              </button>
              <button
                onClick={() => redirect("floor")}
                className={buttonClassString}
              >
                <FontAwesomeIcon icon={faBuilding} /> &nbsp;
                <h1 className="font-semibold">Floor Map</h1>
              </button>
              <button
                onClick={() => redirect("devicemonitoring")}
                className={buttonClassString}
              >
                <FontAwesomeIcon icon={faGauge} />
                &nbsp;
                <h1 className="font-semibold">Real Time</h1>
              </button>
              <button
                onClick={() => redirect("twinning")}
                className={buttonClassString}
              >
                <FontAwesomeIcon icon={faWindowRestore} />
                &nbsp; <h1 className="font-semibold">Twinning</h1>
              </button>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <button className={buttonClassString}>
                <FontAwesomeIcon icon={faGear} />
                &nbsp; <h1 className="font-semibold">Settings</h1>
              </button>
              <button
                onClick={() => logoutBox(true)}
                className={buttonClassString}
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                &nbsp; <h1 className="font-semibold">Log Out</h1>
              </button>
            </div>
          </div>
          <div className="bg-white text-dashboardBlue p-4 px-5 text-3xl rounded-2xl flex items-center hover:bg-gray-300 ">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; <h1 className="font-semibold">Contact Us</h1>
          </div>
        </div>
      </div>
    </>
  );
};
