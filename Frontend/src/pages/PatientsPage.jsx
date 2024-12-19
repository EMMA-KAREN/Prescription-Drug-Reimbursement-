import AddPatient from '../components/Patients/AddPatient';
import PatientList from '../components/Patients/ PatientList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PatientsPage() {
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(false);


  const handleAddPatient = () => setRefresh((prev) => !prev);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
     <button
        onClick={() => navigate('/')}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200"
      >
        Back to Home
      </button>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Patients Management</h1>
      <AddPatient onAdd={handleAddPatient} />
      <PatientList refresh={refresh} />
    </div>
  );
}
