"use client";
import React, { useState } from "react";
import { navbarItems } from "@/data/items";
import Searchbox from "./searchbox";

export default function Navbar() {
  const [active, setActive] = useState<string>("charging-stations");

  return (
    <div className="flex h-[5.4rem] w-full items-center justify-between text-button px-4 select-none">
      <div className="flex gap-2">
        {navbarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative flex items-center justify-center py-2 px-5 rounded-lg 
            transition-colors ${
              active === item.id
                ? "bg-gray-800 border border-gray-600 text-gray-100"
                : "hover:bg-gray-700 hover:text-gray-200"
            } font-light `}
          >
            {item.title}
          </button>
        ))}
      </div>
      <Searchbox />
    </div>
  );
}
