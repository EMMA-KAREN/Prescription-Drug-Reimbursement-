import { useEffect, useState } from 'react';

export default function PatientList({ refresh }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('/api/patients');
      const data = await response.json();
      setPatients(data);
    };

    fetchPatients();
  }, [refresh]);

  return (
    <div>
      <h2>Patient List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Info</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
