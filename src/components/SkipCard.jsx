import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { AlertTriangle, ArrowRight } from "lucide-react";

const SkipCard = ({ skip, index }) => {
    const [showPrompt, setShowPrompt] = useState(false);

    let selectedImage = image2;
    if (index === 0) selectedImage = image1;
    else if (index >= skip.total - 2) selectedImage = image3;

    const yardSizes = [4, 6, 8, 10, 12, 14, 16, 20, 40];
    const yard = yardSizes[index % yardSizes.length];

    const handleSelectSkip = () => {
        setShowPrompt(true);
    };

    useEffect(() => {
        if (showPrompt) {
            const timer = setTimeout(() => {
                setShowPrompt(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showPrompt]);

    return (
        <div className="bg-gray-900 rounded-2xl shadow-xl p-6 flex flex-col text-white w-full h-full border border-gray-700">
            <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
                <img
                    src={selectedImage}
                    alt={skip.name}
                    className="w-full h-full object-cover object-center scale-105"
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-semibold px-3 py-2 rounded-full">
                    {yard} Yards
                </span>
            </div>

            <h2 className="text-2xl font-bold mb-2">{yard} Yard Skip</h2>

            <p className="text-sm text-gray-400 mb-1">
                {skip.hirePeriod} – {skip.hire_period_days} day hire period
            </p>

            <p className="text-2xl font-semibold text-white mb-2">
                ${skip.price_before_vat ?? "N/A"}
            </p>

            <p className="text-sm text-gray-300 mb-3">{skip.description}</p>

            {yard >= 10 && (
                <div className="flex items-center text-yellow-400 text-sm mb-3">
                    <AlertTriangle className="w-4 h-4 mr-1" /> Not allowed on the road
                </div>
            )}

            <button
                className="mt-auto bg-blue-700 text-white py-2 w-full rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2"
                onClick={handleSelectSkip}
            >
                Select This Skip <ArrowRight className="w-4 h-4" />
            </button>

            {showPrompt && (
                <div className="mt-4 p-3 bg-gray-800 text-yellow-300 rounded-lg text-sm">
                    You have selected the {yard} Yard Skip.
                </div>
            )}
        </div>
    );
};

export default SkipCard;
