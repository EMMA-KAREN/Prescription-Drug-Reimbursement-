import { useEffect, useState } from 'react';

export default function PharmacyList({ refresh }) {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    const fetchPharmacies = async () => {
      const response = await fetch('/api/pharmacies');
      const data = await response.json();
      setPharmacies(data);
    };

    fetchPharmacies();
  }, [refresh]);

  return (
    <div>
      <h2>Pharmacy List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy) => (
            <tr key={pharmacy.id}>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
