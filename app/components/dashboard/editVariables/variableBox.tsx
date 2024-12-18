"use client";
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

interface variableBoxProps {
  title: string;
}

export default function VariableBox(props: variableBoxProps) {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <div className="px-1 mt-4 py-3 bg-lime-950/20 border border-lime-900 rounded-lg">
      <div className="flex justify-between px-4">
        <div className="flex gap-2.5 text-2xl">
          <p className="font-medium text-lime-400/80">
            {" "}
            {props.title} Variables{" "}
          </p>
        </div>
        <button
          className="py-2 px-3 border border-lime-400/80 rounded-full hover:border-lime-300 hover:text-lime-500 transition-colors"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <p></p>
    </div>
  );
}
