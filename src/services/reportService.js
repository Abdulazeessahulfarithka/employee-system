import axios from '../config/axiosConfig.js'; // Adjust the import path as per your structure

const reportService = {
  /**
   * Fetch all reports
   * @returns {Promise<Object>} - Response data containing all reports
   */
  getAllReports: async () => {
    try {
      const response = await axios.get('/api/reports'); // Adjust endpoint if needed
      return response.data;
    } catch (error) {
      console.error('Error fetching reports:', error);
      throw error;
    }
  },

  /**
   * Create a new report
   * @param {Object} reportData - Report data (title, description, etc.)
   * @returns {Promise<Object>} - Response data for created report
   */
  createReport: async (reportData) => {
    try {
      const response = await axios.post('/api/reports', reportData); // Adjust endpoint if needed
      return response.data;
    } catch (error) {
      console.error('Error creating report:', error);
      throw error;
    }
  },

  /**
   * Update an existing report
   * @param {string} id - Report ID
   * @param {Object} updates - Fields to update
   * @returns {Promise<Object>} - Response data for updated report
   */
  updateReport: async (id, updates) => {
    try {
      const response = await axios.put(`/api/reports/${id}`, updates); // Adjust endpoint if needed
      return response.data;
    } catch (error) {
      console.error('Error updating report:', error);
      throw error;
    }
  },

  /**
   * Delete a report
   * @param {string} id - Report ID
   * @returns {Promise<Object>} - Response data for deleted report
   */
  deleteReport: async (id) => {
    try {
      const response = await axios.delete(`/api/reports/${id}`); // Adjust endpoint if needed
      return response.data;
    } catch (error) {
      console.error('Error deleting report:', error);
      throw error;
    }
  },

  /**
   * Fetch reports by employee
   * @param {string} employeeId - Employee ID
   * @returns {Promise<Object>} - Response data containing reports for the employee
   */
  getReportsByEmployee: async (employeeId) => {
    try {
      const response = await axios.get(`/api/reports/employee/${employeeId}`); // Adjust endpoint if needed
      return response.data;
    } catch (error) {
      console.error('Error fetching reports by employee:', error);
      throw error;
    }
  },
};

export default reportService;
