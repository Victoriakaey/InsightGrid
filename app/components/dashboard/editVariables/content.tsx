"use client";
import React, { useState } from "react";
import SearchHeader from "./searchHeader";
import VariableBox from "./variableBox";
import CategoryBox from "./categoryBox";

const variables = ["Primary", "Secondary"];

export default function Content() {
  return (
    <div>
      <SearchHeader />
      <CategoryBox />
      {variables.map((variable, index) => (
        <VariableBox key={index} title={variable} />
      ))}
    </div>
  );
}
