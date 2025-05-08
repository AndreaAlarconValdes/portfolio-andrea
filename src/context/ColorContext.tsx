import { createContext, useContext, useState, ReactNode } from "react";

interface ColorContextType {
  color: string;
  setColor: (color: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<string>("#fafafa");
  const [filter, setFilter] = useState<string>("none");

  return (
    <ColorContext.Provider value={{ color, setColor, filter, setFilter }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor debe usarse dentro de un ColorProvider");
  }
  return context;
};
