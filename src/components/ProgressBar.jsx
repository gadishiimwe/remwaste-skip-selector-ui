import React from "react";
import { Trash2, Package, ShieldCheck, Calendar } from "lucide-react";

const steps = [
  { label: "Waste Type", icon: Trash2 },
  { label: "Select Skip", icon: Package },
  { label: "Permit Check", icon: ShieldCheck },
  { label: "Choose Dates", icon: Calendar },
];

const ProgressBar = ({ currentStep = 2 }) => (
  <nav className="flex items-center justify-center gap-8 py-6 mb-2">
    {steps.map((step, idx) => {
      const Icon = step.icon;
      const isActive = currentStep === idx + 1;
      const isCompleted = currentStep > idx + 1;
      return (
        <div key={step.label} className="flex items-center gap-2">
          <div
            className={`flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-200
              ${isActive ? "border-blue-500 bg-blue-600 text-white" : isCompleted ? "border-blue-400 bg-blue-500 text-white" : "border-gray-700 bg-[#23262F] text-gray-400"}
            `}
          >
            <Icon className="w-5 h-5" />
          </div>
          <span className={`text-sm font-medium ${isActive ? "text-white" : "text-gray-400"}`}>{step.label}</span>
          {idx < steps.length - 1 && (
            <span className="mx-3 w-8 h-0.5 bg-gray-700 rounded-full" />
          )}
        </div>
      );
    })}
  </nav>
);

export default ProgressBar; 