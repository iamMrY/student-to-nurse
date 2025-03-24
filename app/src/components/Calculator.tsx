import React, { useState } from 'react';
import { Calculator as CalculatorIcon, X } from 'lucide-react';

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Calculator({ isOpen, onClose }: CalculatorProps) {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue;
      let newValue: number;

      switch (operator) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '×':
          newValue = currentValue * inputValue;
          break;
        case '÷':
          newValue = currentValue / inputValue;
          break;
        default:
          newValue = inputValue;
      }

      setPreviousValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleEquals = () => {
    if (!operator || previousValue === null) return;
    performOperation('=');
    setOperator(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border border-gray-200 w-72">
      <div className="flex justify-between items-center p-2 border-b">
        <div className="flex items-center">
          <CalculatorIcon className="w-5 h-5 text-gray-600 mr-2" />
          <span className="font-medium text-gray-700">Calculator</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="p-4">
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="text-right text-2xl font-mono">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={clearAll}
            className="col-span-2 p-3 text-center bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors duration-200"
          >
            Clear
          </button>
          <button
            onClick={() => performOperation('÷')}
            className="p-3 text-center bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors duration-200"
          >
            ÷
          </button>
          <button
            onClick={() => performOperation('×')}
            className="p-3 text-center bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors duration-200"
          >
            ×
          </button>

          {[7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => inputDigit(String(num))}
              className="p-3 text-center bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => performOperation('-')}
            className="p-3 text-center bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors duration-200"
          >
            -
          </button>

          {[4, 5, 6].map(num => (
            <button
              key={num}
              onClick={() => inputDigit(String(num))}
              className="p-3 text-center bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => performOperation('+')}
            className="p-3 text-center bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors duration-200"
          >
            +
          </button>

          {[1, 2, 3].map(num => (
            <button
              key={num}
              onClick={() => inputDigit(String(num))}
              className="p-3 text-center bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleEquals}
            className="row-span-2 p-3 text-center bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
          >
            =
          </button>

          <button
            onClick={() => inputDigit('0')}
            className="col-span-2 p-3 text-center bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="p-3 text-center bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}