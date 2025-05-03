import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentProfile from './pages/StudentProfile';
import AddStudent from '/src/pages/ AddStudent.jsx';
import Navbar from './component/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/student/:id" element={<StudentProfile />} />
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </div>
    </div>
  );
}
