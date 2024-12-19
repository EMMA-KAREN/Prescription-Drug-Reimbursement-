import AddClaim from '../components/Claims/AddClaim';
import ClaimList from '../components/Claims/ ClaimList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClaimsPage() {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  const handleAddClaim = () => setRefresh((prev) => !prev);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
    <button
      onClick={() => navigate('/')}
      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200"
    >
      Back to Home
    </button>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Claims</h2>
      <AddClaim onAdd={handleAddClaim} />
      <ClaimList refresh={refresh} />
    </div>
  );
}
