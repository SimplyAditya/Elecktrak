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

export const NavbarSide = () => {
  const naviagte = useNavigate();
  const redirect = (route) => {
    naviagte(`/${route}`);
  };
  return (
    <>
      <div className="h-screen w-fit p-4 px-2 bg-transparent">
        <div className="h-full w-full flex flex-col gap-3 justify-around">
          <div className="bg-white text-dashboardBlue p-4 px-4 text-3xl rounded-2xl flex justify-center items-center">
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <div className="bg-white h-3/4 p-2 py-4  flex flex-col justify-between gap-2 text-xl items-center rounded-2xl">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => redirect("home")}
                className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl"
              >
                <FontAwesomeIcon icon={faChartArea} />
              </button>
              <button
                onClick={() => redirect("floor")}
                className="bg-dashboardBlue text-white text-2xl p-2 px-4 rounded-2xl"
              >
                <FontAwesomeIcon icon={faBuilding} />
              </button>
              <button onClick={()=>redirect("devicemonitoring")} className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
                <FontAwesomeIcon icon={faGauge} />
              </button>
              <button onClick={()=>redirect("twinning")} className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
                <FontAwesomeIcon icon={faWindowRestore} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
                <FontAwesomeIcon icon={faGear} />
              </button>
              <button onClick={()=>redirect("")} className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </div>
          </div>
          <div className="bg-white text-dashboardBlue p-4 px-5 text-3xl rounded-2xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
    </>
  );
};
