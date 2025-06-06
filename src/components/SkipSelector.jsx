import React, { useState } from "react";
import SkipCard from "./SkipCard";

const SkipSelector = ({ skips }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const total = skips.length;

  const handleSelect = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index)); // toggle selection
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skips.map((skip, index) => (
        <SkipCard
          key={skip.id}
          skip={{ ...skip, total }}
          index={index}
          isSelected={selectedIndex === index}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </div>
  );
};

export default SkipSelector;
