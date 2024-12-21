import { getClaims, addClaim, updateClaim, deleteClaim } from '../api/api';
import React, { useState, useEffect } from 'react';

export default function ClaimsPage() {
    const [claims, setClaims] = useState([]);
    const [newClaim, setNewClaim] = useState({
        prescription_id: 0,
        reimbursement_status: 'pending',
        processed_date: new Date().toISOString(),
    });
    const [editClaim, setEditClaim] = useState(null);
    const [showClaims, setShowClaims] = useState(false);

    // Fetch claims from backend
    const fetchClaims = () => {
        getClaims()
            .then(response => setClaims(response.data))
            .catch(error => console.error('Error fetching claims:', error));
    };

    useEffect(() => {
        fetchClaims();
    }, []);

    // Add a new claim
    const handleAddClaim = () => {
        console.log("Submitting new claim:", newClaim);

        addClaim(newClaim)
            .then(response => {
                console.log("Claim added successfully:", response.data);
                setClaims([...claims, response.data]);
                setNewClaim({
                    prescription_id: 0,
                    reimbursement_status: 'pending',
                    processed_date: new Date().toISOString(),
                });
            })
            .catch(error => {
                console.error("Error adding claim:", error.response || error.message || error);
                alert("Failed to add claim. Please check the console for details.");
            });
    };

    // Update an existing claim
    const handleUpdateClaim = (id, updatedFields) => {
        updateClaim(id, updatedFields)
            .then(response => {
                setClaims(claims.map(claim => (claim.id === id ? response.data : claim)));
                setEditClaim(null);
            })
            .catch(error => console.error('Error updating claim:', error));
    };

    // Delete a claim
    const handleDeleteClaim = id => {
        deleteClaim(id)
            .then(() => setClaims(claims.filter(claim => claim.id !== id)))
            .catch(error => console.error('Error deleting claim:', error));
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <button className="btn btn-secondary mb-4" onClick={() => window.location.href = '/'}>
                    Back to Home
                </button>
                <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">Claims Management</h1>
            </div>

            {/* Add New Claim */}
            <div className="card p-6 mb-5 shadow-lg border-t-4 border-indigo-500">
                <h2 className="text-2xl font-semibold mb-3 text-gray-700">Add New Claim</h2>
                <div className="mb-3">
                    <label className="form-label">Prescription ID</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Prescription ID"
                        value={newClaim.prescription_id}
                        onChange={e => setNewClaim({ ...newClaim, prescription_id: parseInt(e.target.value, 10) })}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Reimbursement Status</label>
                    <select
                        className="form-select"
                        value={newClaim.reimbursement_status}
                        onChange={e => setNewClaim({ ...newClaim, reimbursement_status: e.target.value })}
                    >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                <button className="btn btn-indigo w-full py-2" onClick={handleAddClaim}>
                    Add Claim
                </button>
            </div>

            {/* View Claims Button */}
            <div className="text-center mb-4">
                <button
                    className={`btn ${showClaims ? 'btn-danger' : 'btn-success'} py-2 px-4`}
                    onClick={() => setShowClaims(!showClaims)}
                >
                    {showClaims ? 'Hide Claims' : 'View Claims'}
                </button>
            </div>

            {/* View Claims */}
            {showClaims && (
                <div className="card p-6 shadow-lg border-t-4 border-green-500">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-700">All Claims</h2>
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark bg-indigo-600 text-white">
                            <tr>
                                <th>ID</th>
                                <th>Prescription ID</th>
                                <th>Reimbursement Status</th>
                                <th>Processed Date</th>
                                <th>Submission Date</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {claims.map(claim => (
                                <tr key={claim.id} className="hover:bg-gray-100">
                                    <td>{claim.id}</td>
                                    <td>{claim.prescription_id}</td>
                                    <td>
                                        {editClaim?.id === claim.id ? (
                                            <select
                                                className="form-select"
                                                value={editClaim.reimbursement_status}
                                                onChange={e =>
                                                    setEditClaim({ ...editClaim, reimbursement_status: e.target.value })
                                                }
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="approved">Approved</option>
                                                <option value="rejected">Rejected</option>
                                            </select>
                                        ) : (
                                            claim.reimbursement_status
                                        )}
                                    </td>
                                    <td>{new Date(claim.processed_date).toLocaleString()}</td>
                                    <td>{new Date(claim.submission_date).toLocaleString()}</td>
                                    <td>{new Date(claim.created_at).toLocaleString()}</td>
                                    <td>{new Date(claim.updated_at).toLocaleString()}</td>
                                    <td>
                                        {editClaim?.id === claim.id ? (
                                            <>
                                                <button
                                                    className="btn btn-success me-2"
                                                    onClick={() => handleUpdateClaim(claim.id, editClaim)}
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    className="btn btn-secondary"
                                                    onClick={() => setEditClaim(null)}
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    className="btn btn-primary me-2"
                                                    onClick={() => setEditClaim(claim)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDeleteClaim(claim.id)}
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
