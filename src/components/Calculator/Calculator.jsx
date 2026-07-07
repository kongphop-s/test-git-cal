import { useState } from 'react';
import { OPERATORS, calculate } from '../../utils/calculate';
import './Calculator.css';

const OPERATOR_LABELS = {
  '+': 'บวก',
  '-': 'ลบ',
  '*': 'คูณ',
  '/': 'หาร',
};

function Calculator() {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      setResult(calculate(numberA, numberB, operator));
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="calculator">
      <h1 className="calculator__title">เครื่องคิดเลข</h1>

      <div className="calculator__field">
        <label htmlFor="numberA">ตัวเลขที่ 1</label>
        <input
          id="numberA"
          type="number"
          value={numberA}
          onChange={(e) => setNumberA(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="กรอกตัวเลข"
        />
      </div>

      <div className="calculator__operators">
        {OPERATORS.map((op) => (
          <button
            key={op}
            type="button"
            className={op === operator ? 'operator active' : 'operator'}
            onClick={() => setOperator(op)}
          >
            {op}
          </button>
        ))}
      </div>

      <div className="calculator__field">
        <label htmlFor="numberB">ตัวเลขที่ 2</label>
        <input
          id="numberB"
          type="number"
          value={numberB}
          onChange={(e) => setNumberB(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="กรอกตัวเลข"
        />
      </div>

      <button type="button" className="calculate-btn" onClick={handleCalculate}>
        คำนวณ ({OPERATOR_LABELS[operator]})
      </button>

      {error && <p className="calculator__error">{error}</p>}
      {result !== null && !error && (
        <p className="calculator__result">
          ผลลัพธ์: <strong>{result}</strong>
        </p>
      )}

      <p className="calculator__hint">กด Enter ในช่องกรอกตัวเลขเพื่อคำนวณได้ทันที</p>
    </div>
  );
}

export default Calculator;
