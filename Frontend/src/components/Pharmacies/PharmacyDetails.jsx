import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PharmacyDetails() {
  const { id } = useParams();
  const [pharmacy, setPharmacy] = useState(null);

  useEffect(() => {
    const fetchPharmacy = async () => {
      const response = await fetch(`/api/pharmacies/${id}`);
      const data = await response.json();
      setPharmacy(data);
    };

    fetchPharmacy();
  }, [id]);

  if (!pharmacy) return <div>Loading...</div>;

  return (
    <div>
      <h2>Pharmacy Details</h2>
      <p>Name: {pharmacy.name}</p>
      <p>Address: {pharmacy.address}</p>
    </div>
  );
}
