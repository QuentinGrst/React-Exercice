import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const FocusInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
  }));

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
    </div>
  );
});

export default FocusInput;
