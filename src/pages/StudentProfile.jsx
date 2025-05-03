import { useParams } from 'react-router-dom';

const studentData = {
  1: { name: 'Alice Johnson', course: 'Computer Science', year: '2nd' },
  2: { name: 'Bob Smith', course: 'Mathematics', year: '3rd' },
  3: { name: 'Charlie Brown', course: 'Physics', year: '1st' },
};

export default function StudentProfile() {
  const { id } = useParams();
  const student = studentData[id];

  if (!student) return <p>Student not found.</p>;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year:</strong> {student.year}</p>
    </div>
  );
}
