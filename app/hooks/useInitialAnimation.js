"use client";
import { useEffect, useState } from 'react';

export const useInitialAnimation = (delay = 0) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return hasAnimated;
}; 