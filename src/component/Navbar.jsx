import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-4 justify-center">
      <Link to="/" className="text-blue-500 hover:underline">Home</Link>
      <Link to="/students" className="text-blue-500 hover:underline">Student</Link>
      <Link to="/add-student" className="text-blue-500 hover:underline">Add Student</Link>
    </nav>
  );
}
