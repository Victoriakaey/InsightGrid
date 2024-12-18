import React from "react";
import Description from "./description";
import BestScenarioResults from "./bestScenarioResults";
import Graph from "./graph";
import Indicator from "./indicator";

export default function Dashboard() {
  return (
    <div className="flex px-4">
      <div className="flex flex-col gap-6 bg-buttonBg rounded-xl w-full p-4 text-gray-300 border border-buttonBorder">
        <Description />
        <BestScenarioResults />
        <div className="flex px-3 gap-4">
          <Graph />
          <Indicator />
        </div>
      </div>
    </div>
  );
}
