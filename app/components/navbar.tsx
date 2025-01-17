"use client";
import React, { useState } from "react";
import { navbarItems } from "@/lib/items";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState<string>("charging-stations");

  return (
    <div className="flex h-[5.4rem] w-full items-center justify-between text-button px-4 select-none ">
      <div className="flex gap-2">
        {navbarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative flex items-center justify-center py-2 px-5 rounded-lg 
            transition-colors ${
              active === item.id
                ? "bg-gray-800 border border-gray-600 text-gray-100"
                : "hover:bg-gray-700 hover:text-gray-200 text-gray-400"
            } font-light `}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex gap-3 border border-buttonBorder text-gray-300 rounded-lg w-64 py-2 px-3">
        <FaSearch className="mt-1" />
        <input placeholder="Search" className="bg-black/0 outline-none"></input>
      </div>
    </div>
  );
}
