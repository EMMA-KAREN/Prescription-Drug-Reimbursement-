import { useState } from 'react';

export default function AddPrescription({ onAdd }) {
  const [patientId, setPatientId] = useState('');
  const [drugName, setDrugName] = useState('');
  const [dosage, setDosage] = useState('');
  const [pharmacyId, setPharmacyId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/prescriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ patient_id: patientId, drug_name: drugName, dosage, pharmacy_id: pharmacyId }),
    });
    onAdd();
    setPatientId('');
    setDrugName('');
    setDosage('');
    setPharmacyId('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Add Prescription</h2>
      <input
        type="text"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Drug Name"
        value={drugName}
        onChange={(e) => setDrugName(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Dosage"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Pharmacy ID"
        value={pharmacyId}
        onChange={(e) => setPharmacyId(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Add</button>
    </form>
  );
}
