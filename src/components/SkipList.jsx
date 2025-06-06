import React, { useState } from "react";
import SkipCard from "./SkipCard";

// Mock data example
const skips = [
    {
        name: "Mini Skip",
        hirePeriod: "Short Term",
        hire_period_days: 3,
        price_before_vat: 120,
        description: "Perfect for small clear-outs.",
        total: 6
    },
    {
        name: "Midi Skip",
        hirePeriod: "Standard",
        hire_period_days: 5,
        price_before_vat: 180,
        description: "Ideal for moderate waste disposal.",
        total: 6
    },
    {
        name: "Large Skip",
        hirePeriod: "Extended",
        hire_period_days: 7,
        price_before_vat: 250,
        description: "Great for big projects and renovations.",
        total: 6
    }
];

const SkipList = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {skips.map((skip, index) => (
                <SkipCard
                    key={index}
                    skip={skip}
                    index={index}
                    selectedIndex={selectedIndex}
                    onSelect={setSelectedIndex}
                />
            ))}
        </div>
    );
};

export default SkipList;
