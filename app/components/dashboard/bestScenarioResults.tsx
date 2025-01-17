"use client";
import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { bestScenarioResultsItems } from "@/lib/items";

export default function BestScenarioResults() {
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <div className="p-1">
      <div className="flex justify-between text-lime-300">
        <div className="flex gap-2.5 text-2xl">
          <HiSparkles className="mt-1" />
          <p className="font-medium"> Best Scenario Results</p>
        </div>
        <button
          className="py-2 px-3 border border-lime-300 rounded-full hover:border-lime-500 hover:text-lime-500 transition-colors"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {collapse ? (
        <div className="mt-3 p-1 text-lime-400 flex flex-col gap-4">
          {bestScenarioResultsItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between rounded-md py-3 px-4 border border-lime-600"
            >
              <p>{item.content}</p>
              <BsThreeDots className="text-xl mt-0.5 hover:text-lime-600 hover:cursor-pointer transition-colors" />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
