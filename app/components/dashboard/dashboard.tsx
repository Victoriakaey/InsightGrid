import React from "react";
import Description from "./description";
import BestScenarioResults from "./bestScenarioResults";
// import Graph from "./graph";
// import Indicator from "./indicator";

export default function Dashboard() {
  return (
    <div className="flex px-4 h-[90%]">
      <div className="flex flex-col gap-6 bg-buttonBg rounded-xl w-full px-9 py-3 text-gray-300 border border-buttonBorder">
        <Description />
        <BestScenarioResults />
        {/* <div className="flex flex-col xl:flex-row px-3 gap-8 mb-8">
          <Graph />
          <Indicator />
        </div> */}
      </div>
    </div>
  );
}
