import React from "react";
import { GrCircleInformation } from "react-icons/gr";

interface variableDescriptionProps {
  title: string;
  description: string;
}

export default function VariableDescription(props: variableDescriptionProps) {
  return (
    <div className="bg-dashboardButtonBg rounded-b-lg p-9">
      <div className="flex gap-3 text-gray-100 mb-3">
        <p className="text-2xl font-medium">{props.title}</p>
        <GrCircleInformation className="mt-2" />
      </div>
      <p className="text-dashboardGraphText font-light">{props.description}</p>
    </div>
  );
}
