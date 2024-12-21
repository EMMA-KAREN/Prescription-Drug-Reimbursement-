import { useEffect, useState } from 'react';

export default function PrescriptionList({ refresh }) {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);  // State to handle loading
  const [error, setError] = useState(null);  // State to handle errors
  const [selectedPrescription, setSelectedPrescription] = useState(null); // For storing the prescription to be updated
  const [updatedPrescription, setUpdatedPrescription] = useState({
    patient_id: '',
    drug_name: '',
    dosage: '',
    pharmacy_id: '',
    instructions: '',
    date_prescribed: '',
  });

  useEffect(() => {
    const fetchPrescriptions = async () => {
      setLoading(true); // Start loading
      setError(null); // Reset error state

      try {
        const response = await fetch('http://localhost:8000/prescriptions');
        if (!response.ok) {
          throw new Error('Failed to fetch prescriptions');
        }
        const data = await response.json();
        console.log('Fetched prescriptions:', data);  // Log to check the data
        setPrescriptions(data);
      } catch (err) {
        console.error('Error fetching prescriptions:', err);
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading after the fetch is complete
      }
    };

    fetchPrescriptions();
  }, [refresh]);

  // Function to handle deleting a prescription
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/prescriptions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      alert(result.message); // Show success message
  
      // Update state to remove the deleted prescription from the UI
      setPrescriptions((prevPrescriptions) =>
        prevPrescriptions.filter((prescription) => prescription.id !== id)
      );
    } catch (error) {
      console.error("Error deleting prescription:", error);
      alert(`Error deleting prescription: ${error.message}`);
    }
  };

  // Function to handle the update of a prescription
  const updatePrescription = (prescriptionId) => {
    const prescriptionToEdit = prescriptions.find((prescription) => prescription.id === prescriptionId);
    setSelectedPrescription(prescriptionToEdit);  // Set selected prescription for updating
    setUpdatedPrescription({ ...prescriptionToEdit });  // Pre-fill form with prescription data
  };

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPrescription((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to submit the updated prescription
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/prescriptions/${selectedPrescription.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPrescription),
      });

      if (!response.ok) {
        throw new Error('Failed to update prescription');
      }

      const data = await response.json();
      alert('Prescription updated successfully!');

      // Update the prescription in the local state
      setPrescriptions((prev) =>
        prev.map((prescription) =>
          prescription.id === selectedPrescription.id ? data : prescription
        )
      );

      setSelectedPrescription(null); // Close the form after successful update
    } catch (err) {
      console.error('Error updating prescription:', err);
      alert('Error updating prescription');
    }
  };

  // Render loading or error states
  if (loading) {
    return <div>Loading prescriptions...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div>
      <h2>Prescription List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Drug Name</th>
            <th>Dosage</th>
            <th>Pharmacy ID</th>
            <th>Instructions</th>
            <th>Date Prescribed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">No prescriptions available.</td>
            </tr>
          ) : (
            prescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td>{prescription.patient_id}</td>
                <td>{prescription.drug_name || "No drug name available"}</td>
                <td>{prescription.dosage}</td>
                <td>{prescription.pharmacy_id}</td>
                <td>{prescription.instructions}</td>
                <td>{new Date(prescription.date_prescribed).toLocaleDateString()}</td>
                <td>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => updatePrescription(prescription.id)}
                  >
                    Update
                  </button>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => handleDelete(prescription.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Update Prescription Form */}
      {selectedPrescription && (
        <div className="update-form">
          <h3>Update Prescription</h3>
          <form onSubmit={handleSubmitUpdate}>
            <div>
              <label>Patient ID:</label>
              <input
                type="text"
                name="patient_id"
                value={updatedPrescription.patient_id}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Drug Name:</label>
              <input
                type="text"
                name="drug_name"
                value={updatedPrescription.drug_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Dosage:</label>
              <input
                type="text"
                name="dosage"
                value={updatedPrescription.dosage}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Pharmacy ID:</label>
              <input
                type="text"
                name="pharmacy_id"
                value={updatedPrescription.pharmacy_id}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Instructions:</label>
              <textarea
                name="instructions"
                value={updatedPrescription.instructions}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Date Prescribed:</label>
              <input
                type="date"
                name="date_prescribed"
                value={updatedPrescription.date_prescribed}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">Save Changes</button>
            <button type="button" onClick={() => setSelectedPrescription(null)} className="btn btn-secondary">Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}
