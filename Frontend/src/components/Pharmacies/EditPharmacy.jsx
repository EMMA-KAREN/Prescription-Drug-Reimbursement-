import React, { useState } from 'react';

const EditPharmacy = ({ pharmacy, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...pharmacy });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass the updated data back to the parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold mb-4">Edit Pharmacy</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Pharmacy Name"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        name="contact_info"
        value={formData.contact_info}
        onChange={handleInputChange}
        placeholder="Contact Info"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        name="image_url"
        value={formData.image_url}
        onChange={handleInputChange}
        placeholder="Image URL"
        className="w-full mb-2 p-2 border rounded"
      />
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditPharmacy;
