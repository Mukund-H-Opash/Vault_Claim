import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

interface ClaimTimerProps {
  onTimerEnd: () => void;
  paused: boolean;
  duration?: number;
}

const ClaimTimer: React.FC<ClaimTimerProps> = ({ onTimerEnd, paused, duration = 59 }) => {
  const initialTime = duration + 1;
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    if (timeLeft === 0) {
      setTimeLeft(initialTime);
    }

    timerRef.current = window.setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current!);
          onTimerEnd();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, timeLeft, onTimerEnd, initialTime]);

  const isLowTime = timeLeft <= 10;
  const isVeryLow = timeLeft <= 3;
  const timerColor = isLowTime ? 'text-red-500' : 'text-green-500';

  return (
    <div className="relative mx-auto mb-4 w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 p-3 text-center shadow-2xl">
      <div
        className={clsx(
          'absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full',
          isLowTime ? 'animate-redExplosion' : 'animate-greenExplosion'
        )}
      />
      <p className="relative z-10 mb-1 text-xl font-semibold tracking-wider text-gray-300">
        Next Claim in
      </p>
      <div
        className={clsx(
          'relative z-10 font-mono text-8xl font-bold transition-all duration-300',
          timerColor,
          isVeryLow && 'animate-scaleBlast'
        )}
      >
        {timeLeft}
      </div>
    </div>
  );
};

export default ClaimTimer;