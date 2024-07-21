import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBatteryQuarter,
  faCoins,
  faSun,
  faLaptop,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const DashBoardOutlet = () => {
  const [chartsCollapsible, setChartsCollapsible] = useState(false);
  const [cardsCollapsible, setCardsCollapsible] = useState(false);
  let cards = [
    {
      cardTitle: "Carbon Footprint",
      range: ["overall", "Last 24 Hours", "Last Month", "Last Year", "Average"],
      Data: "150 metric Tons",
      metrics: "CO2/ year",
      stats: "12% increase from last year",
    },
    {
      cardTitle: "Carbon Footprint",
      range: ["overall", "Last 24 Hours", "Last Month", "Last Year", "Average"],
      Data: "150 metric Tons",
      metrics: "CO2/ year",
      stats: "12% increase from last year",
    },
    {
        cardTitle: "Carbon Footprint",
        range: ["overall", "Last 24 Hours", "Last Month", "Last Year", "Average"],
        Data: "150 metric Tons",
        metrics: "CO2/ year",
        stats: "12% increase from last year",
      }
  ];

  return (
    <>
      <div className="w-full h-full overflow-y-auto rounded-2xl bg-red-700 flex flex-wrap p-4 pt-2">
        {!chartsCollapsible && (
            <div
            id="div1"
            onClick={() => setChartsCollapsible(true)}
            className="h-fit w-3/4 rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 flex justify-between items-center"
            >
            <h1 className="font-bold text-xl">Charts</h1>
            <div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        )}
        {chartsCollapsible && (
          <div id="div1" className="h-fit w-3/4 rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 pb-2 flex justify-between items-center">
            <div className="flex flex-col items-start w-2/6 ps-2 py-4">
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
            <div className="flex flex-col items-start w-2/6 ps-2 py-4">
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
            <div className="flex flex-col items-start w-2/6 ps-2 py-4">
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
                  Elec Consumption
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
        {!cardsCollapsible && (
            <div
            id="div2"
            onClick={() => setCardsCollapsible(true)}
            className="h-fit w-1/4 rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 flex justify-between items-center"
            >
            <h1 className="font-bold text-xl">Cards</h1>
            <div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        )}
        {cardsCollapsible && (
            <div id="div2" className="h-full w-1/4 rounded-[20px] bg-white shadow-md drop-shadow-sm overflow-y-auto shadow-slate-300 text-dashboardBlue px-2 py-4 flex flex-col justify-start items-end">
            <FontAwesomeIcon
              className="px-2  pt-2 pb-6"
              onClick={() => setCardsCollapsible(false)}
              icon={faXmark}
              />
            <div className="">
              {cards.map((card) => {
                  return (
                      <div className="w-full bg-dashboardBlue my-1 rounded-xl p-2 py-4 flex flex-col">
                    <div className="flex gap-3 items-center">
                      <select className="w-7/12 rounded-md">
                        <option>{card.cardTitle}</option>
                      </select>
                      <select className="rounded-md w-1/3">
                        {card.range.map((range) => {
                            return <option>{range}</option>;
                        })}
                      </select>
                      <button className="text-white">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <div className="text-white text-2xl pt-2 ps-2">
                      {card.Data}
                    </div>
                    <div className="text-white text-xl ps-2">
                      {card.metrics}
                    </div>
                    <div className="text-white text-sm pt-2 ps-2">
                      {card.stats}
                    </div>
                  </div>
                );
            })}
            </div>
          </div>
        )}
      <div id="div3" className={`rounded-[20px] mt-2 bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 pb-2 flex justify-between items-center ${cardsCollapsible ? "w-3/4":"flex-grow"}`}>
         Hello
      </div>
        </div>
    </>
  );
};
