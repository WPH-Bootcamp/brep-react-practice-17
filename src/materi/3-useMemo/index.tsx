import { useState, useMemo } from 'react';
import StudentList from './1-StudentList';

const STUDENTS = ['Budi', 'Ucup', 'Renday', 'Kaka', 'Koko', 'Dika'];

export default function ListRendering() {
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const filteredStudents = useMemo(() => {
    console.log('Filtering Students');
    return STUDENTS.filter((student) =>
      student.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Cari student..."
      />

      <StudentList students={filteredStudents} />

      <hr />

      <p>Counter: {count}</p>
      <button onClick={() => setCount((data) => data + 1)}>+</button>
    </section>
  );
}
