import { createContext, useContext, useState, ReactNode } from "react";

interface ColorContextType {
  color: string;
  setColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<string>("#fafafa");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook para consumirlo más fácil
export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor debe usarse dentro de un ColorProvider");
  }
  return context;
};
