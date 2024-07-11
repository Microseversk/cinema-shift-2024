import { useEffect, useRef, useState } from 'react';

interface UseCountdownParams {
  interval: number;
  start: number;
}

export const useCountdown = ({ interval = 1000, start }: UseCountdownParams) => {
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const [count, setCount] = useState(start);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    intervalRef.current = setInterval(() => {
      setCount((count) => count - 1);
    }, interval);

    return () => clearInterval(intervalRef.current);
  }, [enabled]);

  useEffect(() => {
    if (count === 0) {
      setEnabled(false);
      clearInterval(intervalRef.current);
    }
  }, [count]);

  const startCountdown = (time?: number) => {
    setCount(time ?? start);
    setEnabled(true);
  };

  return [count, { startCountdown }] as const;
};
