import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBatteryQuarter,
  faCoins,
  faSun,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

export const DashBoardOutlet = () => {
  const [chartsCollapsible, setChartsCollapsible] = useState(false);

  return (
    <>
      <div className="w-full h-full rounded-2xl p-4">
        {!chartsCollapsible && (
          <div
            onClick={() => setChartsCollapsible(true)}
            className="h-fit w-3/4 rounded-[20px]  shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 flex justify-between items-center"
          >
            <h1 className="font-bold text-xl">Charts</h1>
            <div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        )}
        {chartsCollapsible && (
          <div className="h-fit w-3/4 rounded-[20px]  shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 flex justify-between items-center">
            <div className="flex flex-col items-start w-1/5 ps-2 py-4">
              <div className="flex items-center text-md">
                <FontAwesomeIcon icon={faBatteryQuarter} />
                &nbsp; Consumption
              </div>
              <div className="border-2 w-full -ms-2 ps-2 rounded-lg">
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Electricity
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Water
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Gas
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Power
                </div>
                <div className="flex gap-5 items-center justify-start py-2">
                  <input type="checkbox" />
                  HVAC
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-1/5 ps-2 py-4">
              <div className="flex items-center text-md">
                <FontAwesomeIcon icon={faCoins} />
                &nbsp; Cost
              </div>
              <div className="border-2 w-full -ms-2 ps-2 rounded-lg">
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Electricity
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Water
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Gas
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Power
                </div>
                <div className="flex gap-5 items-center justify-start py-2">
                  <input type="checkbox" />
                  HVAC
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-1/4 ps-2 py-4">
              <div className="flex items-center text-md">
                <FontAwesomeIcon icon={faSun} />
                &nbsp; Environmental Impact
              </div>
              <div className="border-2 w-full -ms-2 ps-2 rounded-lg">
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Solar Energy
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Energy Efficiency
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Carbon Footprint
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Air Quality
                </div>
                <div className="flex gap-5 items-center justify-start py-2">
                  <input type="checkbox" />
                  Power Cuts
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-2/6 ps-2 py-4">
              <div className="flex items-center justify-between w-full text-md">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLaptop} />
                  &nbsp; Prediction
                </div>
                <button onClick={() => setChartsCollapsible(false)}>
                  Close
                </button>
              </div>
              <div className="border-2 w-full -ms-2 ps-2 rounded-lg">
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Electricity Consumption
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Water Consumption
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Air Quality Index
                </div>
                <div className="flex gap-5 items-center justify-start pt-2">
                  <input type="checkbox" />
                  Carbon Emission
                </div>
                <div className="flex gap-5 items-center justify-start py-2">
                  <input type="checkbox" />
                  Total Production
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};
