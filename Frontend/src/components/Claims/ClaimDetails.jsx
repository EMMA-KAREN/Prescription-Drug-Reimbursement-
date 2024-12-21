// import { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';

// export default function ClaimDetails() {
//     const [claims, setClaims] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchClaims = async () => {
//         try {
//           const response = await fetch('http://localhost:5000/api/claims');
//           const data = await response.json();
//           setClaims(data);
//         } catch (error) {
//           console.error('Error fetching claims:', error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
  
//       fetchClaims();
//     }, []);
  
//     return (
//       <div>
//         <h2>Claims List</h2>
//         {isLoading ? (
//           <p>Loading claims...</p>
//         ) : (
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Prescription ID</th>
//                 <th>Claim Amount</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {claims.map((claim) => (
//                 <tr key={claim.id}>
//                   <td>{claim.prescription_id}</td>
//                   <td>{claim.amount}</td>
//                   <td>{claim.status}</td>
//                   <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     );
//   }