import { useState, useEffect } from 'react';

export default function EditPharmacy({ pharmacyId, onUpdate }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchPharmacy = async () => {
      const response = await fetch(`/api/pharmacies/${pharmacyId}`);
      const pharmacy = await response.json();
      setName(pharmacy.name);
      setAddress(pharmacy.address);
    };

    fetchPharmacy();
  }, [pharmacyId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/pharmacies/${pharmacyId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, address }),
    });
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Edit Pharmacy</h2>
      <input
        type="text"
        placeholder="Pharmacy Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Update</button>
    </form>
  );
}
