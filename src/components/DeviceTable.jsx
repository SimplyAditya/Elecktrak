import React from "react";

const DeviceTable = () => {
  const parameters = [
    { category: "Electrical", parameter: "Power" },
    { category: "Electrical", parameter: "Voltage" },
    { category: "Electrical", parameter: "Current" },
    { category: "Electrical", parameter: "Frequency" },
    { category: "Electrical", parameter: "Energy Consumption" },
    { category: "Electrical", parameter: "Battery Status" },
    { category: "Operational/Usage", parameter: "Usage Duration" },
    { category: "Operational/Usage", parameter: "Idle Time" },
    { category: "Operational/Usage", parameter: "Operational Time" },
    { category: "Operational/Usage", parameter: "Response Time" },
    { category: "Operational/Usage", parameter: "Efficiency" },
    { category: "Operational/Usage", parameter: "System Load" },
  ];

  return (
    <div className="w-full">
      <table className="w-full h-full border-collapse">
        <thead className="bg-white border text-sm table-fixed">
          <tr>
            <th className="py-1 px-2 border">Category</th>
            <th className="py-1 px-2 border">Parameter</th>
            <th className="py-1 px-2 border">Current</th>
            <th className="py-1 px-2 border">Unit</th>
            <th className="py-1 px-2 border">Timestamp</th>
            <th className="py-1 px-2 border">Data Source</th>
            <th className="py-1 px-2 border">Trend</th>
            <th className="py-1 px-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((item, index) => (
            <tr
              key={index}
              className="text-sm"
              style={{
                backgroundColor:
                  item.category === "Electrical"
                    ? "#D6EFD8" // Light green for Electrical
                    : item.category === "Operational/Usage"
                    ? "#ACE1AF" // Different shade of green for Operational/Usage
                    : "white", // Default color if category is neither
              }}
            >
              <td className="py-1 px-2 border">{item.category}</td>
              <td className="py-1 px-2 border">{item.parameter}</td>
              <td className="py-1 px-2 border"></td>
              <td className="py-1 px-2 border"></td>
              <td className="py-1 px-2 border"></td>
              <td className="py-1 px-2 border"></td>
              <td className="py-1 px-2 border"></td>
              <td className="py-1 px-2 border"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;
