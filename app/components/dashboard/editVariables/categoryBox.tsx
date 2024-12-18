"use client";
import React, { useRef, useState } from "react";
import { categoryItems, hoverDescription } from "@/lib/items";
import { HiSparkles } from "react-icons/hi2";
import { FiPlus, FiCheck } from "react-icons/fi";
import VariableDescription from "./variableDescription";

export default function CategoryBox() {
  const [clickedIndexes, setClickedIndexes] = useState<
    { categoryId: number; index: number }[]
  >([]);
  const [hoveredItem, setHoveredItem] = useState<{
    categoryId: number;
    index: number | null;
    variable: string;
  } | null>(null);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (categoryId: number, index: number) => {
    setClickedIndexes((prevIndexes) => {
      const alreadyClicked = prevIndexes.some(
        (item) => item.categoryId === categoryId && item.index === index
      );

      if (alreadyClicked) {
        // Remove if already clicked
        return prevIndexes.filter(
          (item) => !(item.categoryId === categoryId && item.index === index)
        );
      } else {
        // Add new clicked item
        return [...prevIndexes, { categoryId, index }];
      }
    });
  };

  const handleMouseEnter = (
    categoryId: number,
    index: number,
    variable: string
  ) => {
    hoverTimer.current = setTimeout(() => {
      setHoveredItem({ categoryId, index, variable });
    }, 1500); // Delay of 1.5 seconds
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current); // Clear the timer
    }
    setHoveredItem(null);
  };

  return (
    <div className="mt-4 border border-dashboardButtonBorder bg-dashboardButtonBg/50 rounded-lg">
      <div className="flex flex-col max-h-[27rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-black/0">
        {categoryItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 px-8 py-5">
            <p className="text-xl font-medium text-gray-300">
              Variable Category {item.id}
            </p>
            <div className="flex flex-wrap gap-4">
              {item.variables.map((variable, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(item.id, index)}
                  onMouseEnter={() =>
                    handleMouseEnter(item.id, index, variable)
                  }
                  onMouseLeave={handleMouseLeave}
                  className={`flex gap-12 px-4 py-2 rounded-full border border-gray-400 text-dashboardGraphText hover:shadow-[0_4px_8px_2px_rgba(163,230,53,0.4)] hover:text-lime-400/80 hover:border-lime-300/90 transition-all ${
                    clickedIndexes.some(
                      (clicked) =>
                        clicked.categoryId === item.id &&
                        clicked.index === index
                    )
                      ? "border-lime-300/90 text-lime-400/80"
                      : ""
                  }`}
                >
                  <p className="font-light">{variable}</p>
                  <div className="flex gap-1">
                    <HiSparkles className="mt-1" />
                    {clickedIndexes.some(
                      (clicked) =>
                        clicked.categoryId === item.id &&
                        clicked.index === index
                    ) ||
                    (hoveredItem?.categoryId === item.id &&
                      hoveredItem?.index === index) ? (
                      <FiCheck className="mt-1" />
                    ) : (
                      <FiPlus className="mt-1" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {hoveredItem ? (
        <VariableDescription
          title={hoveredItem.variable}
          description={hoverDescription}
        />
      ) : (
        ""
      )}
    </div>
  );
}
