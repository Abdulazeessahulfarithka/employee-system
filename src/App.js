import { Routes, Route, useParams } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import DashboardLayout from "./components/dashboard/Dashboardlayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import EmployeeManagementPage from "./pages/admin/EmployeeManagementPage";
import TaskManagementPage from "./pages/admin/TaskManagementPage";
import ReportManagement from "./pages/admin/ReportsManagementPage";
import DashboardEmployee from "./pages/employee/DashboardEmployee";
import ReportPage from "./pages/employee/ReportPage.jsx";
import AdminRoute from "./route/AdminRoute";
import TaskDetailsPage from "./pages/employee/TaskDetailsPage";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/user-dashboard" element={<DashboardEmployee />} />
      <Route path={"/user-dashboard/task-details/:employeeId"} element={<TaskDetailsPage />} /> 
      <Route path="/task-report" element={<ReportPage />} />

      {/* Admin Routes */}
      <Route path="/admin-dashboard" element={<AdminDashboardPage />}/>
        <Route path="/employee-management" element={<EmployeeManagementPage />} />
        <Route path="task-management" element={<TaskManagementPage />} />
        <Route path="report-management" element={<ReportManagement />} />

      {/* Fallback Route */}
    </Routes>
  );
}

export default App;
