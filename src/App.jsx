import React, { useState } from "react";
import SkipSelector from "./components/SkipSelector";
import useFetchSkips from "./hooks/useFetchSkips";
import BottomPrompt from "./components/BottomPrompt";
import Header from "./components/Header";

const App = () => {
  const { skips, loading } = useFetchSkips();
  const [prompt, setPrompt] = useState({ message: "", actionLabel: "", onAction: null });

  const showPrompt = (message, actionLabel = "", onAction = null) => {
    setPrompt({ message, actionLabel, onAction });
  };

  const closePrompt = () => setPrompt({ message: "", actionLabel: "", onAction: null });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <main className="p-4 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-blue-400">Loading available skips...</p>
            </div>
          </div>
        ) : (
          <SkipSelector skips={skips} showPrompt={showPrompt} />
        )}
      </main>
      <footer className="mt-12 py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        <p>© 2024 Skip Selector. All rights reserved.</p>
      </footer>
      <BottomPrompt
        message={prompt.message}
        onClose={closePrompt}
        actionLabel={prompt.actionLabel}
        onAction={prompt.onAction}
      />
    </div>
  );
};

export default App;
