import React from "react";
import { FiPlus } from "react-icons/fi";

export default function Indicator() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <p className="text-2xl font-medium"> Key Performance Indicators </p>
        <button className="flex rounded-md border border-dashboardButtonBorder py-1 px-2 gap-2">
          <p className="font-light">Variables</p>
          <FiPlus className="text-lg mt-0.5" />
        </button>
      </div>
    </div>
  );
}
