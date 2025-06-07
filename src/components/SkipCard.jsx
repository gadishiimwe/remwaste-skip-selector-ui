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

  // Zoomed-in styles
  const imageHeight = zoomed ? "h-56 sm:h-64 lg:h-72" : "h-32";
  const titleSize = zoomed ? "text-2xl" : "text-lg";
  const priceSize = zoomed ? "text-3xl" : "text-2xl";

  return (
    <div
      className={`relative bg-[#23262F] rounded-xl shadow-md p-6 flex flex-col items-center border transition-all duration-300 w-full h-full ${
        isSelected ? "border-blue-500" : "border-gray-700"
      }`}
    >
      <div className={`relative w-full ${imageHeight} mb-4 flex items-center justify-center bg-[#181A20] rounded-lg overflow-hidden`}>
        <img
          src={selectedImage}
          alt={skip.name}
          className="object-contain w-full h-full"
        />
        <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
          {yard} Yards
        </span>
      </div>
      <h2 className={`${titleSize} font-bold mb-1 text-white`}>{yard} Yard Skip</h2>
      <p className="text-xs text-gray-400 mb-2">{skip.hire_period_days} day hire period</p>
      <p className={`${priceSize} font-bold mb-4 text-purple-300`}>£{skip.price_before_vat ?? "N/A"}</p>
      {Number(yard) >= 10 && (
        <div className="flex items-center text-yellow-400 text-xs mb-2">
          <AlertTriangle className="w-4 h-4 mr-1" />
          Not Allowed On The Road
        </div>
      )}
      <button
        className={`w-full py-3 rounded-lg font-semibold mt-auto flex items-center justify-center gap-2 transition-all ${
          isSelected
            ? "bg-blue-600 text-white"
            : "bg-gray-700 text-gray-200 hover:bg-blue-700 hover:text-white"
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
  );
};

export default SkipCard;
