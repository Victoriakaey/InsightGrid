"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { FaRedo } from "react-icons/fa";

export default function SearchHeader() {
  return (
    <div className="flex gap-4">
      <div className="flex gap-3 w-full border border-dashboardButtonBorder bg-dashboardButtonBg/50 text-gray-300 rounded-lg py-2 px-3">
        <FaSearch className="mt-1" />
        <input
          placeholder="Search"
          className="bg-dashboardButtonBg/0 outline-none w-full font-medium"
        ></input>
      </div>
      <div className="flex gap-2 border border-dashboardButtonBorder bg-dashboardButtonBg/50 text-gray-300 rounded-lg py-2 px-7">
        <HiSparkles className="mt-1" />
        <p className="font-medium">Autofill</p>
      </div>
      <button className="flex gap-2 border text-lime-400 border-t-lime-400 border-x-lime-600 border-b-lime-800 bg-lime-800/40 rounded-lg py-2 px-7 ">
        <FaRedo className="mt-1" />
        <p className="font-medium">Rerun</p>
      </button>
    </div>
  );
}
