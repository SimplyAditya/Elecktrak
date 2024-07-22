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
  faCaretLeft,
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
    },
  ];
  const charts = [
    {
      title: "Consumption",
      icon: <FontAwesomeIcon icon={faBatteryQuarter} />,
      charts: [
        {
          title: "Electricity",
          checked: false,
        },
        {
          title: "Water",
          checked: false,
        },
        {
          title: "Gas",
          checked: false,
        },
        {
          title: "Power",
          checked: false,
        },
        {
          title: "HVAC",
          checked: false,
        },
      ],
    },
    {
      title: "Cost",
      icon: <FontAwesomeIcon icon={faCoins} />,
      charts: [
        {
          title: "Electricity",
          checked: false,
        },
        {
          title: "Water",
          checked: false,
        },
        {
          title: "Gas",
          checked: false,
        },
        {
          title: "Power",
          checked: false,
        },
        {
          title: "HVAC",
          checked: false,
        },
      ],
    },
    {
      title: "Enviornmental Impact",
      icon: <FontAwesomeIcon icon={faSun} />,
      charts: [
        {
          title: "Solar Energy",
          checked: false,
        },
        {
          title: "Energy Efficiency",
          checked: false,
        },
        {
          title: "Carbon Footprint",
          checked: false,
        },
        {
          title: "Air Quality",
          checked: false,
        },
        {
          title: "Power Cuts",
          checked: false,
        },
      ],
    },
    {
      title: "Prediction",
      icon: <FontAwesomeIcon icon={faLaptop} />,
      charts: [
        {
          title: "Elec. Consumption",
          checked: false,
        },
        {
          title: "Water Consumption",
          checked: false,
        },
        {
          title: "Air Quality Index",
          checked: false,
        },
        {
          title: "Carbon Emission",
          checked: false,
        },
        {
          title: "Production",
          checked: false,
        },
      ],
    },
  ];
  const [chartsState, setChartsState] = useState(charts);

  const changeCharts = (chartIndex, categoryIndex) => {
    setChartsState((prevState) =>
      prevState.map((chart, i) =>
        i === chartIndex
          ? {
              ...chart,
              charts: chart.charts.map((category, j) =>
                j === categoryIndex
                  ? { ...category, checked: !category.checked }
                  : category
              ),
            }
          : chart
      )
    );
  };
  // useEffect(()=>{
  //   localStorage.setItem("charts",JSON.stringify(charts))
  // },[charts])

  return (
    <>
      <div className="w-full h-full overflow-y-auto rounded-2xl bg-backg flex gap-2 p-4 pt-2">
        <div className="flex flex-col flex-grow h-full gap-1">
          {!chartsCollapsible && (
            <div
              id="div1"
              onClick={() => setChartsCollapsible(true)}
              className="h-fit w-full rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 flex justify-between items-center"
            >
              <h1 className="font-bold text-xl">Charts</h1>
              <div>
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
          )}
          {chartsCollapsible && (
            <div
              id="div1"
              className="h-fit w-full rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 pb-2 flex flex-col justify-between items-center"
            >
              <div className="flex items-center h-fit justify-end w-full">
                <button onClick={() => setChartsCollapsible(false)}>
                  Close
                </button>
              </div>
              <div className="flex justify-between items-center w-full">
                {chartsState.map((eachChart, chartIndex) => (
                  <div className="flex flex-col items-start w-2/6 ps-2 py-2">
                    <div className="flex items-center text-md">
                      {eachChart.icon}
                      &nbsp; {eachChart.title}
                    </div>
                    <div className="border-2 w-full ps-2 rounded-lg">
                      {eachChart.charts.map((category, index) => (
                        <div className="flex gap-5 items-center justify-start pt-2">
                          <input
                            checked={category.checked}
                            onChange={() => changeCharts(chartIndex, index)}
                            type="checkbox"
                          />
                          {category.title}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div
            id="div3"
            className={`rounded-[20px] mt-2 bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 pb-2 flex justify-center items-center outfit-font text-5xl flex grow`}
          >
            Dashboard
          </div>
        </div>
        <div className="w-fit h-full">
          {!cardsCollapsible && (
            <div
              id="div2"
              onClick={() => setCardsCollapsible(true)}
              className="h-full w-fit rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-2 py-6 flex flex-col justify-start items-center outfit-font"
            >
              <div>
                <FontAwesomeIcon icon={faCaretLeft} />
              </div>
              <h1 className="font-bold text-xl vertical-text">Cards</h1>
            </div>
          )}
          {cardsCollapsible && (
            <div
              id="div2"
              className="h-full w-full rounded-[20px] bg-white shadow-md drop-shadow-sm overflow-y-auto shadow-slate-300 text-dashboardBlue px-2 py-4 flex flex-col justify-start items-center"
            >
              <div className="flex justify-end w-11/12">
                <FontAwesomeIcon
                  className="px-2  pt-2 pb-2"
                  onClick={() => setCardsCollapsible(false)}
                  icon={faXmark}
                />
              </div>
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
        </div>
      </div>
    </>
  );
};
