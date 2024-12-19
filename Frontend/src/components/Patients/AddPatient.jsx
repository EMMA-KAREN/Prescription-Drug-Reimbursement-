import { useState } from 'react';

export default function AddPatient({ onAdd }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contact }),
    });
    onAdd();
    setName('');
    setContact('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Add Patient</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Contact Info"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Add</button>
    </form>
  );
}
