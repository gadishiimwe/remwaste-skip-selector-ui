import React from "react";
import SkipCard from "./SkipCard";

const SkipSelector = ({ skips }) => {
  const total = skips.length;
  const totalAmount = skips.reduce((acc, skip) => acc + (skip.price || 0), 0);


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips.map((skip, index) => (
          <SkipCard key={skip.id} skip={{ ...skip, total }} index={index} />
        ))}
      </div>
      
    </>
  );
};

export default SkipSelector;