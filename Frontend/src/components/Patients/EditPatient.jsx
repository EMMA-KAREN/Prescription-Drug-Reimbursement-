import { useState, useEffect } from 'react';

export default function EditPatient({ patientId, onClose, onUpdate }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    const fetchPatient = async () => {
      const response = await fetch(`/api/patients/${patientId}`);
      const data = await response.json();
      setName(data.name);
      setContact(data.contact);
    };

    fetchPatient();
  }, [patientId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/patients/${patientId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contact }),
    });
    onUpdate();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Edit Patient</h2>
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
      <button type="submit" className="form-button">Update</button>
    </form>
  );
}
