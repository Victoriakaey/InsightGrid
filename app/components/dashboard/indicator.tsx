import React from "react";
import { FiPlus } from "react-icons/fi";
import IndicatorCard from "./indicatorCard";
import { indicatorCardItems } from "@/lib/items";

export default function Indicator() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <p className="text-sm md:text-xl xl:text-2xl font-medium">
          {" "}
          Key Performance Indicators{" "}
        </p>
        <button className="flex rounded-md border border-dashboardButtonBorder py-1 px-2 gap-2">
          <p className="font-light">Variables</p>
          <FiPlus className="text-lg mt-0.5" />
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {indicatorCardItems.map((item) => (
          <IndicatorCard
            key={item.id}
            title={item.title}
            description={item.description}
            data={item.data}
          />
        ))}
      </div>
    </div>
  );
}
