// import { useState, useEffect } from 'react';

// export default function EditPrescription({ prescriptionId, onUpdate }) {
//   const [drugName, setDrugName] = useState('');
//   const [dosage, setDosage] = useState('');

//   useEffect(() => {
//     const fetchPrescription = async () => {
//       const response = await fetch(`/api/prescriptions/${prescriptionId}`);
//       const prescription = await response.json();
//       setDrugName(prescription.drug_name);
//       setDosage(prescription.dosage);
//     };

//     fetchPrescription();
//   }, [prescriptionId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch(`/api/prescriptions/${prescriptionId}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ drug_name: drugName, dosage }),
//     });
//     onUpdate();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <h2 className="form-title">Edit Prescription</h2>
//       <input
//         type="text"
//         placeholder="Drug Name"
//         value={drugName}
//         onChange={(e) => setDrugName(e.target.value)}
//         className="form-input"
//       />
//       <input
//         type="text"
//         placeholder="Dosage"
//         value={dosage}
//         onChange={(e) => setDosage(e.target.value)}
//         className="form-input"
//       />
//       <button type="submit" className="form-button">Update</button>
//     </form>
//   );
// }
