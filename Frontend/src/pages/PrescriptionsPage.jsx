import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPrescription from '../components/Prescriptions/AddPrescription';
import PrescriptionList from '../components/Prescriptions/PrescriptionList';
import AddDrug from '../components/Prescriptions/AddDrug'; // Import AddDrug component

export default function PrescriptionsPage() {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [showAddDrug, setShowAddDrug] = useState(false); // State to control AddDrug visibility

  const handleAddPrescription = () => setRefresh((prev) => !prev);

  // Function to toggle the AddDrug form visibility
  const toggleAddDrugForm = () => setShowAddDrug(!showAddDrug);

  return (
    <div className="container min-h-screen py-6 bg-gradient-to-b from-blue-50 to-indigo-100 universe-bg">
      <div className="text-center mb-6">
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary rounded-pill universe-btn px-4 py-2 me-2"
        >
          <i className="fas fa-arrow-left me-2"></i> Back to Home
        </button>
      </div>
      <h1 className="display-4 text-center text-indigo-700 mb-5">Prescriptions</h1>

      <div className="row">
        <div className="col-lg-6 mx-auto mb-4">
          <div className="card border-0 shadow universe-card">
            <div className="card-body">
              <h2 className="card-title text-center text-primary">Add Prescription</h2>
              <AddPrescription onAdd={handleAddPrescription} />
            </div>
          </div>
        </div>

        {/* Button to toggle AddDrug form visibility */}
        <div className="col-lg-6 mx-auto mb-4">
          <button
            onClick={toggleAddDrugForm}
            className="btn btn-success rounded-pill universe-btn px-4 py-2 w-100"
          >
            {showAddDrug ? 'Hide Add Drug Form' : 'Add Drug'}
          </button>
        </div>

        {/* Conditionally render the AddDrug component */}
        {showAddDrug && (
          <div className="col-lg-6 mx-auto mb-4">
            <div className="card border-0 shadow universe-card">
              <div className="card-body">
                <h2 className="card-title text-center text-success">Add Drug</h2>
                <AddDrug />
              </div>
            </div>
          </div>
        )}

        <div className="col-lg-12">
          <div className="card border-0 shadow universe-card">
            <div className="card-body">
              <h2 className="card-title text-center text-success">Prescription List</h2>
              <PrescriptionList refresh={refresh} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
