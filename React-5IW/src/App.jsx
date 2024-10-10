import React, { useRef } from 'react';
import Count from './components/Count';
import FocusInput from './components/FocusInput';

const App = () => {
  const countRef = useRef(null);
  const inputRef = useRef(null);

  const handleIncrement = () => {
    countRef.current.increment();
  };

  const handleReset = () => {
    countRef.current.reset();
  };

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  const handleClearInput = () => {
    inputRef.current.clear();
  };

  return (
    <div className="body">
      <h1>Count</h1>

      <Count ref={countRef} />

      <button onClick={handleIncrement}>Increment Counter</button>
      <button onClick={handleReset}>Reset Counter</button>

      <hr />

      <FocusInput ref={inputRef} />

      <button onClick={handleFocusInput}>Focus Input</button>
      <button onClick={handleClearInput}>Clear Input</button>
    </div>
  );
};

export default App;
