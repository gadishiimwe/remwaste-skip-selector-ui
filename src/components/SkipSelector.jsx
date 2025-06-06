import React, { useState } from "react";
import SkipCard from "./SkipCard";

const SkipSelector = ({ skips }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const total = skips.length;

  // Helper to get the correct yard size property
  const getYard = (skip) => skip.yard_size || skip.yards || skip.size || skip.name?.match(/\d+/)?.[0] || "";

  const handleSelect = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  const handleBack = () => {
    setSelectedIndex(null);
  };

  const handleContinue = () => {
    // Implement your continue logic here
    // For now, just alert
    alert("Proceeding to checkout...");
  };

  const selectedSkip = selectedIndex !== null ? skips[selectedIndex] : null;
  const yard = selectedSkip ? getYard(selectedSkip) : "";

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {skips.map((skip, index) => (
          <div key={skip.id} className="w-full max-w-[480px] mx-auto">
            <SkipCard
              skip={{ ...skip, total, yard_size: getYard(skip) }}
              index={index}
              isSelected={selectedIndex === index}
              onSelect={() => handleSelect(index)}
              zoomed
            />
          </div>
        ))}
      </div>
      {/* Sticky full-width bottom bar for selected skip */}
      {selectedSkip && (
        <div className="fixed bottom-0 left-0 w-full z-50 animate-fade-in">
          <div className="w-full bg-gray-900/95 border-t border-gray-700 shadow-xl px-0 py-0">
            <div className="text-xs text-gray-400 text-center px-4 pt-3 pb-1">
              Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
            </div>
            <div className="flex items-center gap-4 max-w-4xl w-full mx-auto px-6 py-4">
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-medium text-white text-xl">{yard} Yard Skip</span>
                <span className="text-blue-400 text-2xl font-medium">£{selectedSkip.price_before_vat}</span>
                <span className="text-gray-300 text-lg font-medium">{selectedSkip.hire_period_days} day hire</span>
              </div>
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelector;
