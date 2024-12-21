import React, { useState } from 'react';
import { addPharmacy } from '../../api/api';

const AddPharmacy = ({ onPharmacyAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact_info: '',
    image_url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addPharmacy(formData);
      onPharmacyAdded(response.data); // Notify parent to update the list
    } catch (error) {
      console.error('Error creating pharmacy:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Pharmacy</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Pharmacy Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact_info" className="form-label">Contact Info</label>
          <input
            type="text"
            id="contact_info"
            name="contact_info"
            value={formData.contact_info}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">Image URL</label>
          <input
            type="url"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Create Pharmacy</button>
      </form>
    </div>
  );
};

export default AddPharmacy;
