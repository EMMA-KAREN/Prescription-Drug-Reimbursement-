import { useState } from 'react';

export default function AddPharmacy({ onAdd }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/pharmacies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, address }),
    });
    onAdd();
    setName('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Add Pharmacy</h2>
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
      <button type="submit" className="form-button">Add</button>
    </form>
  );
}
