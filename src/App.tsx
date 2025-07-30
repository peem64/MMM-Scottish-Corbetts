import React from 'react';
import { CorbettCard } from './components/CorbettCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { useCorbett } from './hooks/useCorbett';

function App() {
  const { corbett, isLoading, error, refetch } = useCorbett();

  // Debug logging
  console.log('App state:', { corbett, isLoading, error });
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 flex justify-center items-center">
        <ErrorMessage 
          message={error} 
          onRetry={refetch}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!corbett) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 flex justify-center items-center">
        <ErrorMessage 
          message="No corbett data available. Please check your database connection and ensure the migration has been run."
          onRetry={refetch}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 flex justify-center items-start">
      <div className="w-full max-w-sm">
        <CorbettCard corbett={corbett} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;