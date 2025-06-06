import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { AlertTriangle, ArrowRight, Check, Info } from "lucide-react";

const SkipCard = ({ skip, index, isSelected, onSelect }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  let selectedImage = image2;
  if (index === 0) selectedImage = image1;
  else if (index >= skip.total - 2) selectedImage = image3;

  const yardSizes = [4, 6, 8, 10, 12, 14, 16, 20, 40];
  const yard = yardSizes[index % yardSizes.length];

  useEffect(() => {
    if (isSelected) {
      setShowPrompt(true);
      const timer = setTimeout(() => setShowPrompt(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSelected]);

  return (
    <div
      className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 flex flex-col text-white w-full h-full border transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${
        isSelected 
          ? "border-blue-500 scale-[1.02]" 
          : "border-gray-700 hover:border-gray-600"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
        <img
          src={selectedImage}
          alt={skip.name}
          className={`w-full h-full object-cover object-center transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
          {yard} Yards
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {yard} Yard Skip
      </h2>

      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        <Info className="w-4 h-4" />
        <p>{skip.hirePeriod} – {skip.hire_period_days} day hire period</p>
      </div>

      <div className="flex items-baseline gap-2 mb-3">
        <p className="text-3xl font-bold text-white">
          ${skip.price_before_vat ?? "N/A"}
        </p>
        <p className="text-sm text-gray-400">+ VAT</p>
      </div>

      <p className="text-sm text-gray-300 mb-4 line-clamp-2">{skip.description}</p>

      {yard >= 10 && (
        <div className="flex items-center text-yellow-400 text-sm mb-4 bg-yellow-400/10 p-2 rounded-lg">
          <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>Not allowed on the road - requires special permit</span>
        </div>
      )}

      <button
        className={`mt-auto py-3 w-full rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium ${
          isSelected
            ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20"
            : "bg-gray-800 hover:bg-gray-700 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/20"
        }`}
        onClick={onSelect}
      >
        {isSelected ? (
          <>
            <Check className="w-5 h-5" /> Selected
          </>
        ) : (
          <>
            Select This Skip <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      {isSelected && showPrompt && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 mt-4 p-3 bg-blue-600 text-white rounded-lg text-sm shadow-lg animate-fade-in">
          You have selected the {yard} Yard Skip
        </div>
      )}
    </div>
  );
};

export default SkipCard;
