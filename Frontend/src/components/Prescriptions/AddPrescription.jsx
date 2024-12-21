import React, { useState } from 'react';
import { addPrescription } from '../../api/api'; // Make sure this is correctly imported

const AddPrescription = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    patient_id: '',
    drug_id: '',
    dosage: '',
    pharmacy_id: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert IDs to integers
    const dataToSend = {
      ...formData,
      patient_id: parseInt(formData.patient_id),
      drug_id: parseInt(formData.drug_id),
      pharmacy_id: formData.pharmacy_id ? parseInt(formData.pharmacy_id) : null,
    };
  
    try {
      const response = await addPrescription(dataToSend);
      console.log("Prescription added successfully:", response);
      alert("Prescription added successfully!");
      onAdd(); // Trigger refresh or callback
      setFormData({
        patient_id: '',
        drug_id: '',
        dosage: '',
        pharmacy_id: '',
        instructions: '',
      });
    } catch (error) {
      console.error("Error adding prescription:", error);
      if (error.response) {
        console.error("Error response:", error.response);
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        alert("Error adding prescription.");
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="patient_id" className="form-label">Patient ID</label>
        <input
          type="text"
          name="patient_id"
          id="patient_id"
          className="form-control"
          value={formData.patient_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="drug_id" className="form-label">Drug ID</label>
        <input
          type="text"
          name="drug_id"
          id="drug_id"
          className="form-control"
          value={formData.drug_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dosage" className="form-label">Dosage</label>
        <input
          type="text"
          name="dosage"
          id="dosage"
          className="form-control"
          value={formData.dosage}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pharmacy_id" className="form-label">Pharmacy ID</label>
        <input
          type="text"
          name="pharmacy_id"
          id="pharmacy_id"
          className="form-control"
          value={formData.pharmacy_id}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="instructions" className="form-label">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          className="form-control"
          value={formData.instructions}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Prescription</button>
    </form>
  );
};

export default AddPrescription;
