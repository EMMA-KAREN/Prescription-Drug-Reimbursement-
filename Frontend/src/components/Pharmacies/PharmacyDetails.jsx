import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPharmacyById } from '../../api/api';

const PharmacyDetails = () => {
  const { id } = useParams(); // Get the pharmacy ID from the URL
  const [pharmacy, setPharmacy] = useState(null);

  useEffect(() => {
    const fetchPharmacy = async () => {
      try {
        const response = await getPharmacyById(id);
        setPharmacy(response.data);
      } catch (error) {
        console.error('Error fetching pharmacy details:', error.message);
      }
    };

    fetchPharmacy();
  }, [id]);

  if (!pharmacy) {
    return <div>Loading pharmacy details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{pharmacy.name}</h1>
      {pharmacy.image_url && (
        <img
          src={pharmacy.image_url}
          alt={pharmacy.name}
          className="w-full max-w-md mb-4"
        />
      )}
      <p><strong>Address:</strong> {pharmacy.address}</p>
      <p><strong>Contact Info:</strong> {pharmacy.contact_info}</p>
    </div>
  );
};

export default PharmacyDetails;
// 