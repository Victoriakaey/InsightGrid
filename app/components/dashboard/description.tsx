"use client";
import { dashboardDescriptionItems } from "@/lib/items";
import React, { useState } from "react";
import { BsLightningFill } from "react-icons/bs";

export default function Description() {
  const [active, setActive] = useState<string>("history");

  return (
    <div className="flex mt-4 justify-between">
      <div className="flex gap-3">
        <BsLightningFill className="text-2xl mt-2" />
        <p className="text-3xl font-semibold">Charging Station</p>
      </div>
      <div className="flex gap-3 select-none">
        {dashboardDescriptionItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative flex items-center justify-center rounded-md py-1 px-1.5
                transition-colors ${
                  active === item.id
                    ? "border border-gray-400 text-gray-100"
                    : "border border-dashboardButtonBorder bg-dashboardButtonBg"
                } font-bold hover:text-gray-200`}
          >
            {item.buttonItem}
          </button>
        ))}
      </div>
    </div>
  );
}
