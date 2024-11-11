"use client";

import { useState, useEffect } from "react";

export default function Component() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-04T12:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = ~~(difference / (1000 * 60 * 60 * 24));
      const hours = ~~((difference / (1000 * 60 * 60)) % 24);
      const minutes = ~~((difference / 1000 / 60) % 60);
      const seconds = ~~((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="ocean absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`bubble bubble--${i + 1}`}></div>
        ))}
      </div>
      <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-8 text-yellow-300 drop-shadow-lg">
          FRC Reefscape 2025
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-blue-100">
          Countdown to Launch:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-2xl sm:text-4xl font-mono bg-blue-800 bg-opacity-30 p-4 sm:p-6 rounded-lg shadow-lg">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-3xl sm:text-5xl font-bold">{value}</span>
              <span className="text-lg sm:text-xl capitalize">{value === 1 ? unit.slice(0, -1) : unit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
