import React from "react";
import LineChart from "./linechart";

export default function Graph() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="md:text-xl xl:text-2xl font-medium"> Graphs </p>
      <div className="mt-2 border border-dashboardButtonBorder bg-dashboardButtonBg p-4 rounded-lg">
        <LineChart />
      </div>
    </div>
  );
}
