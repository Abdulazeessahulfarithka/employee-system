import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import "../styles/sb-admin-2.min.css"

function DashboardLayout({ children }) {
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
