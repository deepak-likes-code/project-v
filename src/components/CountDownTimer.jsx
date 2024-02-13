import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTimeInSeconds, onTimeExpire }) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    if (timeLeft === 0) {
      if (onTimeExpire) onTimeExpire();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeExpire]);

  const formatTime = (unit) => (unit < 10 ? `0${unit}` : unit);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center m-4">
      <h1 className="text-3xl font-semibold text-center m-2 text-rose-600">
        Countdown
      </h1>
      <span className="text-4xl font-bold text-rose-400">
        {`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}
      </span>
    </div>
  );
};

export default CountdownTimer;
