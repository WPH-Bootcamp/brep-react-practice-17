type StudentListProps = {
  students: string[];
};

export default function StudentList({ students }: StudentListProps) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </ul>
  );
}
