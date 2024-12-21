import React, { useState } from 'react';
import { updatePatient } from '../../api/api';

const EditPatient = ({ id, currentName, currentContact }) => {
  const [name, setName] = useState(currentName);
  const [contactInfo, setContactInfo] = useState(currentContact);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePatient(id, { name, contactInfo });
      alert('Patient updated successfully!');
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Patient</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditPatient;
