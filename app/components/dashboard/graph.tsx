import React from "react";
import LineChart from "./linechart";

export default function Graph() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-2xl font-medium"> Graphs </p>
      <div className="border border-dashboardButtonBorder bg-dashboardButtonBg p-4 rounded-lg">
        <LineChart />
      </div>
    </div>
  );
}
