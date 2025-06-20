import { useState, useEffect } from 'react';
import VaultClaimHeading from './components/VaultClaimHeading';
import STBalance from './components/STBalance';
import ClaimTimer from './components/ClaimTimer';
import ClaimButton from './components/ClaimButton';
import ClaimHistory from './components/ClaimHistory';
import clsx from 'clsx';

function App() {
  const [stBalance, setStBalance] = useState<number>(1234);
  const [isClaimEnabled, setIsClaimEnabled] = useState<boolean>(false);
  const [claimLogs, setClaimLogs] = useState<Array<{ amount: number; time: string }>>([
      { amount: 1500, time: '1 minutes ago' },
      { amount: 2000, time: '5 minutes ago' },
      { amount: 3000, time: '10 minutes ago' },
      { amount: 1200, time: '1 hours ago' },
      { amount: 1800, time: '2 hours ago' },
  ]);
  const [message, setMessage] = useState<string | null>(null);

  const handleTimerEnd = () => {
    setIsClaimEnabled(true);
  };

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  const handleClaim = () => {
    if (isClaimEnabled) {
      const claimedAmount = Math.floor(Math.random() * 1000) + 500;
      setStBalance((prevBalance) => prevBalance + claimedAmount);
      setClaimLogs((prevLogs) => [
        { amount: claimedAmount, time: 'just now' },
        ...prevLogs.slice(0, 4),
      ]);
      setIsClaimEnabled(false);
      setMessage(`🎉 You claimed ${claimedAmount} ST!`);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-800 to-black font-sans text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 h-20 w-20 animate-blob-1 rounded-full bg-yellow-500 filter blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-32 w-32 animate-blob-2 rounded-full bg-purple-500 filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 h-24 w-24 animate-blob-3 rounded-full bg-green-500 filter blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-md flex-col items-center justify-center p-4 md:p-8">
        <VaultClaimHeading />
        <STBalance balance={stBalance} />
        <ClaimTimer onTimerEnd={handleTimerEnd} paused={isClaimEnabled} />
        <ClaimButton isEnabled={isClaimEnabled} onClick={handleClaim} />
        <ClaimHistory logs={claimLogs} />
        {message && (
          <div
            className={clsx(
              'fixed bottom-12 left-1/2 z-50 w-4/5 -translate-x-1/2 animate-fade-in-up rounded-full bg-green-800 py-3 px-6 text-center text-white shadow-lg',
            )}
          >
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;