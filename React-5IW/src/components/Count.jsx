import React, { useState, useImperativeHandle, forwardRef } from 'react';

const Count = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment: () => {
      setCount((prevCount) => prevCount + 1);
    },
    reset: () => {
      setCount(0);
    },
  }));

  return (
    <div>
      <h2>Advanced Counter: {count}</h2>
    </div>
  );
});

export default Count;
