import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const updateTime = (): void => {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const currentTime = `${hours}:${minutes}`;

    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      day: "2-digit",
      month: "short",
    };
    const currentDate = now.toLocaleDateString('en-EN', options);

    setTime(currentTime);
    setDate(currentDate);
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{display: "flex", gap: "1rem"}}>
      <p>{date}</p> 
      <p>{time}</p> 
    </div>
  );
};

export default Clock;
