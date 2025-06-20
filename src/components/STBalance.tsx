import React from 'react';
import { CircleDollarSign } from 'lucide-react';

interface STBalanceProps {
  balance: number;
}

const STBalance: React.FC<STBalanceProps> = ({ balance }) => {
  const maxBalance = 25000;
  const progress = Math.min((balance / maxBalance) * 100, 100);

  return (
    <div className="mx-auto mb-3 w-full max-w-lg rounded-xl bg-gradient-to-br from-gray-800 to-black p-3 shadow-2xl">
      <div className="mb-2 flex flex-col items-center justify-center">
        <div className="mb-1 flex items-center">
          <CircleDollarSign className="h-9 w-9 text-yellow-400" />
          <h2 className="mx-2 text-lg font-semibold text-gray-300">
            Account Balance
          </h2>
          <CircleDollarSign className="h-9 w-9 text-yellow-400" />
        </div>
        <p className="text-4xl font-bold tracking-wider text-yellow-400">
          {balance.toLocaleString()}
        </p>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-700">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default STBalance;