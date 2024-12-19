import AddPharmacy from '../components/Pharmacies/AddPharmacy';
import PharmacyList from '../components/Pharmacies/ PharmacyList';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PharmaciesPage() {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  const handleAddPharmacy = () => setRefresh((prev) => !prev);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <button
        onClick={() => navigate('/')}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200"
      >
        Back to Home
      </button>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Pharmacies Management</h1>
      <AddPharmacy onAdd={handleAddPharmacy} />
      <PharmacyList refresh={refresh} />
    </div>
  );
}
