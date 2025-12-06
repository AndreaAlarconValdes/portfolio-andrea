import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ColorContextType {
  color: string;
  setColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<string>("#fafafa");

   useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
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
