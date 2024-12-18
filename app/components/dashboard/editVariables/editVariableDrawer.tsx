"use client";
import React, { useState } from "react";
import { BsLightningFill } from "react-icons/bs";
import Drawer from "../../drawer";
import Content from "./content";

export default function EditVariablesDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <p className="font-light px-1" onClick={() => setDrawerOpen(true)}>
        Edit Variables
      </p>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Edit Variables"
      >
        <Content />
      </Drawer>
    </div>
  );
}
