import { useState } from 'react';
import axios from 'axios';

export default function AddDrug() {
  const [drugData, setDrugData] = useState({
    name: '',
    dosage: '',
    manufacturer: '',
    image_url: '',
  });

  const handleChange = (e) => {
    setDrugData({
      ...drugData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending drug data:', drugData); // Log drug data before sending
    try {
      const response = await axios.post('http://localhost:8000/prescription_drugs/', drugData);
      alert('Drug added successfully');
      setDrugData({
        name: '',
        dosage: '',
        manufacturer: '',
        image_url: '',
      });
    } catch (error) {
      console.error('Error adding drug:', error);  // Log the entire error object
      
      if (error.response) {
        // If the server responded with an error, log the response details
        console.error('Error response:', error.response);
        alert(`Error response: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        // If no response was received from the server
        console.error('No response received:', error.request);
        alert('No response from the server');
      } else {
        // If an error occurred while setting up the request
        console.error('Error message:', error.message);
        alert(`Error adding drug: ${error.message}`);
      }
    }
  };
  

  return (
    <div>
      <h2>Add Drug</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={drugData.name}
          onChange={handleChange}
          placeholder="Drug Name"
        />
        <input
          type="text"
          name="dosage"
          value={drugData.dosage}
          onChange={handleChange}
          placeholder="Dosage"
        />
        <input
          type="text"
          name="manufacturer"
          value={drugData.manufacturer}
          onChange={handleChange}
          placeholder="Manufacturer"
        />
        <input
          type="text"
          name="image_url"
          value={drugData.image_url}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <button type="submit">Add Drug</button>
      </form>
    </div>
  );
}
