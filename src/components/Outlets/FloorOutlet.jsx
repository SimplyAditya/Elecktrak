import { faCaretLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FloorOutlet = () => {

  const [sideCollapsible, setsideCollapsible] = useState(false);


  return ( 
    <div className="w-full h-full overflow-y-auto rounded-2xl bg-white flex flex-wrap p-4 pt-2 justify-end items-start text-5xl outfit-font text-dashboardBlue">
    {!sideCollapsible && (
      <div 
      id = "divv"
      onClick={() => setsideCollapsible(true)}
      className="h-full w-fit rounded-[20px] bg-white shadow-md gap-3 drop-shadow-sm shadow-slate-300 text-dashboardBlue px-2 py-2 flex flex-col justify-start items-end outfit-font  ">
      <div >
        <FontAwesomeIcon className="h-4 w-4 justify-start items-center" icon={faCaretLeft}/>
      </div>
      <h1 className=" text-xl font-bold vertical-text"> Appliances </h1>
      
      </div>
    )}

    {sideCollapsible && (
      <div id = "divv" className="w-3/12 h-full rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-2 py-2 flex flex-col justify-shart items-start">
      <div className="flex justify-end w-11/12">
      <FontAwesomeIcon
                 className="h-4 w-4 pt-5 pe-1"
                  onClick={() => setsideCollapsible(false)}
                  icon={faXmark}/>
      </div>
      </div>
    )}

    </div>
        
  );
};
