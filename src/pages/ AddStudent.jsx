import { useState } from 'react';

export default function AddStudent() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && course && year) {
      setSuccess(true);
      setName('');
      setCourse('');
      setYear('');
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded "> 
      <h2 className="text-xl font-semibold mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={e => setCourse(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Student</button>
        {success && <p className="text-green-600">Student added successfully (temporarily)!</p>}
      </form>
    </div>
  );
}
