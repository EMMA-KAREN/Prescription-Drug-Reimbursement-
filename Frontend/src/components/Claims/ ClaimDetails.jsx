import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ClaimDetails() {
  const { id } = useParams();
  const [claim, setClaim] = useState(null);

  useEffect(() => {
    const fetchClaim = async () => {
      const response = await fetch(`/api/claims/${id}`);
      const data = await response.json();
      setClaim(data);
    };

    fetchClaim();
  }, [id]);

  if (!claim) return <div>Loading...</div>;

  return (
    <div>
      <h2>Claim Details</h2>
      <p>Prescription ID: {claim.prescription_id}</p>
      <p>Amount: {claim.amount}</p>
      <p>Status: {claim.status}</p>
    </div>
  );
}
