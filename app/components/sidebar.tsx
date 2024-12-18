"use client";
import React, { useState } from "react";
import { sidebarItems } from "@/lib/items";
import UserIcon from "./userIcon";

export default function Sidebar() {
  const [active, setActive] = useState<string>("home");

  return (
    <div className="flex flex-col justify-between py-8 h-screen w-20 items-center">
      <div className="flex flex-col text-button gap-7">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative flex items-center justify-center w-10 h-10 rounded-lg 
                      transition-colors ${
                        active === item.id
                          ? "bg-gray-800 border border-gray-600 text-gray-100"
                          : "hover:bg-gray-700 hover:text-gray-200"
                      } text-2xl font-bold`}
          >
            {item.icon}
          </button>
        ))}
      </div>
      <UserIcon />
    </div>
  );
}
