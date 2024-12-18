"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserIcon() {
  return (
    <div className="">
      <FaUserCircle className="text-2xl text-button hover:text-gray-100 cursor-pointer transition-colors" />
    </div>
  );
}
