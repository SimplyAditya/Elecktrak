import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryQuarter,
  faCoins,
  faSun,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

export const charts = [
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
        title: "Gas",
        checked: false,
      },
      {
        title: "Electricity",
        checked: false,
      },
      {
        title: "Water",
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
