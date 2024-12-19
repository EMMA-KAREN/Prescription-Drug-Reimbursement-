import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/ Home';
import PatientsPage from './pages/PatientsPage';
import PharmaciesPage from './pages/PharmaciesPage';
import PrescriptionsPage from './pages/PrescriptionsPage';
import ClaimsPage from './pages/ClaimsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/pharmacies" element={<PharmaciesPage />} />
        <Route path="/prescriptions" element={<PrescriptionsPage />} />
        <Route path="/claims" element={<ClaimsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
