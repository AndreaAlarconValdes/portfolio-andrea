import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");

      const options: Intl.DateTimeFormatOptions = isMobile
        ? { weekday: "short" }
        : { weekday: "short", day: "2-digit", month: "short" };

      setTime(`${hours}:${minutes}`);
      setDate(now.toLocaleDateString("en-EN", options));
    };

    checkIsMobile();
    updateTime(); 

    window.addEventListener("resize", checkIsMobile);
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [isMobile]); 

  return (
    <div style={{ display: "flex", gap: ".5rem" }}>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
};

export default Clock;
