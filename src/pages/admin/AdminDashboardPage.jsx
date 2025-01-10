import React from 'react';
import { Link } from 'react-router-dom';
import "../../components/styles/global.css"
import DashboardLayout from '../../components/dashboard/Dashboardlayout.js';


const AdminDashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="admin-dashboard">
      <h1>Welcome, Admin!</h1>
      <p>Manage your application effectively using the tools below.</p>

      <div className="admin-cards">
        {/* Employee Management Card */}
        <div className="card">
          <h2>Employee Management</h2>
          <p>View, add, and manage employees in the system.</p>
          <Link to="/employee-management" className="btn">
            Manage Employees
          </Link>
        </div>

        {/* Task Management Card */}
        <div className="card">
          <h2>Task Management</h2>
          <p>Create, assign, and track tasks for employees.</p>
          <Link to="/task-management" className="btn">
            Manage Tasks
          </Link>
        </div>

        {/* Reports Card */}
        <div className="card">
          <h2>Reports</h2>
          <p>Analyze system performance with detailed reports.</p>
          <Link to="/reports-management" className="btn">
            View Reports
          </Link>
        </div>

        {/* Time Logs Card */}
        <div className="card">
          <h2>Time Logs</h2>
          <p>Track and review employee work hours and logs.</p>
          <Link to="/time-logs" className="btn">
            View Time Logs
          </Link>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default AdminDashboardPage;
