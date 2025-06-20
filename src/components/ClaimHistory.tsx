import { History } from 'lucide-react';

interface ClaimLog {
  amount: number;
  time: string;
}

interface ClaimHistoryProps {
  logs: ClaimLog[];
}

const ClaimHistory = ({ logs }: ClaimHistoryProps) => {
  return (
    <div className="mb-4 mt-3 w-full max-w-sm rounded-xl border border-purple-700 bg-gradient-to-br from-purple-900 via-gray-900 to-purple-900 p-3 shadow-lg sm:mx-2">
      <h3 className="mb-2 flex items-center font-semibold text-gray-300">
        <History className="mr-2 text-yellow-400" />
        Recent Claims
      </h3>
      <div className="custom-scrollbar max-h-48 overflow-y-auto">
        {logs.length === 0 ? (
          <p className="text-center text-gray-500">No claims yet. Be the first!</p>
        ) : (
          <ul className="space-y-3">
            {logs.map((log, index) => (
              <li
                key={index}
                className="flex animate-fade-in-up items-center justify-between rounded-lg border border-gray-700 bg-gray-800/50 p-3 shadow-md"
              >
                <p className="text-lg font-bold text-yellow-400">
                  + {log.amount.toLocaleString()} ST
                </p>
                <p className="text-sm text-gray-400">{log.time}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ClaimHistory;