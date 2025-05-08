import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const updateTime = (): void => {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const currentTime = `${hours}:${minutes}`;

    const options: Intl.DateTimeFormatOptions = isMobile
      ? { weekday: "short" } // solo el día si es móvil
      : { weekday: "short", day: "2-digit", month: "short" }; // fecha completa si no es móvil

    const currentDate = now.toLocaleDateString("en-EN", options);

    setTime(currentTime);
    setDate(currentDate);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };

    checkIsMobile(); // comprobar al cargar
    window.addEventListener("resize", checkIsMobile); // actualizar si cambia tamaño

    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [isMobile]); // importante incluir isMobile en las dependencias

  return (
    <div style={{ display: "flex", gap: ".5rem" }}>
      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
};

export default Clock;
