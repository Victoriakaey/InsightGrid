"use client";
import React, { useState } from "react";
import { BsLightningFill } from "react-icons/bs";
import Drawer from "../drawer";

export default function EditVariablesDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <p className="font-light px-1" onClick={() => setDrawerOpen(true)}>
        Edit Variables
      </p>

      {/* Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Edit Variables"
      >
        <div className="px-2 border border-white">hi</div>
      </Drawer>
    </div>
  );
}
