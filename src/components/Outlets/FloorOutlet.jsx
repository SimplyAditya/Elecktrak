// components/Outlets/FloorOutlet.js

import React, { useEffect, useState } from "react";
import { faCaretLeft, faCaretRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Appliance Lists
const appliancesForFloors = {
  1: ["Air Conditioner", "Heater", "Refrigerator"],
  2: ["Washing Machine", "Microwave", "Dishwasher"],
  3: ["Oven", "Toaster", "Blender"],
  4: ["Coffee Maker", "Electric Kettle", "Rice Cooker"],
  5: ["Vacuum Cleaner", "Iron", "Fan"],
  6: ["Dryer", "Humidifier", "Space Heater"]
};

// General Appliance List
const generalAppliances = [
  "Air Conditioner",
  "Heater",
  "Refrigerator",
  "Washing Machine",
  "Microwave",
  "Toaster",
  "Blender",
  "Coffee Maker",
  "Vacuum Cleaner",
  "Fan",
  "Dryer",
  "Humidifier",
];

// ApplianceList Component
const ApplianceList = ({ appliances }) => {
  const [checkedState, setCheckedState] = useState(
    appliances.reduce((acc, appliance) => ({ ...acc, [appliance]: false }), {})
  );

  // Handle checkbox change
  const handleCheckboxChange = (appliance) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [appliance]: !prevState[appliance]
    }));
  };

  return (
    <div className="w-11/12 h-full overflow-y-auto rounded-xl">
      {appliances.length > 0 ? (
        <ul className="list-disc pl-5">
          {appliances.map((appliance) => (
            <li key={appliance} className="py-2 text-lg text-dashboardBlue flex items-center">
              <input
                type="checkbox"
                checked={checkedState[appliance]}
                onChange={() => handleCheckboxChange(appliance)}
                className="mr-2"
                id={`checkbox-${appliance}`}
              />
              <label htmlFor={`checkbox-${appliance}`} className="cursor-pointer">
                {appliance}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-dashboardBlue">No appliances available</p>
      )}
    </div>
  );
};

// FloorOutlet Component
const FloorOutlet = () => {
  const [sideCollapsible, setSideCollapsible] = useState(
    JSON.parse(localStorage.getItem("floor-sideState")) || false
  );

  const [floorCollapsible, setFloorCollapsible] = useState(false);
  const [floorOpen, setFloorOpen] = useState(null); // Track the open floor
  const [showGeneralAppliances, setShowGeneralAppliances] = useState(true);

  useEffect(() => {
    localStorage.setItem("floor-sideState", JSON.stringify(sideCollapsible));
  }, [sideCollapsible]);

  const handleFloorToggle = (floor) => {
    setFloorOpen(floorOpen === floor ? null : floor); // Toggle floor
  };

  return (
    <div className="w-full h-full overflow-y-auto rounded-2xl bg-backg flex flex-auto p-4 pt-2 justify-between items-start text-xl outfit-font text-dashboardBlue">
      <div className="h-full w-full flex flex-row gap-2">
        <div className="w-full h-full flex flex-row gap-3">
          {/* Buildings Section */}
          {!floorCollapsible && (
            <div
              id="divvv"
              onClick={() => setFloorCollapsible(true)}
              className="h-full w-fit rounded-[20px] bg-white outfit-font text-dashboardBlue shadow-md gap-4 drop-shadow-sm shadow-slate-300 px-2 py-4 flex flex-col justify-start items-center"
            >
              <div>
                <FontAwesomeIcon
                  className="px-2 pt-2 pb-2"
                  icon={faCaretRight}
                />
                <h1 className="font-bold text-xl vertical-text">Buildings</h1>
              </div>
            </div>
          )}

          {floorCollapsible && (
            <div className="h-full w-3/12 rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-1 py-4 flex flex-col justify-start items-stretch gap-2">
              <div className="flex justify-between">
                <div className="flex items-center text-xl font-bold ms-2">
                  Buildings
                </div>
                <FontAwesomeIcon
                  className="px-2 pt-2 pb-2 me-2"
                  onClick={() => setFloorCollapsible(false)}
                  icon={faXmark}
                />
              </div>
              <div className="w-full h-full overflow-y-auto rounded-xl">
                {[1, 2, 3, 4, 5, 6].map((floor) => (
                  <div key={floor} className="mb-4">
                    <button
                      onClick={() => handleFloorToggle(floor)}
                      className="w-full text-left bg-white p-2 rounded-md shadow-md text-dashboardBlue flex items-center justify-between"
                    >
                      <span className="font-bold">Floor {floor}</span>
                      <FontAwesomeIcon
                        icon={floorOpen === floor ? faXmark : faCaretRight}
                        className="ml-2"
                      />
                    </button>
                    {floorOpen === floor && (
                      <div className="p-2 border-t border-gray-300">
                        <ApplianceList appliances={appliancesForFloors[floor]} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Floor Mapping Section */}
          <div className="w-full h-full overflow-y-auto rounded-2xl bg-white flex flex-grow p-4 pt-2 text-5xl outfit-font justify-center items-center text-dashboardBlue shadow-md drop-shadow-sm shadow-slate-300 me-3">
            Floor Mapping
          </div>
        </div>
      </div>

      {/* Toggle between Appliance Lists */}
      {!sideCollapsible && (
        <div
          onClick={() => setSideCollapsible(true)}
          className="h-full w-fit rounded-[20px] bg-white shadow-md gap-4 drop-shadow-sm shadow-slate-300 text-dashboardBlue px-2 py-6 flex flex-col justify-start items-end outfit-font"
        >
          <div className="flex flex-col items-center gap-4">
            <div>
              <FontAwesomeIcon className="" icon={faCaretLeft} />
            </div>
            <h1 className="text-xl font-bold vertical-text">Appliance</h1>
          </div>
        </div>
      )}

      {sideCollapsible && (
        <div className="h-full w-3/12 rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-1 py-4 flex flex-col justify-start items-center gap-2 overflow-y-auto">
          <div className="w-11/12">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Appliances</div>
              <FontAwesomeIcon
                className="px-2 pt-2 pb-2"
                onClick={() => setSideCollapsible(false)}
                icon={faXmark}
              />
            </div>
            <button
              onClick={() => setShowGeneralAppliances(true)}
              className={`py-2 w-full px-4  flex justify-start items-start rounded-md ${showGeneralAppliances ? 'bg-gray-300' : 'bg-white'} text-dashboardBlue`}
            >
              General Appliances
            </button>
            <button
              onClick={() => setShowGeneralAppliances(false)}
              className={`py-2 w-full px-4 rounded-md ${!showGeneralAppliances ? 'bg-gray-300' : 'bg-white'} text-dashboardBlue`}
            >
              Floor Appliances
            </button>
            <div className="mt-4 flex-grow overflow-y-auto">
              <ApplianceList appliances={showGeneralAppliances ? generalAppliances : appliancesForFloors[1]} /> {/* Default to first floor */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorOutlet;
