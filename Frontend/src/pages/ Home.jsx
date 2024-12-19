import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
        Welcome to the Prescription System
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Manage patients, prescriptions, and claims easily!
      </p>
      <nav>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li>
            <Link
              to="/patients"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
            >
              Patients
            </Link>
          </li>
          <li>
            <Link
              to="/pharmacies"
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200"
            >
              Pharmacies
            </Link>
          </li>
          <li>
            <Link
              to="/prescriptions"
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-200"
            >
              Prescriptions
            </Link>
          </li>
          <li>
            <Link
              to="/claims"
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
            >
              Claims
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
