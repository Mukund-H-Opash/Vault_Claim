import React, { createContext, useContext, useState, useCallback } from 'react';

interface Coin {
  id: number;
  x: number;
  y: number;
}

interface SprinkleContextType {
  sprinkle: (x: number, y: number) => void;
}

const SprinkleContext = createContext<SprinkleContextType | undefined>(undefined);

export const useSprinkle = () => {
  const ctx = useContext(SprinkleContext);
  if (!ctx) throw new Error('useSprinkle must be used within CoinSprinkleProvider');
  return ctx.sprinkle;
};

export const CoinSprinkleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const sprinkle = useCallback((x: number, y: number) => {
    const newCoins = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }));

    setCoins((prev) => [...prev, ...newCoins]);
    setTimeout(() => {
      setCoins((prev) => prev.filter((c) => !newCoins.map(nc => nc.id).includes(c.id)));
    }, 1500);
  }, []);

  return (
    <SprinkleContext.Provider value={{ sprinkle }}>
      {children}
      <div className="pointer-events-none fixed top-0 left-0 h-screen w-screen overflow-hidden z-[9999]">
        {coins.map((coin) => {
          const dx = `${Math.random() * 400 - 200}px`;
          const dy = `${Math.random() * 400 - 200}px`;
          const delay = `${Math.random() * 0.2}s`;

          return (
            <div
              key={coin.id}
              className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-yellow-300 to-orange-500 animate-coinFly"
              style={
                {
                  left: coin.x,
                  top: coin.y,
                  animationDelay: delay,
                  '--dx': dx,
                  '--dy': dy,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
    </SprinkleContext.Provider>
  );
};