import React, { useState } from "react";
import SkipCard from "./SkipCard";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const SkipSelector = ({ skips }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const total = skips.length;

  // Extract yard size from skip data, handling different property names
  const getYard = (skip) => skip.yard_size || skip.yards || skip.size || skip.name?.match(/\d+/)?.[0] || "";

  const handleSelect = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  const handleBack = () => {
    setSelectedIndex(null);
  };

  const handleContinue = () => {
    // TODO: Implement checkout flow
    alert("Proceeding to checkout...");
  };

  const selectedSkip = selectedIndex !== null ? skips[selectedIndex] : null;
  const yard = selectedSkip ? getYard(selectedSkip) : "";

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {skips.map((skip, index) => (
          <div key={skip.id} className="w-full max-w-[480px] mx-auto transform transition-all duration-300 hover:scale-[1.02]">
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

      {/* Selection summary and actions */}
      {selectedSkip && (
        <div className="fixed bottom-0 left-0 w-full z-50 animate-fade-in">
          <div className="w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 shadow-2xl">
            <div className="text-xs text-gray-400 text-center px-4 pt-3 pb-1">
              Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
            </div>
            <div className="flex items-center gap-6 max-w-4xl w-full mx-auto px-6 py-4">
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="font-semibold text-white text-2xl">{yard} Yard Skip</span>
                <span className="text-indigo-400 text-3xl font-bold">£{selectedSkip.price_before_vat}</span>
                <span className="text-gray-300 text-lg font-medium">{selectedSkip.hire_period_days} day hire</span>
              </div>
              <div className="flex gap-3">
                <button
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition flex items-center gap-2"
                  onClick={handleBack}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition flex items-center gap-2"
                  onClick={handleContinue}
                >
                  Continue
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelector;
