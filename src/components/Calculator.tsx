import { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";
import Draggable from "./Draggable";

interface CalculatorProps {
  onClose: () => void;
  style?: React.CSSProperties;
}
const Calculator = ({ onClose, style }: CalculatorProps) => {
  const [display, setDisplay] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        const result = evaluate(display);
        setDisplay(result.toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const buttons: string[] = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "C",
    "=",
    "/",
  ];

  return (
    <div className="general-page" onClick={onClose}>
      <Draggable style={{ ...style, position: "absolute" }}>
        <div className="calculator-container" style={style}>
          <div className="calculator-display">{display || "0"}</div>
          <div className="calculator-button-grid">
            {buttons.map((btn) => (
              <button
                key={btn}
                className={`calculator-button 
              ${
                btn === "+" || btn === "-" || btn === "*" || btn === "/"
                  ? "operator"
                  : ""
              } 
              ${btn === "=" ? "equal" : ""} 
              ${btn === "C" ? "clear" : ""}
            `}
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Calculator;
