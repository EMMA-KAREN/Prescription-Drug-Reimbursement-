import React, { useState } from 'react';
import { addPatient } from '../../api/api';

const AddPatient = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    contact_info: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPatient(formData);
      alert('Patient added successfully');
    } catch (error) {
      console.error(error);
      alert('Error adding patient');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Add New Patient</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="form-control p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="form-control p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="form-control p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="contact_info"
            placeholder="Contact Info"
            value={formData.contact_info}
            onChange={handleChange}
            className="form-control p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatient;
