// import { useState, useEffect } from 'react';

// export default function EditClaim({ claimId, onUpdate }) {
//   const [amount, setAmount] = useState('');
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     const fetchClaim = async () => {
//       const response = await fetch(`/api/claims/${claimId}`);
//       const claim = await response.json();
//       setAmount(claim.amount);
//       setStatus(claim.status);
//     };

//     fetchClaim();
//   }, [claimId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch(`/api/claims/${claimId}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount, status }),
//     });
//     onUpdate();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <h2 className="form-title">Edit Claim</h2>
//       <input
//         type="text"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="form-input"
//       />
//       <input
//         type="text"
//         placeholder="Status"
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//         className="form-input"
//       />
//       <button type="submit" className="form-button">Update</button>
//     </form>
//   );
// }
