import AddPharmacy from '../components/Pharmacies/AddPharmacy';
import PharmacyList from '../components/Pharmacies/PharmacyList';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PharmaciesPage() {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  const handleAddPharmacy = () => setRefresh((prev) => !prev);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Back to Home
        </button>
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Pharmacies Management</h1>

        {/* Add Pharmacy Section */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Pharmacy</h2>
          <AddPharmacy onAdd={handleAddPharmacy} />
        </div>

        {/* Pharmacy List Section */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Pharmacy List</h2>
          <PharmacyList refresh={refresh} />
        </div>
      </div>
    </div>
  );
}
