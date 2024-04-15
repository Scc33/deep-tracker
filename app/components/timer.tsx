import React, { useState, useEffect } from "react";
import { CardHeader, CardContent, Card } from "@mui/material";
import { Button } from "@mui/material";
import { hms } from "../interfaces/timeInterface";
import { secondsToHms } from "../utils/time";
import axios from "axios";

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [hms, setHms] = useState<hms>({ hours: 0, minutes: 0, seconds: 0 }); // [hours, minutes, seconds
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
        setHms(secondsToHms(time));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  const startStopTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(0);
    setHms({ hours: 0, minutes: 0, seconds: 0 });
    setIsActive(false);
  };

  const handleSubmit = async () => {
    console.log('Saving session:', hms)
    try {
      const response = await axios.post('/api/session', {
        duration: time,
      });
      console.log('Session saved:', response.data);
    } catch {
      console.error('Failed to save session:');
    }
  };


  return (
    <Card>
      <CardHeader className="pb-0">
        <div>Timer</div>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-4 p-6">
        <div className="flex items-center gap-2 text-2xl font-medium">
          <span>{hms.hours === 0 ? "00" : hms.hours}</span>
          <span>:</span>
          <span>{hms.minutes === 0 ? "00" : hms.minutes}</span>
          <span>:</span>
          <span>{hms.seconds === 0 ? "00" : hms.seconds}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={startStopTimer}>{isActive ? "Stop" : "Start"}</Button>
          <Button onClick={resetTimer}>Reset</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timer;
