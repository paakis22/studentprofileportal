import { Link } from 'react-router-dom';

const students = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
];

export default function Students() {
  return (
    <div className='p-4 bg-white shadow rounded'>
      <h2 className="text-xl font-semibold mb-4">Student List</h2>
      <ul className="space-y-2">
        {students.map(student => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`} className="text-blue-600 hover:underline">
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
