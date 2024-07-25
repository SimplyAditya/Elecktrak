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

export const NavbarSide = ({ changeOnHover }) => {
  const naviagte = useNavigate();
  const redirect = (route) => {
    naviagte(`/${route}`);
  };
  return (
    <>
      <div
        onMouseEnter={changeOnHover}
        className="h-screen w-fit p-4 px-2 bg-transparent"
      >
        <div className="h-full w-full flex flex-col gap-3 justify-around">
          <div className="bg-white text-dashboardBlue p-4 px-4 text-3xl rounded-2xl flex justify-center items-center">
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <div className="bg-white h-3/4 p-2 py-4  flex flex-col justify-between gap-2 text-xl items-center rounded-2xl">
            <div className="flex flex-col gap-2">
              <div
                onClick={() => redirect("home")}
                className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl"
              >
                <FontAwesomeIcon icon={faChartArea} />
              </div>
              <div
                onClick={() => redirect("floor")}
                className="bg-dashboardBlue text-white text-2xl p-2 px-4 rounded-2xl"
              >
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div
                onClick={() => redirect("devicemonitoring")}
                className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl"
              >
                <FontAwesomeIcon icon={faGauge} />
              </div>
              <div
                onClick={() => redirect("twinning")}
                className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl"
              >
                <FontAwesomeIcon icon={faWindowRestore} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
                <FontAwesomeIcon icon={faGear} />
              </div>
              <div
                onClick={() => redirect("")}
                className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
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
