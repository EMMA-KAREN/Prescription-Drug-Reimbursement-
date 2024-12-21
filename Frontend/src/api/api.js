import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Flask backend URL

// Patients APIs
export const getPatientById = (id) => axios.get(`${BASE_URL}/patients/${id}`);
export const getPatients = () => axios.get(`${BASE_URL}/patients`);
export const addPatient = (data) => axios.post(`${BASE_URL}/patients`, data);
export const updatePatient = (id, data) => axios.put(`${BASE_URL}/patients/${id}`, data);
export const deletePatient = (id) => axios.delete(`${BASE_URL}/patients/${id}`);

// Pharmacies APIs
export const getPharmacies = () => axios.get(`${BASE_URL}/pharmacies`);
export const addPharmacy = (data) => axios.post(`${BASE_URL}/pharmacies`, data);
export const updatePharmacy = (id, data) => axios.put(`${BASE_URL}/pharmacies/${id}`, data);
export const deletePharmacy = (id) => axios.delete(`${BASE_URL}/pharmacies/${id}`);

// Prescriptions APIs
export const getPrescriptions = () => axios.get(`${BASE_URL}/prescriptions`);
export const addPrescription = (data) => axios.post(`${BASE_URL}/prescriptions`, data);
export const updatePrescription = (id, data) =>
  axios.put(`${BASE_URL}/prescriptions/${id}`, data);
export const deletePrescription = (id) =>
  axios.delete(`${BASE_URL}/prescriptions/${id}`);

// Claims APIs
export const getClaims = () => axios.get(`${BASE_URL}/claims`);
export const addClaim = (data) => axios.post(`${BASE_URL}/claims`, data);
export const updateClaim = (id, data) => axios.put(`${BASE_URL}/claims/${id}`, data);
export const deleteClaim = (id) => axios.delete(`${BASE_URL}/claims/${id}`);

export const fetchDrugs = async () => {
  const response = await axios.get('http://localhost:8000/prescription_drugs/');
  return response.data;
};