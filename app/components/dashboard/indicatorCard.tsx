import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

interface indicatorCardProps {
  title: string;
  description: string;
  data: string;
}

export default function IndicatorCard(props: indicatorCardProps) {
  return (
    <div className="border border-dashboardButtonBorder bg-dashboardButtonBg p-7 rounded-lg shadow-md w-full ">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold mb-2">{props.title}</h3>
        <BsQuestionCircle className="text-dashboardGraphText mt-1 text-xl" />
      </div>
      <p className="text-gray-400 text-sm mb-4">{props.description}</p>
      <div className="text-4xl mt-12 font-bold flex justify-end">
        {props.data}
      </div>
    </div>
  );
}
