import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        const result = eval(display);
        setDisplay(result.toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  // Definimos los botones en orden
  const buttons: string[] = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '0', 'C', '=', '/',
  ];

  return (
    <div className="calculator-container">
      <div className="calculator-display">{display || '0'}</div>
      <div className="calculator-button-grid">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`calculator-button 
              ${btn === '+' || btn === '-' || btn === '*' || btn === '/' ? 'operator' : ''} 
              ${btn === '=' ? 'equal' : ''} 
              ${btn === 'C' ? 'clear' : ''}
            `}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
