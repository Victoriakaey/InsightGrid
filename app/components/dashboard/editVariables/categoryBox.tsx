"use client";
import { categoryItems } from "@/lib/items";
import React, { useState } from "react";
import Categories from "./categories";

export default function CategoryBox() {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="mt-4 px-1 py-2 border border-dashboardButtonBorder bg-dashboardButtonBg/50 rounded-lg">
      <div className="flex flex-col gap-6 p-5">
        {categoryItems.map((item) => (
          <Categories key={item.id} id={item.id} items={item.variables} />
        ))}
      </div>
      <div></div>
    </div>
  );
}
