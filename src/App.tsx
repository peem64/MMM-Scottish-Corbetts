import React from 'react';
import { CorbettCard } from './components/CorbettCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { useCorbett } from './hooks/useCorbett';

function App() {
  const { corbett, isLoading, error, refetch } = useCorbett();

  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={refetch}
      />
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!corbett) {
    return (
      <ErrorMessage 
        message="No corbett data available. Please check your database connection."
        onRetry={refetch}
      />
    );
  }

  return (
    <div className="min-h-screen bg-transparent p-4 flex justify-center items-start">
      <div className="w-full max-w-sm">
        <CorbettCard corbett={corbett} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;