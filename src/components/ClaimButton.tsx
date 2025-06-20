import React from 'react';
import clsx from 'clsx';
// import { useSprinkle } from './CoinSprinkleProvider';

interface ClaimButtonProps {
  isEnabled: boolean;
  onClick: () => void;
}

const ClaimButton: React.FC<ClaimButtonProps> = ({ isEnabled, onClick }) => {
  // const sprinkle = useSprinkle();

  const handleClick = () => {
    if (!isEnabled) return;
    onClick();
    // sprinkle(e.clientX, e.clientY);
  };

  return (
    <div className="relative w-full align-middle flex items-center">
      <button
        onClick={handleClick}
        disabled={!isEnabled}
        className={clsx(
          'relative mx-auto w-full max-w-sm overflow-hidden rounded-md px-4 py-2 font-bold text-white transition-opacity duration-300',
          {
            'cursor-pointer bg-gradient-to-br from-green-500 to-green-600 shadow-[0_0_20px_rgba(0,255,0,0.5)] active:animate-clickPop': isEnabled,
            'cursor-not-allowed bg-gray-700 text-gray-400 opacity-70': !isEnabled,
          }
        )}
      >
        Claim Jackpot
      </button>
    </div>
  );
};

export default ClaimButton;