import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0); // Defines 'time' as a number
  const [isActive, setIsActive] = useState<boolean>(false); // Defines 'isActive' as a boolean

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1); // Increment time by one second
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval!); // Non-null assertion operator
    }

    return () => {
      if (interval) clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div>
      <div>Time: {time}s</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
