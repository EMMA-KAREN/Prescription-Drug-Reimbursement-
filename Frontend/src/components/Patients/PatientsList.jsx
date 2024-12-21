import React, { useEffect, useState } from 'react';
import { getPatients, deletePatient, updatePatient } from '../../api/api';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editingPatient, setEditingPatient] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    contact_info: '',
    email: '', // Add more fields as necessary
    address: '', // Add more fields as necessary
    date_of_birth: '' // Add more fields as necessary
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await getPatients();
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePatient(id);
      fetchPatients(); // Refresh the list
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient);
    setFormData({
      first_name: patient.first_name,
      last_name: patient.last_name,
      contact_info: patient.contact_info,
      email: patient.email || '',
      address: patient.address || '',
      date_of_birth: patient.date_of_birth || ''
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (id) => {
    try {
      await updatePatient(id, formData); // Use formData directly
      fetchPatients(); // Refresh patient list
      setEditingPatient(null); // Close the edit modal
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl font-bold mb-4">Patients</h2>
      <ul className="list-group">
        {patients.map((patient) => (
          <li
            key={patient.id}
            className="list-group-item d-flex justify-content-between align-items-center bg-gray-100 hover:bg-gray-200 rounded-md my-2 shadow-sm"
          >
            <span
              onClick={() => setSelectedPatient(patient)}
              className="cursor-pointer text-blue-500 underline"
            >
              {patient.first_name} {patient.last_name}
            </span>
            <span>{patient.contact_info}</span>
            <div>
              <button
                className="btn btn-primary btn-sm mx-1"
                onClick={() => handleEdit(patient)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(patient.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <div className="modal fade show d-block bg-gray-900 bg-opacity-50">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedPatient.first_name} {selectedPatient.last_name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedPatient(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Contact: {selectedPatient.contact_info}</p>
                <p>Email: {selectedPatient.email}</p>
                <p>Address: {selectedPatient.address}</p>
                <p>Date of Birth: {selectedPatient.date_of_birth}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedPatient(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Patient Modal */}
      {editingPatient && (
        <div className="modal fade show d-block bg-gray-900 bg-opacity-50">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Patient</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setEditingPatient(null)}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      value={formData.first_name || ''}
                      onChange={handleEditChange}
                      placeholder={editingPatient.first_name || "First Name"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      value={formData.last_name || ''}
                      onChange={handleEditChange}
                      placeholder={editingPatient.last_name || "Last Name"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Info:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="contact_info"
                      value={formData.contact_info || ''}
                      onChange={handleEditChange}
                      placeholder={editingPatient.contact_info || "Contact Info"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleEditChange}
                      placeholder={editingPatient.email || "Email"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={formData.address || ''}
                      onChange={handleEditChange}
                      placeholder={editingPatient.address || "Address"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date_of_birth"
                      value={formData.date_of_birth || ''}
                      onChange={handleEditChange}
                      placeholder={editingPatient.date_of_birth || "Date of Birth"}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleUpdate(editingPatient.id)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setEditingPatient(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientList;
