import React, { useEffect, useState } from 'react';
import reportService from '../../services/reportService.js';

const ReportManagement = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const data = await reportService.getAllReports();
      setReports(data.reports);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const deleteReport = async (id) => {
    try {
      await reportService.deleteReport(id);
      fetchReports(); // Refresh the report list after deletion
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  };

  return (
    <div>
      <h1>Report Management</h1>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <strong>{report.title}</strong>
            <button onClick={() => deleteReport(report._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportManagement;
