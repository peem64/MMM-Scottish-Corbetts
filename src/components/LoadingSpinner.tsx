import React from 'react';
import { Mountain } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="text-center bg-slate-800/90 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
        <Mountain className="w-12 h-12 text-emerald-400 mx-auto mb-3 animate-pulse" />
        <p className="text-white text-lg mb-2">Loading Corbett...</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-400"></div>
        </div>
      </div>
    </div>
  );
};