import React from "react";
import { X } from "lucide-react";

const BottomPrompt = ({ message, onClose, actionLabel, onAction }) => {
  if (!message) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center animate-fade-in">
      <div className="bg-gray-900/95 border-t border-gray-700 shadow-xl rounded-t-xl px-6 py-4 flex items-center gap-4 max-w-2xl w-full mx-2 mb-2">
        <span className="flex-1 text-white text-base">{message}</span>
        {actionLabel && (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
            onClick={onAction}
          >
            {actionLabel}
          </button>
        )}
        <button
          className="text-gray-400 hover:text-white ml-2"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BottomPrompt; 