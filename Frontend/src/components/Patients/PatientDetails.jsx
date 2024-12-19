import { useState } from 'react';
import AddPatient from '../components/Patients/AddPatient';
import PatientList from '../components/Patients/PatientList';

export default function PatientsPage() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh((prev) => !prev);

  return (
    <div>
      <h1>Patients</h1>
      <AddPatient onAdd={handleRefresh} />
      <PatientList refresh={refresh} />
    </div>
  );
}
