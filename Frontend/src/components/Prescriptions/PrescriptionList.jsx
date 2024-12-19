import { useEffect, useState } from 'react';

export default function PrescriptionList({ refresh }) {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      const response = await fetch('/api/prescriptions');
      const data = await response.json();
      setPrescriptions(data);
    };

    fetchPrescriptions();
  }, [refresh]);

  return (
    <div>
      <h2>Prescription List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Drug Name</th>
            <th>Dosage</th>
            <th>Pharmacy ID</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription.id}>
              <td>{prescription.patient_id}</td>
              <td>{prescription.drug_name}</td>
              <td>{prescription.dosage}</td>
              <td>{prescription.pharmacy_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
