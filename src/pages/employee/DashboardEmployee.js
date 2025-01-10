import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/Dashboardlayout.js';
import '../../components/styles/DashboardEmployee.css';

function DashboardEmployee() {
  const navigate = useNavigate();
  const { employeeId } = useParams(); // Extract the 'employeeId' parameter from the URL

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the provided path
  };

  return (
    <DashboardLayout>
      <div className="dashboard-employee-container">
        <h1>Welcome to the Employee Dashboard</h1>
        <div className="dashboard-cards">
          {/* Task Card */}
          <div
            className="dashboard-card"
            onClick={() => handleCardClick(`task-details/${employeeId}`)} // Corrected URL path
          > {console.log(employeeId)}
            <h3>Tasks</h3>
            <p>View and manage your tasks efficiently.</p>
          </div>

          {/* Project Card */}
          <div
            className="dashboard-card"
            onClick={() => handleCardClick('/project-details')}
          >
            <h3>Projects</h3>
            <p>Track the progress of ongoing projects.</p>
          </div>

          {/* Report Card */}
          <div
            className="dashboard-card"
            onClick={() => handleCardClick('/report-details')}
          >
            <h3>Reports</h3>
            <p>Generate detailed performance reports.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardEmployee;
