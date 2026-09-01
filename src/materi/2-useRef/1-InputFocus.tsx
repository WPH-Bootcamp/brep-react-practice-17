import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleFocus}>
        Focus
      </button>
    </>
  );
}

export default FocusInput;
