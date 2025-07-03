import { useState, useEffect } from 'react';
import { Corbett } from '../types/corbett';
import { CorbettService } from '../services/corbettService';

export const useCorbett = () => {
  const [corbett, setCorbett] = useState<Corbett | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrentCorbett = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const currentCorbett = await CorbettService.getCurrentCorbett();
      setCorbett(currentCorbett);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch corbett');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentCorbett();
    
    // Set up interval to check for new corbett every hour
    const interval = setInterval(() => {
      fetchCurrentCorbett();
    }, 60 * 60 * 1000); // 1 hour in milliseconds

    return () => clearInterval(interval);
  }, []);

  return {
    corbett,
    isLoading,
    error,
    refetch: fetchCurrentCorbett
  };
};