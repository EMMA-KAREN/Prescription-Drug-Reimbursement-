import React, { useEffect, useState } from 'react';
import { getPharmacies, deletePharmacy, updatePharmacy } from '../../api/api';
import EditPharmacy from './EditPharmacy';


const PharmacyList = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchPharmacies();
  }, []);

  const fetchPharmacies = async () => {
    try {
      const response = await getPharmacies();
      setPharmacies(response.data || []);
    } catch (error) {
      console.error('Error fetching pharmacies:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePharmacy(id);
      fetchPharmacies();
    } catch (error) {
      console.error('Error deleting pharmacy:', error.message);
    }
  };

  const handleUpdate = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
    setShowEdit(true);
  };

  const handleSaveChanges = async (updatedPharmacy) => {
    try {
      await updatePharmacy(updatedPharmacy.id, updatedPharmacy);
      setShowEdit(false);
      fetchPharmacies();
    } catch (error) {
      console.error('Error updating pharmacy:', error.message);
    }
  };

  const handleImageClick = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPharmacy(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-primary">Pharmacies</h2>

      <div className="row">
        {pharmacies.length === 0 ? (
          <p>No pharmacies found.</p>
        ) : (
          pharmacies.map((pharmacy) => (
            <div key={pharmacy.id} className="col-12 col-sm-6 col-lg-4 mb-4">
              <div
                className="card shadow-md rounded-md transition-transform transform hover:-translate-y-2 hover:shadow-lg bg-gradient-to-r from-green-100 via-blue-100 to-indigo-100"
              >
                {pharmacy.image_url && (
                  <img
                    src={pharmacy.image_url}
                    alt={pharmacy.name}
                    className="card-img-top cursor-pointer"
                    onClick={() => handleImageClick(pharmacy)}
                    style={{
                      maxHeight: '200px',
                      objectFit: 'cover',
                    }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title text-lg font-semibold text-indigo-900">
                    {pharmacy.name}
                  </h5>
                  <p className="card-text text-sm text-gray-800">
                    {pharmacy.address}
                  </p>
                  <p className="card-text text-sm text-gray-800">
                    {pharmacy.contact_info}
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(pharmacy.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUpdate(pharmacy)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {showEdit && selectedPharmacy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <EditPharmacy
              pharmacy={selectedPharmacy}
              onSave={handleSaveChanges}
              onCancel={() => setShowEdit(false)}
            />
          </div>
        </div>
      )}

      {showModal && selectedPharmacy && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedPharmacy.name}</h2>
            {selectedPharmacy.image_url && (
              <img
                src={selectedPharmacy.image_url}
                alt={selectedPharmacy.name}
                className="w-full mb-4"
                style={{
                  maxHeight: '300px',
                  objectFit: 'cover',
                }}
              />
            )}
            <p>
              <strong>Address:</strong> {selectedPharmacy.address}
            </p>
            <p>
              <strong>Contact Info:</strong> {selectedPharmacy.contact_info}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PharmacyList;
