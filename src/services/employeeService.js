import axios from '../config/axiosConfig.js'; // Adjust the import path as per your structure

const employeeService = {
  getAllEmployees: async () => {
    try {
      const response = await axios.get('/api/user/getallemployee'); // Adjust endpoint if needed
      return response.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  },

  deleteEmployee: async (id) => {
    try {
      const response = await axios.delete(`/api/user/deleteemployee/${id}`); // Adjust endpoint if needed
      return response.data;
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  },
};

export default employeeService;
