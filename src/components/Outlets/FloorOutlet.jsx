import { faCaretLeft, faCaretRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FloorOutlet = () => {
  const [sideCollapsible, setsideCollapsible] = useState(
    JSON.parse(localStorage.getItem("floor-sideState")) || false,
  );

  const [floorCollapsible, setFloorCollapsible] = useState(false);

  useEffect(() => {
    localStorage.setItem("floor-sideState", JSON.stringify(sideCollapsible));
  }, [sideCollapsible]);

  return (
    <div className="w-full h-full overflow-y-auto rounded-2xl bg-backg flex flex-auto p-4 pt-2 justify-between items-start text-xl outfit-font text-dashboardBlue">


    <div className="h-full w-full flex flex-row gap-2">
      <div className="w-full h-full flex flex-row gap-3">
        {!floorCollapsible &&(
          <div
          id = "divvv"
          onClick={()=> setFloorCollapsible(true)}
          className="h-full w-fit rounded-[20px] bg-white outfit-font text-dashboardBlue shadow-md gap-4 drop-shadow-sm shadow-slate-300 px-2 py-4 flex flex-col justify-start items-center">
          <div><FontAwesomeIcon
          className="px-2  pt-2 pb-2"
           icon={faCaretRight} />
          <h1 className="font-bold text-xl vertical-text">
            Buildings 
          </h1>
          
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
          <div className=" w-full h-full overflow-y-auto rounded-xl"></div>
        </div>
      )}
      <div className="w-full h-full overflow-y-auto rounded-2xl bg-white flex flex-grow p-4 pt-2 text-5xl outfit-font justify-center items-center text-dashboardBlue shadow-md drop-shadow-sm shadow-slate-300 me-3">
          Floor Mapping
      </div>

      </div>
    </div>







      {!sideCollapsible && (
        <div
          onClick={() => setsideCollapsible(true)}
          className="h-full w-fit rounded-[20px] bg-white shadow-md gap-4 drop-shadow-sm shadow-slate-300 text-dashboardBlue px-2 py-6 flex flex-col justify-start items-end outfit-font  "
        >
          <div className="flex flex-col items-center gap-4">
            <div>
              <FontAwesomeIcon className="" icon={faCaretLeft} />
            </div>
            <h1 className=" text-xl font-bold vertical-text"> Appliance </h1>
          </div>
        </div>
      )}

      {sideCollapsible && (
        <div className="h-full w-3/12 rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-1 py-4 flex flex-col justify-start items-center gap-2">
          <div className="flex justify-between w-11/12">
            <div className="flex items-center text-xl font-bold">
              Appliances
            </div>
            <FontAwesomeIcon
              className="px-2  pt-2 pb-2"
              onClick={() => setsideCollapsible(false)}
              icon={faXmark}
            />
          </div>
          <div className=" w-11/12 h-full overflow-y-auto rounded-xl"></div>
        </div>
      )}
    </div>
  );
};
