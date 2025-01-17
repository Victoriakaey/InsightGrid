import React from "react";
import { BsX } from "react-icons/bs";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Drawer(props: DrawerProps) {
  return (
    <div className="w-full">
      {/* Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-[1.3px] z-40 transition-opacity duration-300 ${
          props.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={props.onClose}
      ></div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 px-9 bg-drawerBg border border-dashboardButtonBorder shadow-lg z-50 transform transition-transform duration-300 ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-2 mt-7">
          <p className="text-3xl font-light text-gray-300">{props.title}</p>
          <button onClick={props.onClose} aria-label="Close drawer">
            <BsX className="text-3xl text-gray-400 hover:text-gray-100" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="py-5 overflow-auto flex-1">{props.children}</div>
      </div>
    </div>
  );
}
