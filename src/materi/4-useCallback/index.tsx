import { useCallback, useState } from 'react';
import ActionButton from './1-ActionButton';

function WithoutUseCallback() {
  const [count, setCount] = useState(0);
  const handleSayHello = () => {
    console.log('Hello student');
  };

  console.log('Parent Render');

  return (
    <section>
      <p>Parent count : {count} </p>

      <button onClick={() => setCount((data) => data + 1)}>
        Re-render Parent
      </button>

      <ActionButton onSayHello={handleSayHello} />
    </section>
  );
}

function WithUseCallback() {
  const [count, setCount] = useState(0);

  const handleSayHello = useCallback(() => {
    console.log('Hello student');
  }, []);

  console.log('Parent Render');

  return (
    <section>
      <p>Parent count : {count} </p>

      <button onClick={() => setCount((data) => data + 1)}>
        Re-render Parent
      </button>

      <ActionButton onSayHello={handleSayHello} />
    </section>
  );
}

export { WithoutUseCallback, WithUseCallback };
