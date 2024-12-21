// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export default function PrescriptionDetails() {
//   const { id } = useParams();
//   const [prescription, setPrescription] = useState(null);

//   useEffect(() => {
//     const fetchPrescription = async () => {
//       const response = await fetch(`/api/prescriptions/${id}`);
//       const data = await response.json();
//       setPrescription(data);
//     };

//     fetchPrescription();
//   }, [id]);

//   if (!prescription) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2>Prescription Details</h2>
//       <p>Drug Name: {prescription.drug_name}</p>
//       <p>Dosage: {prescription.dosage}</p>
//       <p>Patient ID: {prescription.patient_id}</p>
//       <p>Pharmacy ID: {prescription.pharmacy_id}</p>
//     </div>
//   );
// }
