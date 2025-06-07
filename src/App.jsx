import React, { useState } from "react";
import SkipSelector from "./components/SkipSelector";
import useFetchSkips from "./hooks/useFetchSkips";
import BottomPrompt from "./components/BottomPrompt";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const { skips, loading } = useFetchSkips();
  const [prompt, setPrompt] = useState({ message: "", actionLabel: "", onAction: null });

  const showPrompt = (message, actionLabel = "", onAction = null) => {
    setPrompt({ message, actionLabel, onAction });
  };

  const closePrompt = () => setPrompt({ message: "", actionLabel: "", onAction: null });

  return (
    <div className="min-h-screen bg-[#181A20] text-white font-sans">
      <ProgressBar currentStep={2} />
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">
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
