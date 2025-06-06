import React, { useState } from "react";
import SkipCard from "./SkipCard";
import { X } from "lucide-react";

const SkipSelector = ({ skips, showPrompt }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [comparisonSkips, setComparisonSkips] = useState([]);
  const total = skips.length;

  const handleSelect = (index) => {
    if (compareMode) {
      setComparisonSkips(prev => {
        if (prev.includes(index)) {
          return prev.filter(i => i !== index);
        }
        if (prev.length < 2) {
          return [...prev, index];
        }
        return prev;
      });
    } else {
      setSelectedIndex(prev => (prev === index ? null : index));
      if (showPrompt) {
        const skip = skips[index];
        showPrompt(
          `You have selected the ${[4, 6, 8, 10, 12, 14, 16, 20, 40][index % 9]} Yard Skip for $${skip.price_before_vat} (${skip.hire_period_days} day hire)`,
          "Continue",
          () => showPrompt("Proceeding to checkout...", "", null)
        );
      }
    }
  };

  const handleContinue = () => {
    if (selectedIndex !== null && showPrompt) {
      const skip = skips[selectedIndex];
      showPrompt(
        `Proceeding with the ${[4, 6, 8, 10, 12, 14, 16, 20, 40][selectedIndex % 9]} Yard Skip for $${skip.price_before_vat}.`,
        "",
        null
      );
    }
  };

  const toggleCompareMode = () => {
    setCompareMode(prev => !prev);
    setComparisonSkips([]);
    setSelectedIndex(null);
  };

  const isSelected = (index) => {
    return compareMode ? comparisonSkips.includes(index) : selectedIndex === index;
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-300">
          {compareMode ? "Compare Skip Sizes" : "Available Skip Sizes"}
        </h2>
        <button
          onClick={toggleCompareMode}
          className={`px-4 py-2 rounded-lg transition-colors ${
            compareMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          {compareMode ? "Exit Compare Mode" : "Compare Skips"}
        </button>
      </div>

      {compareMode && comparisonSkips.length > 0 && (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
          <p className="text-sm text-gray-300">
            {comparisonSkips.length}/2 skips selected for comparison
          </p>
          <button
            onClick={() => setComparisonSkips([])}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips.map((skip, index) => (
          <SkipCard
            key={skip.id}
            skip={{ ...skip, total }}
            index={index}
            isSelected={isSelected(index)}
            onSelect={() => handleSelect(index)}
          />
        ))}
      </div>

      {!compareMode && (
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="px-6 py-3 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
            onClick={() => showPrompt && showPrompt("Going back...")}
          >
            Back
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition text-white ${
              selectedIndex !== null
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-700 cursor-not-allowed"
            }`}
            disabled={selectedIndex === null}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      )}

      {compareMode && comparisonSkips.length === 2 && (
        <div className="mt-8 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Comparison Summary</h3>
          <div className="grid grid-cols-2 gap-6">
            {comparisonSkips.map((index) => {
              const skip = skips[index];
              const yard = [4, 6, 8, 10, 12, 14, 16, 20, 40][index % 9];
              return (
                <div key={index} className="space-y-2">
                  <h4 className="text-lg font-medium">{yard} Yard Skip</h4>
                  <p className="text-sm text-gray-400">
                    Price: ${skip.price_before_vat} + VAT
                  </p>
                  <p className="text-sm text-gray-400">
                    Hire Period: {skip.hire_period_days} days
                  </p>
                  <p className="text-sm text-gray-300">{skip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelector;
