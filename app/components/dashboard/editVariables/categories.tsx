"use client";
import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { FiPlus, FiCheck } from "react-icons/fi";

interface categoriesProps {
  id: number;
  items: string[];
}

export default function Categories(props: categoriesProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl font-medium text-gray-300">
        Variable Category {props.id}
      </p>
      <div className="flex flex-wrap gap-4">
        {props.items.map((item, index) => (
          <div
            key={index}
            className="flex gap-10 px-4 py-2 rounded-full border border-white text-dashboardGraphText hover:text-lime-400/80 hover:border-lime-400/80 transition-colors"
          >
            <p className="font-light ">{item}</p>
            <div className="flex gap-1">
              <HiSparkles className="mt-1" />
              {clicked ? (
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
