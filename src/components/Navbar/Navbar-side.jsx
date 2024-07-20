import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faEnvelope,
  faChartArea,
  faBuilding,
  faGauge,
  faWindowRestore,
  faGear
} from "@fortawesome/free-solid-svg-icons";

export const NavbarSide = () => {
  return (
    <>
      <div className="h-screen w-fit p-4 px-2 bg-transparent">
        <div className="h-full w-full flex flex-col gap-3 justify-around">
          <div className="bg-white text-dashboardBlue p-4 px-4 text-3xl rounded-2xl flex justify-center items-center">
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <div className="bg-white h-3/4 p-2 py-4  flex flex-col justify-between gap-2 text-xl items-center rounded-2xl">
            <div className="flex flex-col gap-2">
            <button className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
              <FontAwesomeIcon icon={faChartArea} />
            </button>
            <button className="bg-dashboardBlue text-white text-2xl p-2 px-4 rounded-2xl">
              <FontAwesomeIcon icon={faBuilding} />
            </button>
            <button className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
              <FontAwesomeIcon icon={faGauge} />
            </button>
            <button className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
            <FontAwesomeIcon icon={faWindowRestore} />
            </button>
            </div>
            <button className="bg-dashboardBlue text-white text-2xl p-2 px-3 rounded-2xl">
            <FontAwesomeIcon icon={faGear} />
            </button>
          </div>
          <div className="bg-white text-dashboardBlue p-4 px-5 text-3xl rounded-2xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
    </>
  );
};
