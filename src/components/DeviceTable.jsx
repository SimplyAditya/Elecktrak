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
      <table className="w-full h-full border-collapse " style={{border:"2px solid"}}>
        <thead className="bg-white border text-sm table-fixed" style={{border:"2px solid"}}>
          <tr>
            <th className="py-1 px-2 border border-b-2 border-y-0" style={{border:"2px solid"}}>Category</th>
            <th className="py-1 px-2 border border-b-2 border-y-0" style={{border:"2px solid"}}>Parameter</th>
            <th className="py-1 px-2 border" style={{border:"2px solid"}}>Current</th>
            <th className="py-1 px-2 border" style={{border:"2px solid"}}>Unit</th>
            <th className="py-1 px-2 border" style={{border:"2px solid"}}>Timestamp</th>
            <th className="py-1 px-2 border" style={{border:"2px solid"}}>Data Source</th>
            <th className="py-1 px-2 border" style={{border:"2px solid"}}>Trend</th>
            <th className="py-1 px-2 border" style={{border:"2px solid"}}>Status</th>
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
              <td className="py-2 px-2 border" style={{border:"2px solid"}}>{item.category}</td>
              <td className="py-1 px-2 border border-b-2 border-y-0" style={{border:"2px solid"}}>{item.parameter}</td>
              <td className="py-1 px-2 border border-b-2 border-y-0" style={{border:"2px solid"}}></td>
              <td className="py-1 px-2 border border-b-2 border-y-0" style={{border:"2px solid"}}></td>
              <td className="py-1 px-2 border border-x-2 border-y-0" style={{border:"2px solid"}}></td>
              <td className="py-1 px-2 border border-x-2 border-y-0" style={{border:"2px solid"}}></td>
              <td className="py-1 px-2 border border-x-2 border-y-0" style={{border:"2px solid"}}></td>
              <td className="py-1 px-2 border border-x-2 border-y-0" style={{border:"2px solid"}}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;
