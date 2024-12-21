
# Prescription Drug System

## Overview
The Prescription Drug System is designed to streamline and manage the process of prescribing, dispensing, and tracking prescription medications. This system provides a robust backend powered by FastAPI and Python and a dynamic frontend built using React, ensuring scalability, efficiency, and a user-friendly interface.

---

## Features
### Backend (FastAPI and Python)
- **Prescription Management**: CRUD operations for prescriptions, including adding, updating, and deleting prescriptions,claims ,pharmacy and patients.
- **Medication Inventory**: Manage medication stocks with real-time updates.
- **Integration with Patient Records**: Link prescriptions to specific patient profiles.
- **API Endpoints**: Expose RESTful APIs for seamless integration with the frontend.
- **Error Handling**: Robust exception handling and logging.

### API Endpoints

The backend exposes RESTful endpoints for interaction:

Endpoints:

### Pharmacies

POST /pharmacies: Create a new pharmacy.

GET /pharmacies: List all pharmacies.

GET /pharmacies/{id}: Retrieve pharmacy details.

PUT /pharmacies/{id}: Update pharmacy details.

DELETE /pharmacies/{id}: Delete a pharmacy.

#### Patients

POST /patients: Create a new patient.

GET /patients: List all patients.

GET /patients/{id}: Retrieve patient details.

PUT /patients/{id}: Update patient details.

DELETE /patients/{id}: Delete a patient.

### Prescriptions

POST /prescriptions: Create a new prescription.

GET /prescriptions: List all prescriptions.

GET /prescriptions/{id}: Retrieve prescription details.

PUT /prescriptions/{id}: Update prescription details.

DELETE /prescriptions/{id}: Delete a prescription.

### Claims

POST /claims: Create a new claim.

GET /claims: List all claims.

GET /claims/{id}: Retrieve claim details.

PUT /claims/{id}: Update claim status.

DELETE /claims/{id}: Delete a claim.

### Frontend (React)
- **User-Friendly Interface**: Responsive design for desktop and mobile users.
- **Dashboard**: Display prescription summaries, inventory statuses, and user activities.
- **Interactive Forms**: Input forms for prescriptions and patient details.
- **Real-Time Updates**: Integration with backend APIs for live data updates.
- **Notifications**: Alerts for low inventory, pending approvals, and other system events.

---

## Technologies Used
### Backend:
- **FastAPI**: For building high-performance RESTful APIs.
- **Python**: As the core language for business logic.
- **SQLAlchemy**: Database ORM for handling complex queries.
- **PostgreSQL/MySQL**: (Optional) As the relational database.

### Frontend:
- **React**: For building an interactive and dynamic user interface.
- **Tailwind**: .
- **Axios**: For making API requests to the backend.
- **Bootstrap/Material-UI**: (Optional) For styling and responsive design.

---

## Installation
### Prerequisites:
- Python (3.8 or above)
- Node.js (14 or above) and npm
- env : pip install flask flask-sqlalchemy
- PostgreSQL or MySQL (if using a relational database)

### Backend Setup:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/prescription-drug-system.git
   cd prescription-drug-system/backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
4. Access API docs at `http://127.0.0.1:8000/docs`.

### Frontend Setup:
1. Navigate to the frontend folder:
   ```bash
   cd prescription-drug-system/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173/` in your browser.

---
## File Structure
### 1.Pharmacy
Pharmacies/
├── AddPharmacy.js
├── PharmacyList.js
├── EditPharmacy.js
├── PharmacyDetails.js

### Usage Instructions

*** View Pharmacies:***

Navigate to the homepage to view all pharmacies.

Click on an image to view details.

***Add Pharmacy:***

Fill out the form in the "Add Pharmacy" section.

Click "Submit" to add the pharmacy.

*** Edit Pharmacy: ***

Click "Edit" on a pharmacy card or in the details view.

Update the fields and click "Save."

*** Delete Pharmacy: ***

Click "Delete" in the details view or list.

Confirm the deletion.

### 2.# Claim Management System

A React-based Claim Management System that allows users to manage insurance claims. This project includes functionality to add, view, update, and delete claims using API integration.

---

## Features

1. **Add a New Claim**
   - Input fields: 
     - Prescription ID
     - Claim Amount
     - Status (Pending, Approved, Denied)
   - Sends a POST request to the `/claims` endpoint to create a new claim.

2. **View Claims**
   - Displays a list of all claims.
   - Includes Prescription ID, Claim Amount, and Reimbursement Status.

3. **Update Claim Details**
   - Editable fields:
     - Claim Amount
     - Status
   - Sends a PUT request to the `/claims/{id}` endpoint to update a claim.

4. **Delete a Claim**
   - Deletes a claim based on its ID.
   - Sends a DELETE request to the `/claims/{id}` endpoint.

---



## Links
GITHUB :https://github.com/EMMA-KAREN/Prescription-Drug-Reimbursement-
POWERPOINT:https://docs.google.com/presentation/d/11n8W7UMNrAGENCG-Tttz99dN9PezlPmwgUzPhpiet24/edit?usp=sharing
PRESENTATION:https://www.loom.com/share/d9996a42faf54285b59ab06591a832b4?sid=bf18bd34-ffad-4478-aab0-b39dccd593c4
DEPLOYMENT:

### Future Improvements

Add user authentication and role-based access control.

Enhance styling with custom themes.

Implement pagination for large datasets.

Add unit and integration tests.





## API Documentation
API documentation is auto-generated using FastAPI and can be accessed at `http://127.0.0.1:8000/docs`.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to the branch:
   ```bash
   git commit -m "Added new feature"
   git push origin feature-name
   ```
4. Open a pull request on GitHub.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Contact
For any inquiries or contributions, please contact:
- **Email**:mumokaren26@gmail.com
- **GitHub**: [yourusername](https://github.com/yourusername)
