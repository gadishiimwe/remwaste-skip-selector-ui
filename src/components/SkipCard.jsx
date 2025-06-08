import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { AlertTriangle, ArrowRight, Check } from "lucide-react";

const SkipCard = ({ skip, index, isSelected, onSelect, zoomed }) => {
  let selectedImage = image2;
  if (index === 0) selectedImage = image1;
  else if (index >= skip.total - 2) selectedImage = image3;

  const yard = skip.yard_size;

  return (
    <div
      className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 transition-all duration-300 w-full h-full ${
        isSelected 
          ? "border-indigo-500 shadow-indigo-500/20" 
          : "border-gray-700/50 hover:border-gray-600/50"
      }`}
    >
      <div className="relative w-full h-64 mb-6 flex items-center justify-center bg-gray-900/50 rounded-xl overflow-hidden group">
        <img
          src={selectedImage}
          alt={skip.name}
          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 right-3 bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-full font-semibold shadow-lg">
          {yard} Yards
        </span>
      </div>

      <div className="w-full space-y-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-1 text-white">{yard} Yard Skip</h2>
          <p className="text-sm text-gray-400">{skip.hire_period_days} day hire period</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold text-indigo-400">£{skip.price_before_vat ?? "N/A"}</p>
        </div>

        {Number(yard) >= 10 && (
          <div className="flex items-center justify-center text-yellow-400 text-sm bg-yellow-400/10 py-2 px-4 rounded-lg">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Not Allowed On The Road
          </div>
        )}

        <button
          className={`w-full py-3.5 rounded-xl font-semibold mt-4 flex items-center justify-center gap-2 transition-all ${
            isSelected
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
              : "bg-gray-700/50 text-gray-200 hover:bg-indigo-600 hover:text-white"
          }`}
          onClick={onSelect}
        >
          {isSelected ? (
            <>
              <Check className="w-5 h-5" /> Selected
            </>
          ) : (
            <>
              Select This Skip <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
