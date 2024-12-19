import { useState } from 'react';

export default function AddClaim({ onAdd }) {
  const [prescriptionId, setPrescriptionId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/claims', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prescription_id: prescriptionId, amount, status }),
    });
    onAdd();
    setPrescriptionId('');
    setAmount('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Add Claim</h2>
      <input
        type="text"
        placeholder="Prescription ID"
        value={prescriptionId}
        onChange={(e) => setPrescriptionId(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Add</button>
    </form>
  );
}
