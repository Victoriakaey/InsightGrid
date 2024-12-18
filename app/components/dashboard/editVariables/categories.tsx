"use client";
import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { FiPlus, FiCheck } from "react-icons/fi";

interface categoriesProps {
  id: number;
  items: string[];
}

export default function Categories(props: categoriesProps) {
  const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        // Remove index if already clicked
        return prevIndexes.filter((i) => i !== index);
      } else {
        // Add index if not clicked
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl font-medium text-gray-300">
        Variable Category {props.id}
      </p>
      <div className="flex flex-wrap gap-4">
        {props.items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex gap-10 px-4 py-2 rounded-full border border-gray-400 text-dashboardGraphText hover:shadow-[0_4px_8px_2px_rgba(163,230,53,0.4)] hover:text-lime-400/80 hover:border-lime-300/90 transition-all ${
              clickedIndexes.includes(index)
                ? "border-lime-300/90 text-lime-400/80"
                : ""
            }`}
          >
            <p className="font-light">{item}</p>
            <div className="flex gap-1">
              <HiSparkles className="mt-1" />
              {clickedIndexes.includes(index) || hoveredIndex === index ? (
                <FiCheck className="mt-1" />
              ) : (
                <FiPlus className="mt-1" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
