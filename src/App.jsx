import React from "react";
import SkipSelector from "./components/SkipSelector";
import useFetchSkips from "./hooks/useFetchSkips";

const App = () => {
  const { skips, loading } = useFetchSkips();

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 shadow p-6 text-center sticky top-0 z-10">
        <h1 className="text-3xl font-bold">Choose Your Skip Size</h1>
        <p className="text-sm text-gray-400 mt-1">
          Select the skip size that best suits your needs
        </p>
      </header>

      <main className="p-4 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center text-blue-400 animate-pulse">Loading skips...</div>
        ) : (
          <SkipSelector skips={skips} />
        )}
      </main>
    </div>
  );
};

export default App;
