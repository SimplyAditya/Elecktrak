import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faPlus,
  faXmark,
  faCaretLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { charts } from "../staticData/chartsData";

export const DashBoardOutlet = () => {
  const [chartsCollapsible, setChartsCollapsible] = useState(
    JSON.parse(localStorage.getItem("chartsState")) || false
  );
  const [cardsCollapsible, setCardsCollapsible] = useState(
    JSON.parse(localStorage.getItem("cardsState")) || false
  );

  useEffect(() => {
    localStorage.setItem("chartsState", JSON.stringify(chartsCollapsible));
  }, [chartsCollapsible]);

  useEffect(() => {
    localStorage.setItem("cardsState", JSON.stringify(cardsCollapsible));
  }, [cardsCollapsible]);

  let cards = [
    {
      id: 1,
      cardTitle: "Carbon Footprint",
      stats: {
        overall: {
          val: "1500 metric Tons",
          stats: "12% increase from last year",
        },
        "Last 24 Hours": {
          val: "10 metric Tons",
          stats: "9% less than previous day",
        },
        "Last Month": {
          val: "420 metric Tons",
          stats: "12% less than previous Month",
        },
      },
      range: ["overall", "Last 24 Hours", "Last Month"],
      metrics: "CO2/ year",
    },
    {
      id: 2,
      cardTitle: "Electricity Consumption",
      stats: {
        overall: {
          val: "24.6 kWh",
          stats: "14% increase from last year",
        },
        "Last 24 Hours": {
          val: "1 kWh",
          stats: "19% less than previous day",
        },
        "Last Month": {
          val: "33 kWh",
          stats: "11% less than previous Month",
        },
      },
      range: ["overall", "Last 24 Hours", "Last Month"],
      metrics: "kWh",
    },
    {
      id: 3,
      cardTitle: "Electricity Cost",
      stats: {
        overall: {
          val: "7,00,000 INR",
          stats: "8% increase from last year",
        },
        "Last 24 Hours": {
          val: "15,000 INR",
          stats: "2% less than previous day",
        },
        "Last Month": {
          val: "4,70,000 INR",
          stats: "12% less than previous Month",
        },
      },
      range: ["overall", "Last 24 Hours", "Last Month"],
      metrics: "INR",
    },
  ];

  const [chartsState, setChartsState] = useState(charts);
  const [cardsState, setCardsState] = useState(cards);
  const [selectedTitles, setSelectedTitles] = useState(
    cardsState.reduce(
      (acc, card) => ({ ...acc, [card.id]: card.cardTitle }),
      {}
    )
  );
  const [selectedRanges, setSelectedRanges] = useState(
    cardsState.reduce((acc, card) => ({ ...acc, [card.id]: card.range[0] }), {})
  );

  const handleTitleChange = (id, newTitle) => {
    setSelectedTitles((prev) => ({ ...prev, [id]: newTitle }));
  };

  const handleRangeChange = (id, newRange) => {
    setSelectedRanges((prev) => ({ ...prev, [id]: newRange }));
  };

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

  const addCard = (cardId) => {
    const card = cards.find((card) => card.id === cardId);
    const newCard = {
      ...card,
      id: `${cardsState.length * Math.random()} + 1`,
      disabled: true,
    };
    setCardsState([...cardsState, newCard]);
    setSelectedTitles((prev) => ({ ...prev, [newCard.id]: newCard.cardTitle }));
    setSelectedRanges((prev) => ({ ...prev, [newCard.id]: newCard.range[0] }));
  };

  const deleteCard = (cardId) => {
    const newCards = cardsState.filter((card) => card.id !== cardId);

    setCardsState(newCards);
  };

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
                  <div
                    key={`chart-${chartIndex}`}
                    className="flex flex-col items-start w-2/6 ps-2 py-2"
                  >
                    <div
                      key={`chart-title-${chartIndex}`}
                      className="flex items-center text-md"
                    >
                      {eachChart.icon}
                      &nbsp; {eachChart.title}
                    </div>
                    <div className="border-2 w-full ps-2 rounded-lg">
                      {eachChart.charts.map((category, index) => (
                        <div
                          id={`category-${chartIndex}-${index}`}
                          className="flex gap-5 items-center justify-start pt-2 check"
                        >
                          <input
                            checked={category.checked}
                            onChange={() => changeCharts(chartIndex, index)}
                            type="checkbox"
                            className="rounded"
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
            className={`rounded-[20px] mt-2 bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-6 py-4 pb-2 flex justify-center items-center outfit-font text-5xl flex-grow`}
          >
            Dashboard
          </div>
        </div>
        <div className="w-fit h-full">
          {!cardsCollapsible && (
            <div
              id="div2"
              onClick={() => setCardsCollapsible(true)}
              className="h-full w-fit rounded-[20px] bg-white shadow-md gap-4 drop-shadow-sm shadow-slate-300 text-dashboardBlue px-2 py-6 flex flex-col justify-start items-center outfit-font"
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
              className="h-full w-full rounded-[20px] bg-white shadow-md drop-shadow-sm shadow-slate-300 text-dashboardBlue px-1 py-4 flex flex-col justify-start items-center gap-2"
            >
              <div className="flex justify-between w-11/12">
                <div className="flex items-center text-xl font-bold">Cards</div>
                <FontAwesomeIcon
                  className="px-2 pt-2 pb-2"
                  onClick={() => setCardsCollapsible(false)}
                  icon={faXmark}
                />
              </div>
              <div className="w-11/12 h-full overflow-y-auto rounded-xl">
                {cardsState.map((card) => {
                  const currentCard = cardsState.find(
                    (c) => c.cardTitle === selectedTitles[card.id]
                  );
                  const currentStats =
                    currentCard.stats[selectedRanges[card.id]];

                  return (
                    <div
                      key={card.id}
                      className="w-full bg-dashboardBlue my-2 rounded-xl p-2 py-4 flex flex-col"
                    >
                      <div className="flex gap-3 items-center">
                        <select
                          value={selectedTitles[card.id]}
                          onChange={(e) =>
                            handleTitleChange(card.id, e.target.value)
                          }
                          className="w-7/12 rounded-md"
                        >
                          {cards.map((eachCard) => (
                            <option
                              key={eachCard.id}
                              value={eachCard.cardTitle}
                            >
                              {eachCard.cardTitle}
                            </option>
                          ))}
                        </select>
                        <select
                          value={selectedRanges[card.id]}
                          onChange={(e) =>
                            handleRangeChange(card.id, e.target.value)
                          }
                          className="rounded-md w-1/3"
                        >
                          {currentCard.range.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        <button
                          onClick={() => addCard(card.id)}
                          className="text-white"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <div className="text-white text-2xl pt-2 ps-2 flex justify-between w-full">
                        {currentStats.val}
                        {card.disabled && (
                          <button
                            onClick={() => deleteCard(card.id)}
                            className="text-white"
                          >
                            <FontAwesomeIcon
                              className="text-base"
                              icon={faTrash}
                            />
                          </button>
                        )}
                      </div>
                      <div className="text-white text-xl ps-2">
                        {currentCard.metrics}
                      </div>
                      <div className="text-white text-sm pt-2 ps-2">
                        {currentStats.stats}
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
