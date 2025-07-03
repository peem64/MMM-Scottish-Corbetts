import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="bg-red-900/30 border border-red-500/40 rounded-lg p-6 max-w-sm text-center backdrop-blur-sm">
        <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-3" />
        <h2 className="text-lg font-bold text-white mb-2">Error</h2>
        <p className="text-red-300 mb-4 text-sm">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};