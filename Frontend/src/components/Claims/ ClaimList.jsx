import { useEffect, useState } from 'react';

export default function ClaimList({ refresh }) {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      const response = await fetch('/api/claims');
      const data = await response.json();
      setClaims(data);
    };

    fetchClaims();
  }, [refresh]);

  return (
    <div>
      <h2>Claim List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Prescription ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td>{claim.prescription_id}</td>
              <td>{claim.amount}</td>
              <td>{claim.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
